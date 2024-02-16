import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { parse } from "postcss";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post("http://localhost:5174/api/checkout", {
        id,
        amount: parseInt(price) * 100,
      });
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col w-full">
      <CardElement className="bg-white justify-between items-center p-5 mx-auto w-full" />
      <button className="p-2 bg-black text-white hover:bg-pink-300/60 hover:text-black transition ">Comprar ahora</button>
    </form>
  );
};

export default CheckoutForm;
