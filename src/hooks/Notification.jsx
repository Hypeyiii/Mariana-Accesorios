import { useState, useEffect} from "react";
import './Notification.css'
import close from '../assets/close.svg'

// eslint-disable-next-line react/prop-types
function Notification({adding}){
    const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setModalVisible(false);
    }, 2000)
    return () => clearTimeout(timeout);
    
  }, []  ); 
  const handleClose = () => {
    setModalVisible(false)
  };
    return(
        <div>
            {modalVisible && (<div id="notification" className="modal-container fixed z-50 top-0 right-0 bg-pink-300/60 
            backdrop-blur-sm p-2 shadow-2xl hover:shadow-black hover::shadow-lg transition-all 
            duration-300 rounded-lg">
            <h1 className="text-xs md:text-base p-3 md:p-5 text-pretty font-bold text-black hover:text-black">{adding}</h1>
            <button className="absolute top-0 right-0 p-1 items-center justify-center
              hover:bg-black/15 transition-all duration-300 active:scale-125" 
                onClick={handleClose}>
                <img src={close} alt="Close Modal" className="size-6"/>
            </button>
        </div>)}
        </div>
    )
}
export default Notification;