import {Promotion, PromotionSport, PromotionSpecial} from "./Promotions.jsx";
import ProductItem from "./ProductItem.jsx";
import data from "./data.js";

function Products() {
    return (
        <>
            <div id="releases" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        data.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                            />
                        ))
                    }
            </div>
    <PromotionSport/>

            <div id="releases" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                        auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                        mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        data.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                            />
                        ))
                    }
            </div>
        
    <PromotionSpecial/>  

            <div id="releases" className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10
                        auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]
                        mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
                    {
                        data.map(product => (
                            <ProductItem
                                key={product.id}
                                imgSrc={product.imgSrc}
                                category={product.category}
                                productDescription={product.productDescription}
                                productPrice={product.productPrice}
                            />
                        ))
                    }
            </div>
        </>
    )
}
export default Products;