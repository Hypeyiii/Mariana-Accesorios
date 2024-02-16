import { MdClose } from "react-icons/md";
import "../Components/Menu.css";
import { FaTrash } from "react-icons/fa6";


function BuyingModal({
  handleClose,
  allProducts,
  openInfoModal,
  onDeleteProduct,
  total,
  onBuy
}) 

{
  return (
    <>
      <div
        className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      ></div>
      <div className="slide-in-right fixed w-full md:w-[450px] h-3/4 overflow-y-auto right-0 top-0 bg-white flex flex-col items-center justify-center z-50 p-5">
        <MdClose
          onClick={handleClose}
          className="absolute top-2 right-2 cursor-pointer size-7 text-black hover:text-red-700"
        />
        <div className="absolute top-0 flex items-center justify-center font-semibold text-lg md:text-xl mt-5">
          <p className="border-b-2 border-b-pink-300">Comprar carrito</p>
        </div>
        <div className="flex flex-col w-full h-full mt-10">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="w-full my-2 grid grid-cols-12 items-center justify-center gap-x-2 text-sm hover:bg-gray-100 border-t-[1px] p-2"
            >
              <div className="col-span-4 flex items-center justify-center h-full w-full">
                <img
                  src={product.imgSrc}
                  alt="Product"
                  className="cursor-pointer"
                  onClick={() => openInfoModal(product)}
                />
              </div>
              <div className="col-span-5 flex flex-col gap-y-2 items-start justify-start">
                <p className="text-sm text-black/60">Mariana Accesorios</p>
                <p className="text-base text-black/80">{product.productName}</p>
                <p className="font-bold text-xs text-black/70">
                  Cantidad: {product.quantity}
                </p>
              </div>
              <p className="col-span-2 text-xs">
                ${product.productPrice}.00 MX
              </p>
              <FaTrash
                onClick={() => onDeleteProduct(product)}
                className="col-span-1 cursor-pointer size-4 text-black hover:text-red-700"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="slide-in-right bg-[#F6F6F6] h-1/4 w-full md:w-[450px] text-black shadow- shadow-black text-base font-bold z-50
                        fixed bottom-0 right-0 flex flex-col items-center justify-center gap-y-2 px-[100px] border-t-[1px] border-t-black mt-5"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <p>Subtotal</p>
          <p>${total}.00 MX</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p>Entrega</p>
          <p>$.00 MX</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p>Total</p>
          <p>${total}.00 MX</p>
        </div>
        <button className="p-3 bg-black text-white hover:bg-pink-300/60 hover:text-white transition" onClick={onBuy}>
          Comprar ahora
        </button>
      </div>
    </>
  );
}
export default BuyingModal;
