import creditcardIcon from './assets/creditcardIcon.svg';
import giftIcon from './assets/giftIcon.svg';
import ubicationIcon from './assets/ubicationIcon.svg';
import returnIcon from './assets/returnIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import tiktokIcon from './assets/tiktokIcon.svg';
import LogginModal from './hooks/LogginModal';

function Footer(){
    return(
     <>
        <TopFooter/>
        <div className='w-full bg-[#f6f6f6]'>
        <div className=' md:w-[1500px] w-[400px] grid grid-cols-12 mx-auto bg-transparent gap-x-6 gap-y-6 px-4'>
            <div className='col-span-12 md:col-span-5 flex flex-col items-start justify-center mt-[70px] mb-[70px]'>
                <p className='text-xl text-black/90 font-semibold '>Conoce nuestras redes sociales!</p>
                <ul className='flex flex-row gap-x-6 items-start justify-start'>
                    <li><a><img src={facebookIcon} alt="Logo facebook" className='size-6'/></a></li>
                    <li><a href="www.facebook.com"><img src={instagramIcon} alt="Logo facebook" className='size-6'/></a></li>
                    <li><a href="www.facebook.com"><img src={tiktokIcon} alt="Logo facebook" className='size-6'/></a></li>
                </ul>
                <span className='text-xl text-black/90 mt-[70px] font-bold'>Registrate y se el primero en descubrir 
                nuestros nuevos lanzamientos y promociones</span>
                <LogginModal/>
            </div>
            <div className='col-span-6 md:col-span-2 justify-start items-start w-full md:mt-[70px] mb-[70px]'>
                <ul className='justify-start items-start text-black text-md font-medium flex flex-col gap-y-6'>
                    <li className='font-semibold text-lg py-2 uppercase'>Ayuda</li>
                    <li>Mis pedidos</li>
                    <li>Guía de tallas</li>
                    <li>Devoluciones</li>
                    <li>Políticas de envios</li>
                    <li>Uso y cuidado de producto</li>
                    <li>Información del producto</li>
                </ul>
            </div>
            <div className='col-span-6 md:col-span-2 justify-start items-start w-full md:mt-[70px]'>
                <ul className='justify-start items-start text-black text-md font-medium flex flex-col gap-y-6'>
                    <li className='font-semibold text-lg py-2 uppercase'>Nosotros</li>
                    <li>Sobre Mariana Accesorios</li>
                    <li>Nuestra historia</li>
                    <li>Joyería responsable</li>
                    <li>Instrucciones de cuidado</li>
                    <li>Terminos y condiciones</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className='col-span-12 md:col-span-3 justify-start items-start w-full md:mt-[70px] mb-[70px]'>
                <ul className='justify-start items-start text-black text-md font-medium flex flex-col gap-y-6'>
                    <li className='font-semibold text-lg py-2 uppercase'>Atención a cliente</li>
                    <li>+52 12345678</li>
                    <a href="#"><li className='text-black/50 hover:text-black
                    transition-all duration-300  underline'>contacto@MarianaAccesorios.com.mx</li></a>
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
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start px-4 flex flex-row gap-x-4">
                    <img src={creditcardIcon} alt="Credit Card svg" className='size-10' />
                    <p className='text-sm font-medium'>
                        <span className='text-lg font-bold'>Cuotas</span> <br/>
                        Hasta 12 MSI en la compra minima de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start px-4 flex flex-row gap-x-4">
                    <img src={giftIcon} alt="Credit Card svg" className='size-10' />
                    <p className='text-sm font-medium'>
                        <span className='text-lg font-bold'>Promociones</span> <br />
                        Gana un producto por la compra de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start px-4 flex flex-row gap-x-4">
                    <img src={ubicationIcon} alt="Credit Card svg" className='size-10' />
                    <p className='text-sm font-medium'>
                        <span className='text-lg font-bold'>Envio Gratis</span> <br />
                        Envíos estándar gratis a partir de $12344.00 MXN
                    </p>
                </div>
                <div className="col-span-4 md:col-span-2 xl:col-span-1 items-start justify-start px-4 flex flex-row gap-x-4">
                    <img src={returnIcon} alt="Credit Card svg" className='size-10' />
                    <p className='text-sm font-medium'>
                        <span className='text-lg font-bold'>Devoluciones</span> <br />
                        Retornos garantizados en 30 días ágiles
                    </p>
                </div>
            </div>
        </div>
    )
}
export {TopFooter};