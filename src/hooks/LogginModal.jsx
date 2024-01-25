import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import {Modal} from 'flowbite-react';

function LogginModal(){

    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleOpen=()=>{
        setModalOpen(true);
    };

    const handleClose=()=>{
        setModalOpen(false);
        setEmail('');
    };

    return(
        <>
        <button id='register' onClick={handleOpen} className='mt-[50px] p-2 bg-black hover:bg-pink-300/60 rounded-sm
                 text-md text-white hover:text-white font-bold w-[125px] md:w-[250px] items-center justify-center mx-auto
                 shadow-md shadow-black transition-all duration-300 active:scale-105 active:duration-75'>
                   {modalOpen ? "Registrarse" : "Registrarse"}
                </button>,
                {modalOpen && (
        <>
        <Modal size="sm" show popup>
          <Modal.Header onClick={handleClose}/>
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
      )}
      </>
    )
}
export default LogginModal;