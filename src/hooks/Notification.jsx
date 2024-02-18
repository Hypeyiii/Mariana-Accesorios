import "./Notification.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Notification({ adding, modalVisible, setModalVisible }) {
  const handleClose = () => {
    setModalVisible(false);
  };
  return (
    <div>
      {modalVisible && (
        <div className="z-50 fixed w-full items-center justify-center flex top-0 left-0 p-2 text-white text-base font-mono">
          <div className="entrance p-2 bg-pink-300 flex flex-row items-center justify-center gap-x-2">
            <IoIosCheckmarkCircle />
            {adding}
          </div>
        </div>
      )}
    </div>
  );
}
export default Notification;
