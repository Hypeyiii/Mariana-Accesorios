import { GoArrowRight, GoArrowLeft  } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState, useEffect } from "react";
import './Info.css'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

function IndividualBuyModal({onCloseOnce, productName, img, back, price, quantity}){
    const [isHover, setIsHover] = useState(true);

    const isHovering = () => {
        setIsHover(true);
    }
    const isNotHovering = () => {  
        setIsHover(false);
    }
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 768){
            setIsMobile(true);
        }
        else{
            setIsMobile(false);
        }
    })
    return(
        <>
            <div className="fixed inset-0 w-screen h-screen bg-black/90 text-white z-40" onClick={onCloseOnce}></div>
            <div className="scale-in-center fixed top-0 right-0 left-0 bottom-0 m-auto items-center justify-start bg-white w-[95%] md:w-[27%] h-2/3 md:h-[80%] z-50 overflow-y-auto
                shadow-2xl shadow-black/70 flex flex-col gap-y-4 gap-x-4 px-4" onMouseEnter={isHovering} onMouseLeave={isNotHovering}>
                    <div className="absolute top-0 left-0 bg-white/50 text-pink-300 hover:text-red-500 p-4 z-50 cursor-pointer" onClick={back}>
                        <MdArrowBackIosNew className="size-8 hover:bg-gray-200 transition"/>
                    </div>
                    <div className="absolute top-0 flex flex-row gap-x-2 items-center justify-center right-0 left-0 mt-4">
                        <p className="text-black/70 font-semibold text-2xl border-b-2 border-b-pink-300">Comprar ahora</p>
                    </div>
                <div className="relative [&>img]:hover:scale-100 w-full col-span-6 flex items-center justify-center transition mt-24">
                    <img src={img} alt={img + "Image"} className="transition scale-90 size-[175px] md:size-[300px]"/>
                    {
                        isHover ? (
                            <>
                        <div className="blur-in absolute right-0 p-1 rounded-full border-[0.5px] border-black/50
                        cursor-pointer hover:shadow-lg shadow-black">
                        <GoArrowRight className="size-8 text-black/50"/>
                        </div>
                        <div className="blur-in absolute left-0 p-1 rounded-full border-[0.5px] border-black/50
                        cursor-pointer hover:shadow-lg shadow-black">
                        <GoArrowLeft className="size-8 text-black/50"/>
                        </div>
                            </>
                        )
                        :
                        <>
                        <div className="blur-out absolute right-0 p-1 rounded-full border-[0.5px] border-black/50
                        cursor-pointer hover:shadow-lg shadow-black">
                        <GoArrowRight className="size-8 text-black/50"/>
                        </div>
                        <div className="blur-out absolute left-0 p-1 rounded-full border-[0.5px] border-black/50
                        cursor-pointer hover:shadow-lg shadow-black">
                        <GoArrowLeft className="size-8 text-black/50"/>
                        </div>
                            </>
                    }
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 col-span-6 px-2">
                    <h1 className="text-black/80 text-base font-medium">{productName}</h1>
                    <h1 className="text-lg font-bold text-black/90">${price}.00 <span>MX</span></h1>
                    <p>Talla</p>
                    <div className="flex items-center justify-center px-1 py-3 rounded-full border-[0.5px] border-black/20 text-black">
                        45cm
                    </div>
                    <div className="text-sm flex flex-row gap-x-6 items-center justify-center mt-5">
                        <div className="p-2 rounded-full border-[0.5px] border-pink-300 cursor-pointer">
                            <FaMinus/>
                        </div>
                        <p className="text-base font-semibold">{quantity}</p>
                        <div className="p-2 rounded-full border-[0.5px] border-pink-300 cursor-pointer">
                            <FaPlus/>
                        </div>
                    </div>
                </div>
                {
                    isMobile ? (
                        <button className="bg-black text-white hover:bg-pink-300/60 hover:text-black transition w-full py-4 flex flex-row gap-x-3 items-center justify-center">
                         <FiShoppingCart/>
                        <p>Comprar Ahora</p>
                        </button>
                    )
                    :
                    <button className="absolute bottom-0 bg-black text-white hover:bg-pink-300/60 hover:text-black transition w-full py-4 flex flex-row gap-x-3 items-center justify-center">
                         <FiShoppingCart/>
                        <p>Comprar Ahora</p>
                        </button>
                }
            </div>
        </>
    )
}
export default IndividualBuyModal;