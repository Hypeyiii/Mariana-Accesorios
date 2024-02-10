import Products from './Products.jsx';
import Footer from './Footer.jsx';
import Header from './Navbar.jsx';
import CarouselGift from './CarouselGift.jsx';
import './index.css';
import LogginModal from './hooks/LogginModal.jsx';
import { useState } from 'react';
import { Promotion } from './Promotions.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CarouselGift/>
      <Header openModal={openModal}/>
      <Promotion openModal={openModal}/>
      <Products openModal={openModal}/> 
      <LogginModal modalOpen={isModalOpen} handleClose={closeModal}/>  
      <Footer openModal={openModal}/>
    </>
  )
}export default App;
