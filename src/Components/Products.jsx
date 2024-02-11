import {PromotionSport, PromotionSpecial, DiscoverPromotion} from "./Promotions.jsx";
import ProductItem from "./ProductItem.jsx";
import newProducts from "../Products/New-Products.js";
import releaseProducts from "../Products/Release-Products.js";
import clothesProducts from "../Products/Clothes-Products.js";
import necklaceProducts from "../Products/Necklace-Products.js";

function Products({allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts, allFavoriteProducts, setAllFavoriteProducts, countFavProducts, setCountFavProducts}) {

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

    const addToFavorites = (favoriteProducts) => {
        if(allFavoriteProducts.find((item) => item.id === favoriteProducts.id)){
            const newFavProducts = allFavoriteProducts.map((item) => {
                if(item.id === favoriteProducts.id){
                    return {...item, quantity: item.quantity + 1}
                }
                return p;
            })
            return setAllFavoriteProducts(newFavProducts);
        }
        setCountFavProducts(countFavProducts + favoriteProducts.quantity);
        setAllFavoriteProducts([...allFavoriteProducts, favoriteProducts])
    }


    return (
        <>
            <div id="news" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        newProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                                addToCart={() => addToCart(product)} 
                                addToFavorite={() => addToFavorites(product)}  
                            />
                        ))
                    }
            </div>
            <PromotionSpecial/>
            <div id="releases" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        releaseProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                                addToCart={() => addToCart(product)} 
                                addToFavorite={() => addToFavorites(product)}  
                            />
                        ))
                    }
            </div>
            <PromotionSport/>
            <div id="clothes" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        clothesProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                                addToCart={() => addToCart(product)} 
                                addToFavorite={() => addToFavorites(product)}  
                            />
                        ))
                    }
            </div>

                <DiscoverPromotion/>
                
            <div id="necklace" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        necklaceProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                                addToCart={() => addToCart(product)} 
                                addToFavorite={() => addToFavorites(product)}  
                            />
                        ))
                    }
            </div>
        </>
    )
}
export default Products;