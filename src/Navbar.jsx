import logo from './assets/logo.png';
import userLogo from './assets/userLogo.svg';
import heartLogo from './assets/heartLogo.svg';
import shoppingCartLogo from './assets/shoppingCartLogo.svg';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import './Menu.css';

export function Header(){

    return(
        <Navbar className='z-40 fixed top-0 left-0 right-0 shadow-md flex flex-row px-8 backdrop-blur-sm md:bg-transparent bg-white transition-all duration-1000 w-full mx-auto'>
      <div className='flex justify-start items-center mt-2 mb-2 mr-auto sm:mx-auto sm:w-full '
      id='inicio'>
        <a href='#' className='mr-auto sm:mx-auto'>
          <img src={logo} alt="Logo" className='w-28 h-16 cursor-pointer' />
        </a>
      </div>
      <NavbarBrand>
        <NavbarToggle/>
      </NavbarBrand>
      <NavbarCollapse className='menu-animated mx-auto h-screen w-full sm:h-auto'>
        <div className='grow flex flex-col sm:flex-row gap-x-12 text-lg md:text-xl text-black/80 justify-center 
        items-start sm:items-center mx-auto [&>a]:transition-all [&>a]:duration-300
        py-4 md:py-0 w-[125px] sm:w-auto'>
          <a href="#" className='hover:border-b-[#fad2f6] border-b-2 border-b-transparent'>Inicio</a>
          <a href="#lanzamientos" className='hover:border-b-[#fad2f6] border-b-2 border-b-transparent'>Lanzamientos</a>
          <a href="#" className='hover:border-b-[#fad2f6] border-b-2 border-b-transparent'>Anillos</a>
          <a href="#" className='hover:border-b-[#fad2f6] border-b-2 border-b-transparent'>Aretes</a>
          <a href="#" className='hover:border-b-[#fad2f6] border-b-2 border-b-transparent'>Collares</a>
        </div>
        <div className='flex flex-col sm:flex-row list-none justify-center md:justify-end items-start md:items-center md:gap-x-10 
            gap-y-3 mx-auto w-[125px] sm:w-auto'>
          <div className='flex items-center justify-center flex-row gap-x-1 cursor-pointer
                transition-all duration-300 border-transparent border-b-2 hover:border-b-pink-300/60'>
            <a href="#register" className='flex flex-row items-center justify-center'>
              <img src={userLogo} alt="User Logo" className='size-6 duration-300' />
                <span className='font-light text-sm'>
                Cuenta</span>
            </a>
          </div>
          <div className='flex items-center justify-center flex-row gap-x-1 cursor-pointer
          transition-all duration-300 border-transparent border-b-2 hover:border-b-pink-300/60'>
            <img src={heartLogo} alt="User Logo" className='size-6  duration-300' />
            <span className='font-light text-sm'>Favoritos</span>
          </div>
          <div className='flex items-center justify-center flex-row gap-x-1 cursor-pointer
          transition-all duration-300 border-transparent border-b-2 hover:border-b-pink-300/60'>
            <img src={shoppingCartLogo} alt="User Logo" className='size-6  duration-300' />
            <span className='font-light text-sm'>Carrito</span>
          </div>
        </div>
      </NavbarCollapse>
    </Navbar>
    )
}export default Header;