import { useState, useEffect } from "react";
import deliveryIcon from "../assets/deliveryIcon.svg";
import "./Product.css";
import { FaHeart } from "react-icons/fa6";

function ProductItem({
  imgSrc,
  hoverSrc,
  category,
  productName,
  productPrice,
  product,
  addToCart,
  openInfoProductModal,
  addToFavorite,
}) {
  const [isWanted, setIsWanted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const hoverShopping = isHover
    ? "w-full flex justify-center items-center bg-pink-300/60 transition text-center text-lg"
    : "text-black bg-pink-300/60 w-full flex justify-center text-lg text-center items-center rounded-b-lg transition md:text-[#f6f6f6] md:bg-[#f6f6f6] md:w-full md:flex md:justify-center md:items-center";

  const handleHover = () => {
    setIsHover(true);
  };
  const handleHoverLeave = () => {
    setIsHover(false);
  };
  const cartClick = () => {
    addToCart(product);
    setIsWanted(true);
  };
  useEffect(() => {
    let timeout;
    if (isWanted) {
      timeout = setTimeout(() => {
        setIsWanted(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isWanted]);

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    if (product.isFavorite) {
      setIsFavorite(true);
    }
  }, [product.isFavorite]);
  return (
    <>
      <div
        className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-[#f6f6f6] md:hover:bg-[#ffffff] 
                shadow-lg hover:shadow-black/80 transition duration-100 cursor-pointer [&>div>#image]:hover:scale-110 relative
                flex flex-col"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
      >
        <div
          className="grow justify-end flex items-end p-3 flex-col"
          onClick={addToFavorite}
        >
          <FaHeart
            className="size-4 md:size-5 cursor-pointer text-pink-300/60"
            onClick={onFavorite}
          />
        </div>
        <div
          className="flex justify-center text-center items-center mb-5 size-20 md:size-36 mx-auto"
          onClick={openInfoProductModal}
        >
          {isHover ? (
            <img
              id="image"
              src={imgSrc}
              alt={productName}
              className="transition"
            />
          ) : (
            <img
              id="image"
              src={imgSrc}
              alt={productName}
              className="transition"
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-center text-base gap-y-5 mt-[30px]">
          <strong className="text-black/50 text-xs md:text-base mt-2">
            {category}
          </strong>
          <span
            className="font-semibold text-sm md:text-lg text-black/80 flex items-center justify-center mx-auto 
                   text-center px-1"
          >
            {productName}
          </span>
          <span className="font-semibold text-black/90 text-[10px] md:text-lg">
            ${productPrice}.00 MX
          </span>
        </div>
        <div className="flex flex-row justify-center items-center mt-[25px] mb-[25px] md:mt-[50px] md:mb-[50px]">
          <img
            src={deliveryIcon}
            alt="Delivery Icon"
            className="size-4 md:size-10"
          />
          <span className="font-semibold text-xs md:text-lg">Envio</span>
        </div>
        <div
          className={`${hoverShopping} bottom-0`}
          onClick={cartClick}
        >
          <span className="p-2 font-bold text-[9px] md:text-sm uppercase">
            {isWanted ? "Añadido" : "Añadir al carrito"}
          </span>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
