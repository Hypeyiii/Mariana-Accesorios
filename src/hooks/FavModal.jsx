import { useState, useEffect} from "react";
import './FavModal.css'
import closeIcon from '../assets/closeIcon.svg'

export function FavModal(){
    const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
    // Utilizamos setTimeout para cambiar el estado después de 5 segundos
    const timeout = setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    // Limpiamos el temporizador en el desmontaje del componente
    return () => clearTimeout(timeout);
  }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso está vacío para que se ejecute solo una vez al montar el componente.
  const cleanTimeout = () => setModalVisible(false);
    return(
        <div>
            {modalVisible && (<div className="modal-container fixed z-40 top-0 right-0 bg-pink-300/60 
            backdrop-blur-sm p-5 shadow-2xl shadow-pink-300">
            <h1 className="text-sm md:text-xl p-5 text-pretty font-bold">Añadido a favoritos</h1>
            <button className="absolute top-0 right-0 p-1 items-center justify-center" onClick={cleanTimeout}>
                <img src={closeIcon} alt="Close Modal" className="size-6" />
            </button>
        </div>)}
        </div>
    )
}
export default FavModal;