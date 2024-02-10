import {Promotion, PromotionSport, PromotionSpecial} from "./Promotions.jsx";
import ProductItem from "./ProductItem.jsx";
import aretesRuby from "./assets/aretes_Ruby.png";

function Products() {
    return (
        <>
        <Promotion/>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-8 
        auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] 
        mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1"> 
          
        <ProductItem
            imgSrc="https://www.diamantesa.es/wp-content/uploads/anillo-compromiso-diamantesa.png"
            category="Novedades" 
            productDescription="Anillo de Compromiso"
            productPrice="12,345.00"/>
            
        <ProductItem
            imgSrc="https://www.pngarts.com/files/3/Jewellery-PNG-Image.png"
            category="Novedades" 
            productName="Collar" 
            productDescription="Collar de oro"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc={aretesRuby}
            category="Novedades"
            productDescription="Arete de Rubi"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-white-gold-engagement-rings-with-diamonds-jewellery-png-image_10951588.png" 
            category="Novedades"
            productDescription="Anillo de diamantes"
            productPrice="12,345.00"/>
    </div>
        <PromotionSport/>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-8 
        auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] 
        mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1">    
        <ProductItem
            imgSrc="https://www.diamantesa.es/wp-content/uploads/anillo-compromiso-diamantesa.png"
            category="Novedades" 
            productDescription="Anillo de Compromiso"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc="https://www.pngarts.com/files/3/Jewellery-PNG-Image.png"
            category="Novedades" 
            productName="Collar" 
            productDescription="Collar de oro"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc={aretesRuby}
            category="Novedades"
            productDescription="Arete de Rubi"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-white-gold-engagement-rings-with-diamonds-jewellery-png-image_10951588.png" 
            category="Novedades"
            productDescription="Anillo de diamantes"
            productPrice="12,345.00"/>
    </div> 
        <PromotionSpecial/>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-8 
        auto-rows-auto mx-auto w-[350px] sm:w-[550px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] 
        mt-[100px] gap-x-5 gap-y-10 md:px-4 px-1">    
        <ProductItem
            imgSrc="https://www.diamantesa.es/wp-content/uploads/anillo-compromiso-diamantesa.png"
            category="Novedades" 
            productDescription="Anillo de Compromiso"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc="https://www.pngarts.com/files/3/Jewellery-PNG-Image.png"
            category="Novedades" 
            productName="Collar" 
            productDescription="Collar de oro"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc={aretesRuby}
            category="Novedades"
            productDescription="Arete de Rubi"
            productPrice="12,345.00"/>
        <ProductItem
            imgSrc="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-white-gold-engagement-rings-with-diamonds-jewellery-png-image_10951588.png" 
            category="Novedades"
            productDescription="Anillo de diamantes"
            productPrice="12,345.00"/>
    </div>    
        </>
    )
}export default Products;