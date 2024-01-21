import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

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
                 text-md text-white hover:text-white font-bold w-[200px] items-center justify-center mx-auto
                 shadow-md shadow-black transition-all duration-300 active:scale-105 active:duration-75'>
                   {modalOpen ? "Registrarse" : "Registrarse"}
                </button>,
                {modalOpen && (
        <>
          <div className="z-40 fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm transition-opacity" onClick={handleClose}></div>
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className='flex w-full'>
          <button className='grow flex flex-row justify-end items-end p-1' onClick={handleClose}>
            X
          </button>
          </div>
                    <Card className="max-w-sm">
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="username@something.com" required />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit" className='bg-black hover:bg-white transition-all duration-300'
                        >Submit
                    </Button>
                </form>
                </Card>
          </div>
        </>
      )}
      </>
    )
}export default LogginModal;