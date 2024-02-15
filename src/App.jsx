import Footer from './Components/Footer.jsx';
import Header from './Components/Navbar.jsx';
import CarouselGift from './Components/CarouselGift.jsx';
import './index.css';
import LogginModal from './hooks/LogginModal.jsx';
import { useState } from 'react';
import { Promotion, PromotionSpecial, DiscoverPromotion, PromotionSport } from './Components/Promotions.jsx';
import InfoProductModal from './hooks/InfoProductModal.jsx';
import {newProducts, releaseProducts, clothesProducts, necklaceProducts} from './Products/Products.jsx';
import BuyingModal from './hooks/BuyingModal.jsx';
import IndividualBuyModal from './hooks/IndividualBuyModal.jsx'
import ProductItem from './Components/ProductItem.jsx';

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
    setIsBuyingOnce(false)
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
        return setAllFavoriteProducts(newFavProducts);
    }
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
        return setAllProducts(newProducts);
    }
    setCountProducts(countProducts + product.quantity);
    setTotal(total + product.productPrice * product.quantity)
    setAllProducts([...allProducts, product])
}
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

      <Promotion
        openModal={openModal}
      />
              <div id="news" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        newProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  imgHover={product.imgHover}
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
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        releaseProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  imgHover={product.imgHover}
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
      <div id="clothes" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        clothesProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  imgHover={product.imgHover}
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
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        necklaceProducts.map(product => (
                            <>
                                <ProductItem
                                  key={product.id}
                                  imgSrc={product.imgSrc}
                                  imgHover={product.imgHover}
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
      }
    </>
  )
}export default App;
