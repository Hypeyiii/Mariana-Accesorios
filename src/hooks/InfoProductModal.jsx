import { MdClose, MdDeliveryDining } from 'react-icons/md';
import './Info.css';
import { FaCartShopping, FaFacebook, FaHeart, FaInstagram, FaStar } from 'react-icons/fa6';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function InfoProductModal({onClose, img, name, category, price, addToCart, addToFavorite, size}) {


  return (
    <>
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50" onClick={onClose}></div>
            <div className="scale-in-center fixed mx-auto inset-0 top-16 w-[350px] md:w-9/12 h-[550px] overflow-y-auto md:h-fit py-[50px] shadow-2xl shadow-black
                 bg-white m-auto items-center justify-center grid grid-cols-12 gap-x-2 border-2 border-black gap-y-2 px-2 z-40">
                <MdClose className="absolute top-2 right-2 size-6 md:size-10 text-3xl cursor-pointer hover:text-red-600 hover:bg-gray-200 z-50" 
                    onClick={onClose}/>
                    <div className='col-span-12 md:col-span-2 flex flex-row md:flex-col md:gap-4 items-center justify-center'>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-1/2 border
                            border-black/5 hover:border-black/60 hover:shadow-2xl hover:shadow-black md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='size-3/4'/>
                            <p className='text-[10px] border-b-2 border-b-pink-300 text-center'>Vista frontal</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-1/2 border 
                            border-black/5 hover:border-black/60 hover:shadow-2xl hover:shadow-black md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='size-3/4'/>
                            <p className='text-[10px] border-b-2 border-b-pink-300 text-center'>Vista lateral</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-1/2 border
                             border-black/5 hover:border-black/60 hover:shadow-2xl hover:shadow-black md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='size-3/4'/>
                            <p className='text-[10px] border-b-2 border-b-pink-300 text-center'>Vista lateral</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center p-2 size-1/2 border 
                            border-black/5 hover:border-black/60 hover:shadow-2xl hover:shadow-black md:hover:scale-105 transition'>
                            <img src={img} alt="Image" className='size-3/4'/>
                            <p className='text-[10px] border-b-2 border-b-pink-300 text-center'>Vista trasera</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 flex items-center justify-center'>
                        <img src={img} alt={`${name} Image`} className='size-[150px] md:size-3/4 transition md:hover:scale-105 cursor-zoom-in'/>
                    </div>
                    <div className='col-span-12 md:col-span-4 flex flex-col gap-y-4 items-center justify-center px-4'>
                        <p className='text-black/80 text-sm md:text-base border-b-2 border-b-pink-300'>{category}</p>
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
                        <div className='text-black/90 bg-[#f6f6f6] w-full p-2 text-[9px] md:text-sm flex flex-row items-center justify-center gap-x-2 mt-5'>
                            <MdDeliveryDining className='text-black/80'/>
                            <p className='text-black/80 text-sm md:text-base'>Producto listo para envío</p>
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
                            onClick={addToFavorite}>
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