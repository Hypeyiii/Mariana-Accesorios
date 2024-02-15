import { useState, useEffect } from "react"

function Promotion({openModal}){
    return(
    <>
        <div className="mt-[125px] sm:mt-[100px] lg:text-4xl items-center flex justify-center text-black/70 font-bold 
        w-full mx-auto text-lg md:text-2xl text-center text-pretty">
          <h1 className="p-5">Registrate y conoce nuestras <span className="text-pink-300/60">promociones</span> y <span className="text-pink-300/60">novedades</span> de este  
          <span className="text-pink-300/60"> 2024</span></h1>  
        </div>
        <div className='flex justify-center items-center'>
        <button id='register' className='mt-[50px] p-2 bg-black hover:bg-pink-300/60 rounded-sm
              text-white hover:text-black font-bold w-[125px] md:w-[250px] items-center justify-center mx-auto
               hover:shadow-lg hover:shadow-black transition-all duration-300 active:scale-105 active:duration-75 text-sm
               md:text-lg' onClick={openModal}>
                   Registrate
        </button>
        </div>
    </>
    )
}

function PromotionSport(){
    return (
        <div className="grid mt-32 mb-32 bg-[#f6f6f6] justify-center items-center grid-cols-12 auto-rows-auto px-4 h-fit mx-auto py-10">
            <div className="col-span-4 md:col-span-3 flex items-center justify-center">
              <img src="https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/08/modelo-fondo-rosa-ok-3-PUMA-Stardust.jpg?fit=640%2C427&ssl=1"
               alt="Imagen ropa deportiva" className="w-[150px] h-[100px] md:w-[300px] md:h-[250px] rounded-sm transition-all duration-700 border
               border-transparent hover:border-black"/>
            </div>
            <div className="col-span-8 md:col-span-6 flex items-center justify-center w-full mx-auto h-full">
                <h1 className="text-base md:text-3xl font-semibold text-wrap text-black/70 text-left md:text-center px-10">
                Descubre todo nuestro <span className="text-pink-300/60">catalogo </span> 
                de ropa <span className="text-pink-300/60">deportiva.</span></h1>
            </div>
            <div className="col-span-12 md:col-span-2 flex items-center justify-center w-full h-full">
              <a href="#clothes" className="bg-pink-300/60 hover:bg-black/80 hover:text-white text-black/60 font-bold py-2 px-4 rounded-xl
              active:scale-110 active:duration-100 transition shadow-sm shadow-black/70 flex text-sm md:text-base">
                Ver catalogo
              </a>
            </div>
        </div>
    )
}

function PromotionSpecial(){
    return(
    <>  
        <div className="grid grid-cols-6 auto-rows-auto w-[400px] md:w-[700px] sm:w-[650px] lg:w-[1000px] xl:w-[1250px]
         2xl:w-[1350px] items-center justify-center mx-auto mt-[120px] mb-5 gap-x-10 gap-y-10"
         id='earrings'>
            <div className="col-span-6 lg:col-span-2 w-[300px] flex flex-col gap-y-6 justify-start items-start mx-auto">
                <h1 className="text-xs md:text-sm font-medium text-black/90">¡CORRE, QUE VUELAN!</h1>
                <p className="text-xl md:text-2xl font-semibold md:font-bold text-black/85">PARA CADA MOMENTO ESPECIAL</p>
            </div>
            <div className="col-span-6 lg:col-span-4 md:grid-cols-6 grid-cols-4 row-auto grid justify-center items-center
             gap-y-6 md:gap-y-10 rounded-md mx-auto w-[350px] md:w-full">
                    <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                    hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                        <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/1a73daf5-5c93-4cc4-a6b0-4d0023f7b455___09c2230fb4614d3697a1062a9b4b8a29.jpg" 
                                alt="Imagen" className="w-full h-[175px]"/>  
                            <div className="flex items-center justify-center w-full h-full">
                                <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                                    BEST SELLERS</h1>  
                            </div>
                    </div>                        
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/5befe26d-c25c-4f1b-9acf-787bb5ed07dc___5b9e6a918a2413c54c4bf651df6359d1.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                            PULSERA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/ade6f5f8-c7c5-445d-9cc4-01d56e3536e6___0891577adf29176dd109fd2ef910c9ed.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                            DISFRUTA EN COMPAÑIA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/1fb404af-aa4c-463d-b4b3-8d68f629f166___9c0f441821c1b6c15c3c3d3f45fbe63f.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                            ANILLOS</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/77f4b2d5-0f34-4305-a703-9b0604a74dc1___95472027125e3dc12dfaf134f3c6a601.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                            PULSERA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/31b3ea61-0b13-4737-a9e4-e7bef1718c75___5bb2b598f4343684e79984d2287052d1.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                    <div className="flex items-center justify-center w-full h-full">    
                        <h1 className="text-xs md:text-sm font-medium border-b-[#fad2f6] border-b-[1px] ">
                            DIJES
                        </h1>  
                    </div>                        
                </div>
            </div>
        </div>
    </>    
    )
}
    const DiscoverPromotion = () => {
    const [time, setIsTime] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTime(prevTime => !prevTime);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <div className="grid grid-cols-12 items-center justify-center mx-auto gap-4 mt-24 w-full md:w-[75%]">
            <div className="flex flex-col justify-center items-center md:items-start md:jusitfy-start col-span-12 md:col-span-3 text-xl font-semibold">
                <h1 className="text-base">Descubre Mariana Accesorios</h1>
                <p className="text-sm font-light">Joyeria que necesitas</p>
            </div>
            <div className="col-span-12 md:col-span-9 grid grid-cols-4 gap-4">
                <a href={`${time ? "#news" : "#clothes"}`} className="col-span-2 md:col-span-1">
                    <div className="border border-transparent hover:border-black bg-[#F6F6F6] hover:scale-105 transition flex flex-col
                        items-center justify-center p-5 gap-y-4 size-40 shadow-xl">
                        { time ? 
                            <>
                                <img src="https://www.diamantesa.es/wp-content/uploads/anillo-compromiso-diamantesa.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Novedades</p>
                            </>
                            :
                            <>
                                <img src="https://pngimg.com/uploads/tshirt/tshirt_PNG5447.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Ropa deportiva</p>
                            </>
                        }
                    </div>
                </a>
                <a href={`${time ? "#releases" : "#necklace"}`} className="col-span-2 md:col-span-1">
                    <div className="border border-transparent hover:border-black bg-[#F6F6F6] hover:scale-105 transition flex flex-col
                        items-center justify-center p-5 gap-y-4 size-40 shadow-xl">
                        { time ? 
                            <>
                                <img src="https://pngimg.com/d/jewelry_PNG6809.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Lanzamientos</p>
                            </>
                            :
                            <>
                                <img src="https://eurostore.melaniemartinezmusic.com/on/demandware.static/-/Sites-warner-master/default/dw15b356c9/pdp-img-eu/Melanie%20Martinez/October%202023%20Merch/Portals%20Necklace.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Collares</p>
                            </>
                        }
                    </div>
                </a>
                <a href={`${time ? "#clothes" : "#news"}`} className="col-span-2 md:col-span-1">
                    <div className="border border-transparent hover:border-black bg-[#F6F6F6] hover:scale-105 transition flex flex-col
                        items-center justify-center p-5 gap-y-4 size-40 shadow-xl">
                        { time ? 
                            <>
                                <img src="https://pngimg.com/uploads/tshirt/tshirt_PNG5447.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Ropa deportiva</p>
                            </>
                            :
                            <>
                                <img src="https://www.diamantesa.es/wp-content/uploads/anillo-compromiso-diamantesa.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Novedades</p>
                            </>
                        }
                    </div>
                </a>
                <a href={`${time ? "#necklace" : "#releases"}`} className="col-span-2 md:col-span-1">
                    <div className="border border-transparent hover:border-black bg-[#F6F6F6] hover:scale-105 transition flex flex-col
                        items-center justify-center p-5 gap-y-4 size-40 shadow-xl">
                        { time ? 
                            <>
                                <img src="https://eurostore.melaniemartinezmusic.com/on/demandware.static/-/Sites-warner-master/default/dw15b356c9/pdp-img-eu/Melanie%20Martinez/October%202023%20Merch/Portals%20Necklace.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Collares</p>
                            </>
                            :
                            <>
                                <img src="https://pngimg.com/d/jewelry_PNG6809.png" alt="New Product Icon" className="size-12" />
                                <p className="text-base border-b-2 border-b-pink-300">Lanzamientos</p>
                            </>
                        }
                    </div>
                </a>
            </div>
        </div>
    )
}

export {Promotion, PromotionSport, PromotionSpecial, DiscoverPromotion};