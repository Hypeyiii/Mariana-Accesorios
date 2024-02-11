import './Menu.css'
import '../index.css'
import logo from '../assets/logo.png';
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { MdClose, MdFavorite } from "react-icons/md";
import { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";


function NavBar({openModal, allProducts, total, countProducts, setAllProducts, setTotal, setCountProducts}) {
  const[cartModal, setCartModal] = useState(false);
  const toggleCartModal = () => {
    setCartModal(!cartModal);
  }
  const closeCartModal = () => {
    setCartModal(false);
  }

  const openCartModal = () => {
    setCartModal(true);
  }
  
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const onCloseMenu = () => {
    setShowMenu(false);
  }
  if(showMenu && isMobile){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
     }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      var sections = document.querySelectorAll('.section');
      var navItems = document.querySelectorAll('.item');
      sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (window.scrollY + 128 >= top && window.scrollY < bottom) {
            navItems.forEach(function(item) {
            item.classList.remove('border-b-pink-300');
          });
          if (navItems[index]) {
            navItems[index].classList.add('border-b-pink-300');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
});

const onDeleteProduct = (product) => {
  const results = allProducts.filter((p) => p.id !== product.id);
  setAllProducts(results);
  setCountProducts(countProducts - product.quantity);
  setTotal(total - product.productPrice * product.quantity);
}
const onRemoveAllCart = () => {
  setAllProducts([]);
  setCountProducts(0);
  setTotal(0);
}

  return (
    <>
    <nav className={`section fixed top-0 flex flex-row md:flex-col gap-y-4 items-center justify-between w-screen
    bg-white shadow-xl shadow-black py-3 px-3 z-50`}>
          <a href="#">
           <img src={logo} alt="Logo Mariana Accesorios" className='z-50 w-28 h-14 cursor-pointer'/>
          </a>
         {isMobile ? 
          <FiMenu className="z-50 text-3xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
         :
         <>
            <ul className='flex flex-row justify-between items-center gap-x-8 mx-auto text-xl [&>li]:transition-all [&>li]:duration-300 text-black/70'>
            <li className='item border border-transparent hover:border-b-pink-300 py-1 hover:text-black'>
              <a href="#">Inicio</a>
            </li>
            <li className='item border border-transparent hover:border-b-pink-300 py-1 hover:text-black'>
              <a href="#releases">Lanzamientos</a>
            </li>
            <li className='item border border-transparent hover:border-b-pink-300 py-1 hover:text-black'>
              <a href="#rings">Anillos</a>
            </li>
            <li className='item border border-transparent hover:border-b-pink-300 py-1 hover:text-black'>
              <a href="#earrings">Aretes</a>
            </li>
            <li className='item border border-transparent hover:border-b-pink-300 py-1 hover:text-black'>
              <a href="#necklace">Collares</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1 hover:text-black' onClick={openModal}>
              <a href="#user">
              <FaUser className='size-6 transition hover:scale-110'/>
              </a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1 hover:text-black' onClick={toggleCartModal}>
              <a href="#cart">
                  <HiShoppingCart className='size-6 transition hover:scale-110'/>
                  <div className='absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1'>
                    <p className='text-xs'>
                      {countProducts}
                    </p>
                  </div>
              </a>
              <div className={`flex flex-col mt-5 absolute text-black bg-white shadow-black shadow-md p-5 ${cartModal ? "" : "hidden"}`}>
                {
                  allProducts.length ?
                  allProducts.map((product) => 
                    <>
                        <div key={product.id} className='grid grid-cols-12 items-center justify-center w-[350px] gap-x-2 text-sm hover:bg-gray-100 border-y-[1px] p-2'>
                          <p className='text-xs col-span-1'>{product.quantity}</p>
                          <img src={product.imgSrc} alt="Product" className='size-[30px] col-span-2'/>
                          <p className='col-span-6'>{product.productDescription}</p>
                          <p className='col-span-2'>${product.productPrice}</p>
                          <MdClose onClick={() => onDeleteProduct (product)} className='col-span-1 cursor-pointer size-5 text-black hover:text-red-700'/>
                        </div>
                    </>
                )
                  :
                  <p>No hay productos en el carrito</p>
                }
                    {allProducts.length ? 
                      <>
                          <div className='flex flex-row justify-center items-center gap-x-2 mt-2 text-sm p-2 mb-6'>
                            <p>Total:</p>
                            <p>${total}</p> 
                        </div>
                        <button className='absolute bottom-0 left-0 right-0 flex w-full bg-black text-white text-sm p-2 items-center justify-center transition
                           hover:bg-pink-300/60 hover:text-black' onClick={onRemoveAllCart}>
                          Vaciar Carrito
                        </button>
                       </>                  
                    : ""}
                   </div>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1 hover:text-black '>
              <a href="#favorites">
              <MdFavorite className='size-6 transition hover:scale-110'/>
              </a>
          </li>
        </ul> 
        </>   
      }
      
      {isMobile && showMenu &&
      <div className='slide-in-left fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-[8px] '
      onClick={onCloseMenu}>
      <ul className='absolute flex flex-col gap-y-3 justify-between items-center text-lg font-bold'>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#">Inicio</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#releases">Lanzamientos</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#rings">Anillos</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#earrings">Aretes</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#necklace">Collares</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#user">
          <FaUser className='size-6 transition hover:scale-110' onClick={openModal}/>
          </a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#cart">
            <HiShoppingCart className='size-6 transition hover:scale-110' onClick={toggleCartModal}/>  
          </a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#favorites">
          <MdFavorite className='size-6 transition hover:scale-110'/>
          </a>
          </li>
        </ul>
   </div>
   }
    </nav>
    {
    cartModal && isMobile && (
      <div className={`slide-in-top z-50 mt-[80px] fixed top-0 left-0 right-0 p-5 text-black bg-white shadow-black shadow-md ${cartModal ? "" : "hidden"}`}>
        {
                  allProducts.length ?
                  allProducts.map((product) => 
                    <>
                        <div key={product.id} className='grid grid-cols-12 items-center justify-center w-[350px] gap-x-2 text-sm hover:bg-gray-100 border-y-[1px] p-2'>
                          <p className='text-xs col-span-1'>{product.quantity}</p>
                          <img src={product.imgSrc} alt="Product" className='size-[30px] col-span-2'/>
                          <p className='col-span-6'>{product.productDescription}</p>
                          <p className='col-span-2'>${product.productPrice}</p>
                          <MdClose onClick={() => onDeleteProduct (product)} className='col-span-1 cursor-pointer size-5 text-black hover:text-red-700'/>
                        </div>
                    </>
                )
                  :
                  <p>No hay productos en el carrito</p>
                }
                    {allProducts.length ? 
                      <>
                          <div className='flex flex-row justify-center items-center gap-x-2 mt-2 text-sm p-2 mb-6'>
                            <p>Total:</p>
                            <p>${total}</p> 
                        </div>
                        <button className='absolute bottom-0 left-0 right-0 flex w-full bg-black text-white text-sm p-2 items-center justify-center transition
                           hover:bg-pink-300/60 hover:text-black' onClick={onRemoveAllCart}>
                          Vaciar Carrito
                        </button>
                       </>                  
                    : ""}
      </div>
    )
  }
  </>
  );
}
export default NavBar;