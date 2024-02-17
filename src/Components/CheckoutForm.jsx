import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowRight, FaStripeS } from "react-icons/fa6";
import "../hooks/Info.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CheckoutForm = ({ price, onBuy, onBack, allProducts }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    let timeout;
    if (paymentSuccess) {
      timeout = setTimeout(() => {
        setPaymentSuccess(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [paymentSuccess]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, phoneNumber } = e.target.elements;
    if (
      !stripe ||
      !elements ||
      !name.value ||
      !email.value ||
      !phoneNumber.value
    ) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post("http://localhost:5174/api/checkout", {
        id,
        amount: parseInt(price) * 100,
        email: email.value,
        name: name.value,
        phoneNumber: phoneNumber.value,
        allProducts: allProducts
          .map((product) => product.productName)
          .join(", "),
      });
      setPaymentSuccess(true);
      console.log(data);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 z-50 w-screen h-screen bg-black/70 m-auto"
        onClick={onBuy}
      ></div>
      <div className="scale-in-center z-50 fixed bg-white top-0 bottom-0 right-0 mx-auto left-0 my-auto w-screen h-screen md:w-[70%] md:h-[80%] md:rounded-[30px] overflow-y-auto">
        <div
          className="absolute top-0 right-0 p-5 text-pink-300 cursor-pointer text-2xl hover:text-red-500 z-50"
          onClick={onBack}
        >
          <FaArrowRight className="hover:scale-125 transition duration-500" />
        </div>
        <div className="grid grid-cols-12 w-full h-full gap-4 md:gap-0">
          <div
            className="col-span-12 md:col-span-4 w-ful h-full relative flex items-center justify-center p-4 bg-white 
          [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] md:rounded-l-[25px]"
          >
            <div className="absolute top-0 left-0 md:left-auto md:right-0 p-5">
              <div className="p-1 text-white bg-purple-500 rounded-lg group/item">
                <FaStripeS />
                <div className="invisible group-hover/item:visible absolute text-white bottom-4 left-12 text-xs w-fit p-2 text-center bg-black/50 mx-auto">
                  ir a stripe.com
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center md:text-pretty gap-y-8 mt-10 md:mt-0">
              <p className="text-xl md:text-3xl text-black font-bold w-full">
                Nuestros pagos y transacciones son procesados y asegurados por{" "}
                <a
                  href="https://stripe.com/es"
                  target="_blank"
                  rel="noopener noreference"
                  className="text-black hover:underline transition hover:text-purple-500"
                >
                  Stripe
                </a>
              </p>
              <img
                src="https://static.tildacdn.com/tild3332-6431-4536-b461-356361346362/Screen_Shot_2022-03-.png"
                alt="Shopping online image"
              />
            </div>
          </div>
          <div className="text-base flex flex-col items-center justify-center col-span-12 md:col-span-8 mx-auto gap-10 relative w-full">
            {paymentSuccess ? (
              <div className="slide-in-blurred-top text-2xl font-bold text-green-500">
                ¡Pago realizado exitosamente!
              </div>
            ) : (
              <>
                <h1 className="text-base md:text-2xl font-semibold">
                  Total a pagar: <span>${price}.00 MX</span>
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 items-center justify-center"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-black font-normal text-sm md:text-base">
                        Nombre
                      </p>
                      <input
                        type="text"
                        name="name"
                        placeholder=""
                        className="rounded-lg border-black/30 shadow-black/20 shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-black font-normal text-sm md:text-base">
                        Apellido
                      </p>
                      <input
                        type="text"
                        placeholder=""
                        className="rounded-lg border-black/30 shadow-black/20 shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-black font-normal text-sm md:text-base">
                        Número telefónico
                      </p>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder=""
                        className="rounded-lg border-black/30 shadow-black/20 shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-black font-normal text-sm md:text-base">
                        Correo electrónico
                      </p>
                      <input
                        type="email"
                        placeholder=""
                        name="email"
                        className="rounded-lg border-black/30 shadow-black/20 shadow-lg"
                      />
                    </div>
                  </div>
                  <CardElement className="bg-white justify-between items-center p-5 mx-auto w-full" />
                  <button className="p-2 bg-black text-white hover:bg-pink-300/60 hover:text-black transition cursor-pointer font-medium md:absolute bottom-0 w-full">
                    {loading ? (
                      <div className="flex flex-row gap-x-2 items-center justify-center">
                        <AiOutlineLoading3Quarters className="animate-spin" />
                        <h1>Procesando pago</h1>
                      </div>
                    ) : (
                      "Pagar ahora"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
