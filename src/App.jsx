import Footer from './Components/Footer.jsx';
import Header from './Components/Navbar.jsx';
import CarouselGift from './Components/CarouselGift.jsx';
import './index.css';
import LogginModal from './hooks/LogginModal.jsx';
import { useState, useEffect } from 'react';
import { Promotion, PromotionSpecial, DiscoverPromotion, PromotionSport, PhotoPromotion} from './Components/Promotions.jsx';
import InfoProductModal from './hooks/InfoProductModal.jsx';
import {newProducts, releaseProducts, clothesProducts, necklaceProducts, glassesProducts, ringProducts} from './Products/Products.jsx';
import BuyingModal from './hooks/BuyingModal.jsx';
import IndividualBuyModal from './hooks/IndividualBuyModal.jsx'
import ProductItem from './Components/ProductItem.jsx';
import Notification from './hooks/Notification.jsx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

function App() {
  const [favoriteProducts, setfavoriteProducts] = useState([]);
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  const [countFavProducts, setCountFavProducts] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  

  const[cartModal, setCartModal] = useState(false);

  const openCartModal = () => {
    setCartModal(true);
    setfavoriteModal(false);
 }

 const [favoriteModal, setfavoriteModal] = useState(false);

  const openFavoriteModal = () => {
    setfavoriteModal(true); 
    setCartModal(false);
  }
  const closeCartModal = () => {
    setCartModal(false);
  }

  const onCloseFavoriteModal = () => {
    setfavoriteModal(false);
  }

  const addToModal = (product) => {
    setSelectedProduct(product);
    setIsInfoModalOpen(true);
    setIsBuyingOnce(false);
  }
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToFavorites = (favoriteProducts) => {
    if(allFavoriteProducts.find((item) => item.id === favoriteProducts.id)){
        const newFavProducts = allFavoriteProducts.map((item) => {
            if(item.id === favoriteProducts.id){
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
        setIsFavorite(true);
        return setAllFavoriteProducts(newFavProducts);
    }
    setIsFavorite(true);
    setCountFavProducts(countFavProducts + favoriteProducts.quantity);
    setAllFavoriteProducts([...allFavoriteProducts, favoriteProducts])
  }
  
  const openModal = () => {
    setIsModalOpen(true);
  }
  const addToCart = (product) => {
    if(allProducts.find((p) => p.id === product.id)){
        const newProducts = allProducts.map((p) => {
            if(p.id === product.id){
                return {...p, quantity: p.quantity + 1}
            }
            return p;
        })
        setCountProducts(countProducts + product.quantity);
        setTotal(total + product.productPrice * product.quantity)
        setIsWanted(true);
        return setAllProducts(newProducts);
    }
    setIsWanted(true);
    setCountProducts(countProducts + product.quantity);
    setTotal(total + product.productPrice * product.quantity)
    setAllProducts([...allProducts, product])
}
useEffect(() => {
  const timeout = setTimeout(() => {
    setIsWanted(false);
  }, 2000)
  return () => clearTimeout(timeout);
  
},); 
useEffect(() => {
  const timeout = setTimeout(() => {
    setIsFavorite(false);
  }, 2000)
  return () => clearTimeout(timeout);
  
},); 

const [isProductBuying, setIsProductBuying] = useState(null);


const onBuyCart = () => {
  setIsProductBuying(true);
  setCartModal(false);
}
const handleClose = () => {
  setIsProductBuying(false)
}
const removeFromCart = (product) => {
  const newProducts = allProducts.map((p) => {
      if(p.id === product.id){
          return {...p, quantity: p.quantity - 1}
      }
      return p;
  }).filter((p) => p.quantity > 0);
  setCountProducts(countProducts - 1);
  setTotal(total - product.productPrice)
  setAllProducts(newProducts);
}

const [isBuyingOnce, setIsBuyingOnce]=useState(false)
const [isWanted, setIsWanted] = useState(false)
const [isFavorite, setIsFavorite] = useState(false)

const onBuyOne = () => {
  setIsBuyingOnce(true)
  setIsInfoModalOpen(false)
}

const onCloseOnce = () =>{
  setIsBuyingOnce(false)
}
  return (
    <>
      <CarouselGift/>
      <Header 
        onBuyCart={onBuyCart}
        openInfoModal={addToModal}
        openModal={openModal}
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProducts={countProducts} setCountProducts={setCountProducts} 
        favoriteProducts={favoriteProducts} setfavoriteProducts={setfavoriteProducts}
        allFavoriteProducts={allFavoriteProducts} setAllFavoriteProducts={setAllFavoriteProducts}
        countFavProducts={countFavProducts} setCountFavProducts={setCountFavProducts}
        openCartModal={openCartModal}
        openFavoriteModal={openFavoriteModal}
        cartModal={cartModal}
        favoriteModal={favoriteModal}
        closeCartModal={closeCartModal}
        onCloseFavoriteModal={onCloseFavoriteModal}
        />
        {
          isProductBuying && (
            <BuyingModal
              handleClose={handleClose}
              allProducts={allProducts}
              openInfoModal={addToModal}
              onDeleteProduct={removeFromCart}
              total={total}
            />
          )
        }
              <div id="news" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        newProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)}
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
      <PromotionSpecial/>
      <div id="releases" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        releaseProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)} 
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
      <Promotion
      openModal={openModal}
      />
      <div id="clothes" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        clothesProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)} 
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
      <DiscoverPromotion/>
      <div id="necklace" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        necklaceProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)} 
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
            <PromotionSport/>
            <div id="glasses" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        glassesProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)} 
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
            <PhotoPromotion/>
            <div id="rings" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto mt-[30px] md:mt-[100px] gap-5 px-4 md:w-[80%]"> 
                    {
                        ringProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  hoverSrc={product.hoverSrc}
                                  category={product.category}
                                  productName={product.productName}
                                  productPrice={product.productPrice}
                                  addToCart={() => addToCart(product)} 
                                  addToFavorite={() => addToFavorites(product)} 
                                  openInfoProductModal={() => addToModal(product)}
                                  product={product}
                            />
                            </>
                        ))
                    }
            </div>
      <LogginModal
        modalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />  
      <Footer 
        openModal={openModal}
      />
      {
        isInfoModalOpen && (
          <InfoProductModal
            onClose={() => setIsInfoModalOpen(false)}
            img={selectedProduct.imgSrc}
            name={selectedProduct.productName}
            category={selectedProduct.category}
            price={selectedProduct.productPrice}
            addToCart={() => addToCart(selectedProduct)}
            addToFavorite={() => addToFavorites(selectedProduct)}
            size={selectedProduct.size}
            onBuyOne={onBuyOne}
          />
        )
      }
      {
        isBuyingOnce && (
          <IndividualBuyModal
            back={() => addToModal(selectedProduct)}
            onCloseOnce={onCloseOnce}
            productName={selectedProduct.productName}
            img={selectedProduct.imgSrc}
            allProducts={allProducts}
            price={selectedProduct.productPrice}
            quantity={selectedProduct.quantity}
          />
        )
      }{
        isWanted && (
          <Notification
            modalVisible={isWanted}
            setModalVisible={setIsWanted}
            modalOpen={isWanted}
            adding={"Añadido al carrito"}
          />
        )
      }
      {
        isFavorite && (
          <Notification
            modalVisible={isFavorite}
            setModalVisible={setIsFavorite}
            modalOpen={isFavorite}
            adding={"Añadido a favoritos"}
          />
        )
      }
    </>
  )
}export default App;
