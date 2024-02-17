import stripe from 'stripe';
import express from 'express';
import cors from 'cors';
import { all } from 'axios';

const app = express();

const Stripe = new stripe('sk_test_51OkKmsBlx8QfT450krMQKATGt54DVjKKjr8FO6kUVUCGtMLJiOJrZ24WXkZjDLBZ5wBKNwWEntx9RmxAOTNepbaX00pk20U1TR')

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

const customerId = 'cus_123456789'


app.post('/api/checkout', async (req, res) => {
    try {
        const { id, amount, name, email, phoneNumber, allProducts } = req.body;
        const payment = await Stripe.paymentIntents.create({
            amount,
            currency: 'MXN',
            payment_method: id,
            confirmation_method: 'manual',
            confirm: true,
            return_url: 'http://localhost:5173',
            receipt_email: email,
            description: `Compra de ${name}, productos: ${allProducts}`,
            metadata: { phoneNumber },
        });
        if( payment.status === 'succeeded'){
            console.log('Successful Payment');
        }
        console.log(payment);
        res.json({ message: 'Successful Payment', payment });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.raw.message });
    }
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
