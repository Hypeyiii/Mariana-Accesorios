import { MdClose } from 'react-icons/md';
import './Info.css';
import { FaCartShopping, FaFacebook, FaHeart, FaInstagram, FaStar } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from 'react';

function InfoProductModal({onClose, img, name, category, price, addToCart, addToFavorite, size, onBuyOne}) {
const [selectedImage, setSelectedImage] = useState(img);

  return (
    <>
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-40" onClick={onClose}></div>
            <div className="scale-in-center fixed mx-auto inset-0 top-0 w-[95%] md:w-9/12 h-[90%] md:h-[80%] overflow-y-auto py-[50px] shadow-2xl shadow-black
                 bg-white m-auto items-center justify-center grid grid-cols-12 gap-x-2 border-2 border-black gap-y-2 px-2 z-50">
                <div className='col-span-12 absolute top-0 flex items-center justify-center w-full mt-2'>
                    <h1 className='text-lg md:text-2xl font-bold text-black/80'>Detalles del Producto</h1>
                </div>
                <MdClose className="absolute top-2 right-2 size-6 md:size-10 text-3xl cursor-pointer text-pink-300 hover:text-red-600 hover:bg-gray-200 z-50" 
                    onClick={onClose}/>
                    <div className=' col-span-12 md:col-span-2 flex flex-row md:flex-col gap-2 md:gap-4 items-center justify-center md:h-full'>
                        <div className='flex flex-col gap-2 items-center justify-center p-2  md:border bg-[#f6f6f6] size-2/4 
                             border-black/5 md:border-black/5 hover:border-black/60 hover:shadow-md hover:shadow-black/60 md:hover:scale-105 transition'
                             onClick={()=>setSelectedImage(img)}>
                            <img src={img} alt="Image" className=''/>
                            <p className='text-[8px] border-b-[1px] md:border-b-2 border-b-pink-300 text-center'>Vista frontal</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-2/4  md:border bg-[#f6f6f6]
                            md:border-black/5 hover:border-black/60 hover:shadow-md hover:shadow-black/60 md:hover:scale-105 transition'
                            onClick={()=>setSelectedImage(img)}>
                            <img src={img} alt="Image" className=''/>
                            <p className='text-[8px] border-b-[1px] md:border-b-2 border-b-pink-300 text-center'>Vista lateral</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-2/4  md:border bg-[#f6f6f6]
                            md:border-black/5 hover:border-black/60 hover:shadow-md hover:shadow-black/60 md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='' onClick={()=>setSelectedImage(img)}/>
                            <p className='text-[8px] border-b-[1px] md:border-b-2 border-b-pink-300 text-center'>Vista lateral</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-2/4  md:border bg-[#f6f6f6] 
                            md:border-black/5 hover:border-black/60 hover:shadow-md hover:shadow-black/60 md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='' onClick={()=>setSelectedImage(img)}/>
                            <p className='text-[8px] border-b-[1px] md:border-b-2 border-b-pink-300 text-center'>Vista trasera</p>
                        </div>
                    </div>
                    <div className=' col-span-12 md:col-span-6 flex items-center justify-center md:bg-[#f6f6f6] [&>img]:hover:scale-100
                        md:border md:border-black/10 h-full flex-col'>
                        <img src={selectedImage} alt={`${name} Image`} className='transition md:scale-90 cursor-zoom-in'/>
                    </div>
                    <div className='h-full col-span-12 md:col-span-4 flex flex-col gap-y-4 items-center justify-center px-4'>
                        <p className='text-black/80 text-sm md:text-base border-b-[1px] md:border-b-2 border-b-pink-300'>{category}</p>
                        <h1 className='text-black font-semibold text-base md:text-2xl'>{name}</h1>
                        <h2 className='text-black/90 font-bold text-sm md:text-base'>${price}.00 <span className='text-xs'>MX</span></h2>
                        <div className='flex flex-row gap-x-1 cursor-pointer'>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                        </div>
                        <p className='text-xs md:text-sm font-bold text-black/80'>Talla Seleccionada: {size}</p>
                        <button className='py-2 px-6 text-white bg-black rounded-sm font-bold text-xs hover:bg-pink-300/60 hover:text-black transition'>
                            Guía de talla
                        </button>
                        <div className='text-black/90 bg-[#f6f6f6] w-full p-2 text-xs md:text-sm flex flex-row items-center justify-center gap-x-2 mt-5'>
                            <TbTruckDelivery className='text-black/80'/>
                            <p className='text-black/80'>Producto listo para envío</p>
                        </div>
                        <div className='flex flex-row gap-x-2 items-center justify-center mt-5'>
                        <button className='py-2 px-2 md:px-6 text-white bg-black rounded-sm font-bold text-[10px] md:text-xs hover:bg-pink-300/60
                        hover:text-black transition flex flex-row gap-x-1 items-center justify-center'
                            onClick={addToCart}>
                            <FaCartShopping className='size-3 md:size-4'/>
                            Añadir al Carrito
                        </button>
                        <button className='py-2 px-2 md:px-6 text-white bg-black rounded-sm font-bold text-[10px] md:text-xs hover:bg-pink-300/60
                         hover:text-black transition flex flex-row gap-x-1 items-center justify-center'
                            onClick={addToFavorite}>
                            <FaHeart className='size-3 md:size-4'/>
                            Añadir a Favoritos
                        </button>
                        </div>
                        <button className='py-2 px-6 text-black bg-pink-300/60 hover:text-white hover:bg-black text-[10px] md:text-xs transition
                            flex flex-row gap-x-1 items-center justify-center font-bold'
                            onClick={onBuyOne}>
                            <FiShoppingCart className='size-3 md:size-4'/>
                            Comprar ahora
                        </button>
                        <div className='mt-5 flex flex-row gap-x-2 items-center justify-center'>
                            <p className='text-xs md:text-sm font-semibold text-black/80'>Comparte</p>
                            <a href='#asd'>
                                <FaFacebook className='text-3xl cursor-pointer transition size-4 text-black/50 hover:text-black'/>
                            </a>
                            <a href="#sdf">
                                <FaInstagram className='text-3xl cursor-pointer transition size-4 text-black/50 hover:text-black'/>
                            </a>
                        </div>
                    </div>
            </div>
    </>
  );
}
export default InfoProductModal;