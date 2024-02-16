"use client";
import { Carousel } from "flowbite-react";
import "./Carousel.css";

function CarouselGift() {
  return (
    <div
      className="h-full mx-auto mt-32 flex bg-transparent w-full
     items-center justify-center cursor-pointer text-4xl text-[#fad2f6]"
    >
      <Carousel
        slideInterval={5000}
        leftControl="&#x2190;"
        rightControl="&#x2192;"
        className="h-[300px] sm:h-[300px] md:h-[450px]"
      >
        <img
          src="https://i.pinimg.com/originals/13/f6/8a/13f68adb06c8e2d16a7cb7ca6b910d27.gif"
          className="w-3/4"
        />
        <img
          src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/6e0ee586-b421-476e-ae50-3bbf88831090___e000096b47ac90225abd027e5910889b.gif"
          className="w-3/4"
        />
        <img
          src="https://almalatina.yanbal.com/wp-content/uploads/2022/03/Coleccion-Tambopata.gif"
          className="w-3/4"
        />
      </Carousel>
    </div>
  );
}
export default CarouselGift;
