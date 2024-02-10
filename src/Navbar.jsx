import './Menu.css'
import './index.css'
import logo from './assets/logo.png';
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onCloseMenu = () => {
    setShowMenu(false);
  }
  if(showMenu){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Define aquí el ancho de pantalla para considerar como "modo móvil"
    }
    // Ejecutar handleResize al cargar la página
    handleResize();
    // Agregar el event listener para manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <nav className={`fixed top-0 flex flex-row md:flex-col gap-y-4 items-center justify-between w-screen
    bg-white shadow-xl shadow-black py-3 px-3 z-50`}>
          <img src={logo} alt="Logo Mariana Accesorios" className='z-50 w-28 h-14 cursor-pointer'/>
         {isMobile ? 
          <FiMenu className="z-50 text-3xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
         :
            <ul className='flex flex-row justify-between items-center gap-x-8 mx-auto text-xl [&>li]:transition [&>li]:duration-300 '>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#home">Inicio</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#products">Lanzamientos</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">Anillos</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">Aretes</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">Collares</a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">
              <FaUser className='size-6 transition hover:scale-110'/>
              </a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">
                <HiShoppingCart className='size-6 transition hover:scale-110'/>  
              </a>
            </li>
            <li className='border border-transparent hover:border-b-pink-300 py-1'>
              <a href="#contact">
              <MdFavorite className='size-6 transition hover:scale-110'/>
              </a>
          </li>
        </ul>
      }
      {isMobile && showMenu &&
      <div className='slide-in-left fixed inset-0 mx-auto flex items-center justify-center w-screen h-screen backdrop-blur-sm '
      onClick={onCloseMenu}>
      <ul className='absolute flex flex-col gap-y-3 justify-between items-center text-lg font-bold'>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#home">Inicio</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#products">Lanzamientos</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">Anillos</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">Aretes</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">Collares</a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">
          <FaUser className='size-6 transition hover:scale-110'/>
          </a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">
            <HiShoppingCart className='size-6 transition hover:scale-110'/>  
          </a>
        </li>
        <li className='border border-transparent hover:border-b-pink-300 py-1'>
          <a href="#contact">
          <MdFavorite className='size-6 transition hover:scale-110'/>
          </a>
          </li>
        </ul>
   </div>
   }
    </nav>
  );
}
export default NavBar;