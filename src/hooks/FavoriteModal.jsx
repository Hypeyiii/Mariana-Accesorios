import { useState, useEffect} from "react";
import './FavModal.css'
import closeIcon from '../assets/closeIcon.svg'

// eslint-disable-next-line react/prop-types
function FavoriteModal({adding}){
    const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 
  const cleanTimeout = () => setModalVisible(false);
    return(
        <div>
            {modalVisible && (<div className="modal-container fixed z-40 top-0 right-0 bg-pink-300/60 
            backdrop-blur-sm p-5 shadow-2xl shadow-pink-300">
            <h1 className="text-sm md:text-xl p-5 text-pretty font-bold text-black hover:text-black">{adding}</h1>
            <button className="absolute top-0 right-0 p-1 items-center justify-center" onClick={cleanTimeout}>
                <img src={closeIcon} alt="Close Modal" className="size-6" />
            </button>
        </div>)}
        </div>
    )
}
export default FavoriteModal;