import { useState } from 'react';
import closeIcon from '../assets/close.svg';

function LogginModal(){

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen=()=>{
        setModalOpen(true);
    };

    const handleClose=()=>{
        setModalOpen(false);
    };

    return(
        <>
        <button id='register' onClick={handleOpen} className='mt-[50px] p-2 bg-black hover:bg-pink-300/60 rounded-sm
              text-white hover:text-black font-bold w-[125px] md:w-[250px] items-center justify-center mx-auto
               hover:shadow-lg hover:shadow-black transition-all duration-300 active:scale-105 active:duration-75 text-sm
               md:text-lg'>
                   {modalOpen ? "Registrarse" : "Registrarse"}
                </button>
                {modalOpen && ( 
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
          <div className="bg-white p-2 rounded-md z-10 shadow-xl shadow-gray-600">
          <div className='flex items-end justify-end'>
            <img src={closeIcon} className='size-6 cursor-pointer hover:bg-gray-200 transition-all duration-300' onClick={handleClose} alt="" />
            </div>
            <div className='p-8 flex flex-col items-start jusitfy-start gap-y-4'>
            <h2 className="text-2xl font-bold mb-4">Sing it to our plataform</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600">Your email</label>
                <input
                  placeholder='name@company.com'
                  type="text"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-600">Your password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className='flex flex-row justify-between text-sm'>
                <div className='flex flex-row gap-x-2 items-center justify-center'>
                <input 
                type="checkbox" 
                id='remember' 
                className='rounded-md checked:bg-pink-300/60 
                focus:ring-white shadow-sm shadow-black' />
                <label htmlFor='remember' className='cursor-pointer'>Remember me</label>
                </div>
                <div className='flex hover:underline cursor-pointer justify-end items-end'>
                  <h1>Lost Password?</h1>
                </div>
              </div>
              <div className="flex justify-start mt-8">
                <button
                  type="button"
                  className="p-2 bg-black/90 hover:bg-pink-300/60 hover:text-black text-white rounded-md
                  transition-all duration-300 hover:shadow-lg hover:shadow-black font-bold"
                  onClick={handleClose}
                >
                  Iniciar Sesión
                </button>
              </div>
              <div className='flex flex-row justify-between mt-8 text-sm'>
                  <div className='flex items-start justify-start'>
                    <h1 className='text-black/60'>Not register yet?</h1>
                  </div>
                  <div>
                  <h1 className='hover:underline cursor-pointer'>Create account</h1>
                  </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </>
      )}
      </>
    )
}
export default LogginModal;