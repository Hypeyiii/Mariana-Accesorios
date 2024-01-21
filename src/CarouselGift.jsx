'use client'
import {Carousel} from "flowbite-react";
import "./Carousel.css"

function CarouselGift() {
  return (
    <div className="h-[230px] sm:h-64 md:h-72 xl:h-80 2xl:h-[420px] w-full mx-auto mt-44 flex bg-transparent
     items-center justify-center cursor-pointer text-4xl text-[#fad2f6]">
      <Carousel slideInterval={5000} leftControl='&#x2190;' rightControl='&#x2192;' className='h-[300px] sm:h-[300px] md:h-[450px]'>
        <img src="https://i.pinimg.com/originals/13/f6/8a/13f68adb06c8e2d16a7cb7ca6b910d27.gif"
         alt="..." className='w-[420px] sm-[400px] xl:w-[900px] h-[200px] md:h-[350px] bg-transparent
         shadow-xl shadow-black'/>
        <img src="https://mx.onpost.shop/cdn/shop/articles/aretes.jpg?v=1639057703&width=1200"
         alt="..." className='w-[420px] sm-[400px] xl:w-[900px] h-[200px] md:h-[350px] bg-transparent
         shadow-xl shadow-black'/>
         <img src="https://almalatina.yanbal.com/wp-content/uploads/2021/06/Renata-flores-aretes-adan-yanbal.gif"
         alt="..." className='w-[420px] sm-[400px] xl:w-[900px] h-[200px] md:h-[350px] bg-transparent
         shadow-xl shadow-black'/>
      </Carousel>
    </div>
  );
}export default CarouselGift;


