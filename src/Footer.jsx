import creditcardIcon from './assets/creditcardIcon.svg';
import giftIcon from './assets/giftIcon.svg';
import ubicationIcon from './assets/ubicationIcon.svg';
import returnIcon from './assets/returnIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import tiktokIcon from './assets/tiktokIcon.svg';
import LogginModal from './hooks/LogginModal';
import './Footer.css';
import downArrowIcon from './assets/downArrowIcon.svg';
import {useState, useEffect} from 'react';

function Footer(){
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
     };

     useEffect(() => {
        // Agregamos un listener de evento para rastrear el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);
    
        // Limpiamos el listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    const handleHelpListToggle = () => {
        document.querySelector('#list').classList.toggle('hidden');
        document.querySelector('#list').classList.add('flex');
    }
    const handleAboutUsListToggle = () => {
        document.querySelector('#aboutList').classList.toggle('hidden');
        document.querySelector('#aboutList').classList.add('flex');
    }
    const handleContactListToggle = () => {
        document.querySelector('#contactList').classList.toggle('hidden');
        document.querySelector('#contactList').classList.add('flex');
    }

    return(
     <>
        <TopFooter/>
        <div className='w-full bg-[#f6f6f6]'>
        <div className=' md:w-[1500px] w-[400px] grid grid-cols-12 mx-auto bg-transparent gap-x-6 gap-y-6 px-4'>
            <div className='col-span-12 md:col-span-5 flex flex-col items-start justify-center mt-[70px] mb-[70px]'>
                <p className='text-md md:text-xl text-black/90 font-semibold '>Conoce nuestras redes sociales!</p>
                <ul className='flex flex-row gap-x-6 items-start justify-start mt-3'>
                    <li><a><img src={facebookIcon} alt="Logo facebook" className='size-5 md:size-6'/></a></li>
                    <li><a href="www.facebook.com"><img src={instagramIcon} alt="Logo facebook" className='size-5 md:size-6'/></a></li>
                    <li><a href="www.facebook.com"><img src={tiktokIcon} alt="Logo facebook" className='size-5 md:size-6'/></a></li>
                </ul>
                <span className='text-md md:text-xl text-black/90 mt-[50px] font-bold'>Registrate y se el primero en descubrir 
                nuestros nuevos lanzamientos y promociones</span>
                <LogginModal/>
            </div>
            <div className='col-span-4 md:col-span-2 justify-start items-start w-full md:mt-[70px] md:mb-[70px]'>
            <li className='text-sm md:text-lg list-none mb-[24px] font-semibold py-2 uppercase' onClick={handleHelpListToggle}>
              Ayuda 
              {isMobile ? <img src={downArrowIcon} alt="Down arrow icon" className='size-4 inline-block cursor-pointer'/> : ''}
            </li>
                <ul id='list' className='list-animation hidden md:flex justify-start items-start text-black text-xs 
                md:text-md font-medium flex-col gap-y-6'>
                    <li id='list'>Mis pedidos</li>
                    <li id='list'>Guía de tallas</li>
                    <li id='list'>Devoluciones</li>
                    <li id='list'>Políticas de envios</li>                       
                    <li id='list'>Uso y cuidado de producto</li>
                    <li id='list'>Información del producto</li>
                </ul>
            </div>
            <div className='col-span-4 md:col-span-2 justify-start items-start w-full md:mt-[70px]'>
            <li onClick={handleAboutUsListToggle} className='list-none text-sm md:text-lg font-semibold mb-[24px] py-2 uppercase'>Nosotros
            {isMobile ? <img src={downArrowIcon} alt="Down arrow icon" className='size-4 inline-block cursor-pointer'/> : ''}
            </li>
                <ul id='aboutList' className='list-animation text-xs md:text-md hidden md:flex justify-start items-start 
                text-black font-medium flex-col gap-y-6'>
                    <li>Sobre Mariana Accesorios</li>
                    <li>Nuestra historia</li>
                    <li>Joyería responsable</li>
                    <li>Instrucciones de cuidado</li>
                    <li>Terminos y condiciones</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className='col-span-4 md:col-span-3 justify-start items-start md:mt-[70px] mb-[70px]'>
            <li onClick={handleContactListToggle} className='list-none text-sm md:text-lg font-semibold py-2 uppercase mb-[24px]'>Atención a cliente
            {isMobile ? <img src={downArrowIcon} alt="Down arrow icon" className='size-4 inline-block cursor-pointer'/> : ''}
            </li>
                <ul id='contactList' className='hidden md:flex list-animation text-xs md:text-md justify-start 
                items-start text-black font-medium flex-col gap-y-6'>
                    <li>+52 12345678</li>
                    <a href="#"><li className='text-black/50 hover:text-black
                    transition-all duration-300  underline'>contacto@gmail.com.mx</li></a>
                    <li>Horario de atención de Lunes a Viernes de 09:00 a 18:00 h.</li>
                </ul>
            </div>
        </div>
        </div>
    </>
    )
}
export default Footer;

function TopFooter(){
    return(
        <div className="flex bg-black/85 mt-[100px] w-ful mx-auto">
            <div className="grid grid-cols-4 w-[1400px] mx-auto justify-center items-center text-white/90
             py-[50px] gap-x-20 gap-y-7">
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start md:items-center md:justify-center px-4 flex flex-row gap-x-4">
                    <img src={creditcardIcon} alt="Credit Card svg" className='size-6 md:size-10' />
                    <p className='text-xs md:text-sm font-medium'>
                        <span className='text-sm md:text-lg font-bold'>Cuotas</span> <br/>
                        Hasta 12 MSI en la compra minima de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start md:items-center md:justify-center px-4 flex flex-row gap-x-4">
                    <img src={giftIcon} alt="Credit Card svg" className='size-6 md:size-10' />
                    <p className='text-xs md:text-sm  font-medium'>
                        <span className='text-sm md:text-lg  font-bold'>Promociones</span> <br />
                        Gana un producto por la compra de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start md:items-center md:justify-center px-4 flex flex-row gap-x-4">
                    <img src={ubicationIcon} alt="Credit Card svg" className='size-6 md:size-10' />
                    <p className='text-xs md:text-sm  font-medium'>
                        <span className='text-sm md:text-lg  font-bold'>Envio Gratis</span> <br />
                        Envíos estándar gratis a partir de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start md:items-center md:justify-center px-4 flex flex-row gap-x-4">
                    <img src={returnIcon} alt="Credit Card svg" className='size-6 md:size-10' />
                    <p className='text-xs md:text-sm  font-medium'>
                        <span className='text-sm md:text-lg  font-bold'>Devoluciones</span> <br />
                        Retornos garantizados en 30 días ágiles
                    </p>
                </div>
            </div>
        </div>
    )
}
export {TopFooter};