import logo from './assets/logo.png';
import userLogo from './assets/userLogo.svg';
import heartLogo from './assets/heartLogo.svg';
import shoppingCartLogo from './assets/shoppingCartLogo.svg';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';

function Header(){
    return(
        <Navbar className='fixed top-0 left-0 right-0 z-50 shadow-md flex flex-row px-8 backdrop-blur-sm bg-transparent w-full mx-auto'>
      <div className='flex justify-start items-center mt-2 mb-2 mr-auto sm:mx-auto sm:w-full ' id='inicio'>
        <a href='#' className='mr-auto sm:mx-auto'>
          <img src={logo} alt="Logo" className='w-28 h-16 cursor-pointer' />
        </a>
      </div>
      <NavbarBrand>
        <NavbarToggle/>
      </NavbarBrand>
      <NavbarCollapse className='mx-auto h-screen sm:h-auto'>
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
        [&>img]:transition-all gap-y-3 mx-auto w-[125px] sm:w-auto'>
          <div className='flex items-center justify-center flex-row gap-x-2'>
            <img src={userLogo} alt="User Logo" className='size-6 hover:scale-110 transition-all duration-300 cursor-pointer' />
            <span className='font-light text-sm cursor-pointer'>Usuarios</span>
          </div>
          <div className='flex items-center justify-center flex-row gap-x-2'>
            <img src={heartLogo} alt="User Logo" className='size-6 hover:scale-110 transition-all duration-300 cursor-pointer' />
            <span className='font-light text-sm cursor-pointer'>Favoritos</span>
          </div>
          <div className='flex items-center justify-center flex-row gap-x-2'>
            <img src={shoppingCartLogo} alt="User Logo" className='size-6 hover:scale-110 transition-all duration-300 cursor-pointer' />
            <span className='font-light text-sm cursor-pointer'>Carrito</span>
          </div>
        </div>
      </NavbarCollapse>
    </Navbar>
    )
}export default Header;