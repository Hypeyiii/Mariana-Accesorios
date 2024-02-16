import stripe from 'stripe';
import express from 'express';
import cors from 'cors';

const app = express();

const Stripe = new stripe('sk_test_51OkKmsBlx8QfT450krMQKATGt54DVjKKjr8FO6kUVUCGtMLJiOJrZ24WXkZjDLBZ5wBKNwWEntx9RmxAOTNepbaX00pk20U1TR')

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/api/checkout', async (req, res) => {
    try {
        const { id, amount } = req.body;
        const payment = await Stripe.paymentIntents.create({
            amount,
            currency: 'MXN',
            payment_method: id,
        });
        console.log(payment);
        res.send({ message: "Successful Payment" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.raw.message });
    }
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
