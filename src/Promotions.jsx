import LogginModal from './hooks/LogginModal.jsx';

export function Promotion(){
    return(
    <>
        <div className="mt-[125px] sm:mt-[100px] lg:text-4xl items-center flex justify-center text-black/70 font-bold 
        w-full mx-auto text-2xl text-center text-pretty">
          <h1 className="p-5">Registrate y conoce nuestras <span className="text-pink-300/60">promociones</span> y <span className="text-pink-300/60">novedades</span> de este  
          <span className="text-pink-300/60"> 2024</span></h1>  
        </div>
        <div className='flex justify-center items-center'>
        <LogginModal/>
        </div>
    </>
    )
}

export function PromotionSport(){
    return (
        <div className="grid mt-32 mb-32 bg-[#f6f6f6] justify-center items-center grid-cols-12 auto-rows-auto w-full
         px-4">
            <div className="col-span-4 md:col-span-3 flex items-center justify-center w-full h-full py-12">
              <img src="https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/08/modelo-fondo-rosa-ok-3-PUMA-Stardust.jpg?fit=640%2C427&ssl=1"
               alt="Imagen ropa deportiva" className="w-[150px] h-[100px] md:w-[300px] md:h-[250px] rounded-sm hover:scale-105 transition-all 
               duration-700 shadow-sm shadow-black/70 hover:shadow-lg hover:shadow-black"/>
            </div>
            <div className="col-span-8 md:col-span-6 flex items-center justify-center w-full mx-auto h-full">
                <h1 className="text-xl md:text-4xl font-semibold text-wrap text-black/70 text-left md:text-center px-10">
                Descubre todo nuestro <span className="text-pink-300/60">catalogo </span> 
                de ropa <span className="text-pink-300/60">deportiva.</span></h1>
            </div>
            <div className="col-span-12 md:col-span-2 flex items-center justify-center w-full h-full">
              <button className="bg-pink-300/60 hover:bg-pink-300/80 text-white font-bold py-2 px-4 rounded-full
              active:scale-110 active:duration-100 transition-all shadow-sm shadow-black/70 flex">
                Ver catalogo
              </button>
            </div>
        </div>
    )
}

export function PromotionSpecial(){
    return(
    <>  
        <div className="grid grid-cols-6 auto-rows-auto w-[400px] md:w-[700px] sm:w-[650px] lg:w-[1000px] xl:w-[1250px]
         2xl:w-[1350px] items-center justify-center mx-auto mt-[120px] mb-5 gap-x-10 gap-y-10"
         id='lanzamientos'>
            <div className="col-span-6 md:col-span-2 w-[300px] flex flex-col gap-y-6 justify-start items-start mx-auto">
                <h1 className="text-sm font-light text-black/90">¡CORRE, QUE VUELAN!</h1>
                <p className="text-2xl font-bold text-black/85">PARA CADA MOMENTO ESPECIAL</p>
            </div>
            <div className="col-span-6 md:col-span-4 md:grid-cols-6 grid-cols-4 row-auto grid justify-center items-center
             gap-y-6 md:gap-y-10 rounded-md mx-auto w-[350px] md:w-full">
                    <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                    hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                        <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/1a73daf5-5c93-4cc4-a6b0-4d0023f7b455___09c2230fb4614d3697a1062a9b4b8a29.jpg" 
                                alt="Imagen" className="w-full h-[175px]"/>  
                            <div className="flex items-center justify-center w-full h-full">
                                <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                                    BEST SELLERS</h1>  
                            </div>
                    </div>                        
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/5befe26d-c25c-4f1b-9acf-787bb5ed07dc___5b9e6a918a2413c54c4bf651df6359d1.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                            PULSERA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/ade6f5f8-c7c5-445d-9cc4-01d56e3536e6___0891577adf29176dd109fd2ef910c9ed.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                            DISFRUTA EN COMPAÑIA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/1fb404af-aa4c-463d-b4b3-8d68f629f166___9c0f441821c1b6c15c3c3d3f45fbe63f.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                            ANILLOS</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/77f4b2d5-0f34-4305-a703-9b0604a74dc1___95472027125e3dc12dfaf134f3c6a601.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                        <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                            PULSERA</h1>  
                        </div>                    
                </div>
                <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center bg-[#f6f6f6] hover:shadow-lg mx-auto
                hover:shadow-black/50 transition-all duration-300 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] ">
                    <img src="https://pandoramx.vtexassets.com/assets/vtex.file-manager-graphql/images/31b3ea61-0b13-4737-a9e4-e7bef1718c75___5bb2b598f4343684e79984d2287052d1.jpg" 
                        alt="Imagen" className="w-full h-[175px]"/>  
                    <div className="flex items-center justify-center w-full h-full">    
                        <h1 className="text-sm font-light border-b-[#fad2f6] border-b-[1px] ">
                            DIJES
                        </h1>  
                    </div>                        
                </div>
            </div>
        </div>
    </>    
    )
}