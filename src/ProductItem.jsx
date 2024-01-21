import {useState} from 'react'
import deliveryIcon from './assets/deliveryIcon.svg';
import heartIcon from './assets/heartIcon.svg';
import fillHeartIcon from './assets/fillHeartIcon.svg';
import FavModal from './hooks/FavModal.jsx';

// eslint-disable-next-line react/prop-types
function ProductItem({imgSrc, category, productDescription, productPrice}){
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
    }
    const fav = isFavorite ? fillHeartIcon : heartIcon;
    const favModal = isFavorite ? <FavModal/> : "";

    const [isHover, setIsHover] = useState(false);
    const hoverShopping = isHover ? 
    "w-full flex justify-center items-center bg-pink-300/60 rounded-b-lg transition-all duration-500 text-center bottom-0 text-lg" : 
    "text-black bg-pink-300/60 w-full flex justify-center text-sm text-center items-center rounded-b-lg transition-all duration-500 md:text-[#f6f6f6] md:bg-[#f6f6f6] md:w-full md:flex md:justify-center md:items-center md:rounded-b-lg md:transition-all md:duration-500";
    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }
    return(
        <>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-2 bg-[#f6f6f6] rounded-lg 
            shadow-lg hover:shadow-black/80 transition-all duration-500 cursor-pointer [&>div>#productIMG]:hover:scale-105 "
            onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                <div className='grow justify-end flex items-end p-3 flex-col'>
            <img src={fav} alt="Heart Icon" className='size-7 active:scale-125 transition-all duration-75' onClick={handleClick}/>
            {favModal}
                </div>
                <div className='flex justify-center items-center mx-auto mb-5'>
                    <img src={imgSrc} alt="Ring Image" id='productIMG' className='md:size-[250px] size-[150px] transition-all duration-500'/>
                </div>
                <div className='flex flex-col justify-center items-center text-md gap-y-5 mt-[30px]'>
                   <strong className='text-black/50'>{category}</strong> 
                   <span className='font-semibold text-sm md:text-lg text-black/80 flex items-center justify-center mx-auto text-center px-1'>{productDescription}</span>
                   <span className='font-semibold text-black/90 text-sm md:text-lg'>${productPrice} MX</span>
                </div>
                <div className='flex flex-row justify-center items-center mt-[50px] mb-[25px]'>
                    <img src={deliveryIcon} alt="Delivery Icon" className='size-10'/>
                    <span className='font-semibold'>Envio</span>
                </div>
                <div className={hoverShopping}>
                    <span className='p-4 font-bold text-xs md:text-sm'>AGREGAR AL CARRITO</span>
                </div>
            </div>
        </>
    )
}export default ProductItem;
