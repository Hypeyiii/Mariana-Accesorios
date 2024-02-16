import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ price, onBuy }) => {
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
    <>
      <div
        className="fixed top-0 z-50 w-screen h-screen bg-black/70 m-auto"
        onClick={onBuy}
      ></div>
        <div className="z-50 fixed bg-white flex flex-col gap-4 p-[30px] top-0 bottom-0 size-fit right-0 mx-auto left-0 my-auto">
          <h1 className="text-2xl font-semibold">Total a pagar: <span>${price}.00 MX</span></h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <CardElement className="bg-white justify-between items-center p-5 mx-auto w-full" />
            <button className="p-2 bg-black text-white hover:bg-pink-300/60 hover:text-black transition ">
              Comprar ahora
            </button>
          </form>
        </div>
    </>
  );
};

export default CheckoutForm;
