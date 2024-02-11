import Products from './Components/Products.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Navbar.jsx';
import CarouselGift from './Components/CarouselGift.jsx';
import './index.css';
import LogginModal from './hooks/LogginModal.jsx';
import { useState } from 'react';
import { Promotion } from './Components/Promotions.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CarouselGift/>
      <Header openModal={openModal}
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts} />

      <Promotion openModal={openModal}/>
      <Products openModal={openModal}
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts}
      /> 
      <LogginModal modalOpen={isModalOpen} handleClose={closeModal}/>  
      <Footer openModal={openModal}/>
    </>
  )
}export default App;
