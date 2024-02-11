import Products from './Components/Products.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Navbar.jsx';
import CarouselGift from './Components/CarouselGift.jsx';
import './index.css';
import LogginModal from './hooks/LogginModal.jsx';
import { useState } from 'react';
import { Promotion } from './Components/Promotions.jsx';

function App() {
  const [favoriteProducts, setfavoriteProducts] = useState([]);
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  const [countFavProducts, setCountFavProducts] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <CarouselGift/>
      <Header 
        openModal={openModal}
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts} 
        favoriteProducts={favoriteProducts} setfavoriteProducts={setfavoriteProducts}
        allFavoriteProducts={allFavoriteProducts} setAllFavoriteProducts={setAllFavoriteProducts}
        countFavProducts={countFavProducts} setCountFavProducts={setCountFavProducts}
        />

      <Promotion
        openModal={openModal}
      />
      <Products
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts}
        favoriteProducts={favoriteProducts} setfavoriteProducts={setfavoriteProducts}
        allFavoriteProducts={allFavoriteProducts} setAllFavoriteProducts={setAllFavoriteProducts}
        countFavProducts={countFavProducts} setCountFavProducts={setCountFavProducts}
        
      />  
      <LogginModal
        modalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />  
      <Footer 
        openModal={openModal}
      />
    </>
  )
}export default App;
