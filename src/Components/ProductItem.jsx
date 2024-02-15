import {useState, useEffect} from 'react'
import deliveryIcon from '../assets/deliveryIcon.svg';
import heartIcon from '../assets/heartIcon.svg';
import fillHeartIcon from '../assets/fillHeartIcon.svg';
import './Product.css';

function ProductItem({imgSrc, category, productName, productPrice, product, addToCart, openInfoProductModal, addToFavorite}){

    const [isWanted, setIsWanted] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const hoverShopping = isHover ? 
    "w-full flex justify-center items-center bg-pink-300/60 rounded-b-lg transition text-center text-lg" : 
    'text-black bg-pink-300/60 w-full flex justify-center text-lg text-center items-center rounded-b-lg transition md:text-[#f6f6f6] md:bg-[#f6f6f6] md:w-full md:flex md:justify-center md:items-center md:rounded-b-lg';
    
    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }
    const cartClick = () => {
        addToCart(product);
        setIsWanted(true);
    }
    useEffect(() => {
        let timeout;
        if (isWanted) {
          timeout = setTimeout(() => {
            setIsWanted(false);
          }, 1500);
        }
        return () => clearTimeout(timeout);
      }, [isWanted]); 

    const onFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    useEffect(() => {
        if(product.isFavorite){
            setIsFavorite(true);
        }
    }
    , [product.isFavorite])
    return(
        <>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-2 bg-[#f6f6f6] rounded-lg 
                shadow-lg hover:shadow-black/80 transition-all duration-500 cursor-pointer [&>div>#image]:hover:scale-125 relative"
                onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <div className='grow justify-end flex items-end p-3 flex-col' onClick={addToFavorite}>
                        {isFavorite ? <img src={fillHeartIcon} alt="Heart Icon" className='size-5 md:size-7 md:active:scale-125
                         transition-all duration-75' onClick={onFavorite}/>
                        : <img src={heartIcon} onClick={onFavorite} alt="Heart Icon" className='size-5 md:size-7 md:active:scale-125 transition-all 
                        duration-75'/>
                    }
                </div>
                <div className='flex justify-center text-center items-center mb-5' onClick={openInfoProductModal}>
                    {
                        isHover ? 
                        <img id='image' src={imgSrc} alt={productName} className='size-20 md:size-32 transition'/>
                        :
                        <img id='image' src={imgSrc} alt={productName} className='size-20 md:size-32 transition'/>
                    }
                </div>
                <div className='flex flex-col justify-center items-center text-base gap-y-5 mt-[30px]'>
                   <strong className='text-black/50 text-xs md:text-base'>{category}</strong> 
                   <span className='font-semibold text-sm md:text-lg text-black/80 flex items-center justify-center mx-auto 
                   text-center px-1'>{productName}</span>
                   <span className='font-semibold text-black/90 text-[10px] md:text-lg'>${productPrice}.00 MX</span>
                </div>
                <div className='flex flex-row justify-center items-center mt-[50px] mb-[25px]'>
                    <img src={deliveryIcon} alt="Delivery Icon" className='size-4 md:size-10'/>
                    <span className='font-semibold text-xs md:text-lg'>Envio</span>
                </div>
                <div className={`${hoverShopping}`} onClick={cartClick}>
                    <span className='p-4 font-bold text-[9px] md:text-sm uppercase' >
                        {
                            isWanted ? 'Añadido' : 'Añadir al carrito'
                        }
                    </span>
                    </div>
            </div>
        </>
    )
}
export default ProductItem;
