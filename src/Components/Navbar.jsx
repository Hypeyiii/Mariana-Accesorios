import "./Menu.css";
import "../index.css";
import logo from "../assets/logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart, FaHeartCrack, FaUser, FaWhatsapp } from "react-icons/fa6";
import { MdClose, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

function NavBar({
  openModal,
  allProducts,
  total,
  countProducts,
  setAllProducts,
  setTotal,
  setCountProducts,
  allFavoriteProducts,
  setAllFavoriteProducts,
  countFavProducts,
  setCountFavProducts,
  openInfoModal,
  onBuyCart,
  openCartModal,
  cartModal,
  handleFavoriteModal,
  favoriteModal,
  onCloseFavoriteModal,
  closeCartModal,
}) {
  const [showHeart, setShowHeart] = useState(false);

  const onShowBrokenHeart = () => {
    setShowHeart(true);
  };

  const onNotShowHeart = () => {
    setShowHeart(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  if (showMenu && isMobile) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      var sections = document.querySelectorAll(".section");
      var navItems = document.querySelectorAll(".item");
      sections.forEach(function (section, index) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (window.scrollY + 200 >= top && window.scrollY < bottom) {
          navItems.forEach(function (item) {
            item.classList.remove("border-b-pink-300");
            item.classList.remove("text-black");
          });
          if (navItems[index]) {
            navItems[index].classList.add("border-b-pink-300");
            navItems[index].classList.add("text-black");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((p) => p.id !== product.id);
    setAllProducts(results);
    setCountProducts(countProducts - product.quantity);
    setTotal(total - product.productPrice * product.quantity);
  };
  const onRemoveAllCart = () => {
    setAllProducts([]);
    setCountProducts(0);
    setTotal(0);
  };

  const onRemoveAllFavorites = () => {
    setAllFavoriteProducts([]);
    setCountFavProducts(0);
  };
  const onDeleteFavProduct = (favoriteProducts) => {
    const results = allFavoriteProducts.filter(
      (p) => p.id !== favoriteProducts.id
    );
    setAllFavoriteProducts(results);
    setCountFavProducts(countFavProducts - favoriteProducts.quantity);
    setIsFavorite(false);
  };

  return (
    <>
      <nav
        className={`section fixed top-0 flex flex-row gap-y-4 items-center justify-between w-screen
    bg-white/90 border-b-2 border-b-black py-3 px-3 z-30`}
      >
        {isMobile ? (
          <div className="w-full flex items-center justify-between">
            <FiMenu
              className="z-50 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
            <a href="#">
              <img
                src={logo}
                alt="Logo Mariana Accesorios"
                className="z-50 w-28 h-14 cursor-pointer"
              />
            </a>
            <li className="list-none border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
              <a href="#cart">
                <HiShoppingCart
                  className="size-6 transition hover:scale-110"
                  onClick={openCartModal}
                />
              </a>
              <div className="absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1">
                <p className="text-xs">{countProducts}</p>
              </div>
            </li>
          </div>
        ) : (
          <>
            <a href="#">
              <img
                src={logo}
                alt="Logo Mariana Accesorios"
                className="z-50 w-28 h-14 cursor-pointer"
              />
            </a>
            <ul className="flex flex-row justify-between items-center gap-x-8 mx-auto text-sm xl:text-lg [&>li]:transition-all [&>li]:duration-300 text-black/70">
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#">Inicio</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#news">Novedades</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#releases">Lanzamientos</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#clothes">Ropa deportiva</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#necklace">Collares</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#glasses">Lentes</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#rings">Anillos</a>
              </li>
              <li
                className="border border-transparent hover:border-b-pink-300 py-1 hover:text-black"
                onClick={openModal}
              >
                <a href="#user">
                  <FaUser className="size-6 transition hover:scale-110" />
                </a>
              </li>
              <li className="border border-transparent hover:border-b-pink-300 py-1 hover:text-black">
                <a href="#cart">
                  <HiShoppingCart
                    className="size-6 transition hover:scale-110"
                    onClick={openCartModal}
                  />
                  <div className="absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1">
                    <p className="text-xs">{countProducts}</p>
                  </div>
                </a>
                {cartModal && (
                  <div
                    className={`${
                      allProducts.length
                        ? "slide-in-right right-0 top-0 fixed h-screen w-2/6"
                        : "mt-7"
                    } 
                    flex flex-col absolute text-black bg-white shadow-black shadow-md p-5 z-50 ${
                      isMobile ? "hidden" : ""
                    }`}
                  >
                    {allProducts.length ? (
                      <>
                        <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                          <MdClose
                            className="hover:bg-gray-300 hover:text-red-600"
                            onClick={closeCartModal}
                          />
                        </div>
                        <div className="flex flex-row gap-x-2 items-center jusitfy-center mx-auto">
                          <HiShoppingCart />
                          <p className="flex mx-auto font-bold text-sm">
                            Carrito de compras
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="h-5/6 overflow-y-auto">
                      {allProducts.length ? (
                        allProducts.map((product) => (
                          <div
                            key={product.id}
                            className="mt-4 grid grid-cols-12 items-center justify-center gap-x-2 text-sm hover:bg-gray-100 
                                border-t-[1px] p-2"
                          >
                            <p className="text-xs col-span-1 font-bold">
                              {product.quantity}
                            </p>
                            <div className="col-span-2 flex items-center justify-center">
                              <img
                                src={product.imgSrc}
                                alt="Product"
                                className="size-full cursor-pointer"
                                onClick={() => openInfoModal(product)}
                              />
                            </div>
                            <p className="col-span-6 flex items-center justify-center text-base font-semibold text-black/70">
                              {product.productName}
                            </p>
                            <p className="col-span-2 text-xs font-semibold text-black/85">
                              ${product.productPrice}.00 MX
                            </p>
                            <MdClose
                              onClick={() => onDeleteProduct(product)}
                              className="col-span-1 cursor-pointer size-5 text-black hover:text-red-700"
                            />
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                            <MdClose
                              className="hover:bg-gray-300 hover:text-red-600"
                              onClick={closeCartModal}
                            />
                          </div>
                          <p className="text-base mt-1">
                            No hay productos en el Carrito
                          </p>
                        </>
                      )}
                    </div>
                    {allProducts.length ? (
                      <>
                        <div className="h-1/6 flex flex-col gap-y-4 border-t-2 border-t-black fixed bottom-0 right-0 left-0 bg-[#f6f6f6]">
                          <div className="flex flex-row justify-between mx-auto items-center gap-x-2 text-sm mt-10">
                            <p className="text-base font-medium">Total:</p>
                            <p className="text-base font-semibold">${total}.00 MX</p>
                          </div>
                          <div className="flex flex-row gap-x-2 w-full items-center justify-center px-4 absolute bottom-0 left-0">
                            <button
                              className="flex bg-black text-white text-sm p-2 items-center justify-center transition
                                  hover:bg-pink-300/60 hover:text-black w-full"
                              onClick={onRemoveAllCart}
                            >
                              Vaciar Carrito
                            </button>
                            <button
                              className="flex bg-black text-white text-sm p-2 items-center justify-center transition
                                  hover:bg-pink-300/60 hover:text-black w-full"
                              onClick={onBuyCart}
                            >
                              Comprar Carrito
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </li>
              <li
                className="border border-transparent hover:border-b-pink-300 py-1 hover:text-black"
                onClick={handleFavoriteModal}
              >
                <a href="#favorites">
                  <MdFavorite className="size-6 transition hover:scale-110" />
                </a>
                <div className="absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1">
                  <p className="text-xs">{countFavProducts}</p>
                </div>
                {favoriteModal && (
                  <div
                    className={`${
                      allFavoriteProducts.length
                        ? "slide-in-right right-0 overflow-auto max-h-[600px]"
                        : ""
                    }
                flex flex-col mt-7 fixed text-black bg-white shadow-black shadow-md p-5 ${
                  isMobile && "hidden"
                }`}
                  >
                    {allFavoriteProducts.length ? (
                      <>
                        <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                          <MdClose
                            className="hover:bg-gray-300 hover:text-red-600"
                            onClick={handleFavoriteModal}
                          />
                        </div>
                        <div className="flex flex-row gap-x-2 items-center jusitfy-center mx-auto">
                          <FaHeart />
                          <p className="flex mx-auto font-bold text-sm">
                            Favoritos
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {allFavoriteProducts.length ? (
                      allFavoriteProducts.map((favoriteProducts) => (
                        <>
                          <div
                            key={favoriteProducts.id}
                            className="mt-4 grid grid-cols-12 items-center justify-center w-[350px] gap-x-2 text-sm hover:bg-gray-100 border-t-[1px] p-2"
                          >
                            <img
                              src={favoriteProducts.imgSrc}
                              alt="Product"
                              className="size-[30px] col-span-2 cursor-pointer "
                              onClick={() => openInfoModal(favoriteProducts)}
                            />
                            <p className="col-span-8 flex items-center justify-center">
                              {favoriteProducts.productName}
                            </p>
                            <div className="col-span-2">
                              {showHeart ? (
                                <FaHeartCrack
                                  onClick={() =>
                                    onDeleteFavProduct(favoriteProducts)
                                  }
                                  onMouseEnter={onShowBrokenHeart}
                                  onMouseLeave={onNotShowHeart}
                                  className="cursor-pointer size-4 text-black hover:text-red-700"
                                />
                              ) : (
                                <FaHeart
                                  onClick={() =>
                                    onDeleteFavProduct(favoriteProducts)
                                  }
                                  onMouseEnter={onShowBrokenHeart}
                                  onMouseLeave={onNotShowHeart}
                                  className="cursor-pointer size-4 text-black hover:text-red-700"
                                />
                              )}
                            </div>
                          </div>
                        </>
                      ))
                    ) : (
                      <>
                        <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                          <MdClose
                            className="hover:bg-gray-300 hover:text-red-600"
                            onClick={handleFavoriteModal}
                          />
                        </div>
                        <p className="text-base mt-1">No hay favoritos</p>
                      </>
                    )}
                    {allFavoriteProducts.length ? (
                      <>
                        <button
                          className="flex w-full bg-black text-white text-sm p-2 items-center justify-center transition
                           hover:bg-pink-300/60 hover:text-black"
                          onClick={onRemoveAllFavorites}
                        >
                          Quitar Favoritos
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </li>
            </ul>
          </>
        )}
        {isMobile && showMenu && (
          <div
            className="z-50 slide-in-left fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-[2px] bg-gray-300/50"
            onClick={toggleMenu}
          >
            <ul className="absolute flex flex-col gap-y-3 justify-between items-center text-lg font-bold">
              <li className="border border-transparent hover:border-b-pink-300 py-1">
                <a href="#">Inicio</a>
              </li>
              <li className="border border-transparent hover:border-b-pink-300 py-1">
                <a href="#releases">Lanzamientos</a>
              </li>
              <li className="border-transparent hover:border-b-pink-300 py-1">
                <a href="#rings">Anillos</a>
              </li>
              <li className="border border-transparent hover:border-b-pink-300 py-1">
                <a href="#clothes">Ropa deportiva</a>
              </li>
              <li className="border border-transparent hover:border-b-pink-300 py-1">
                <a href="#necklace">Collares</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1">
                <a href="#glasses">Lentes</a>
              </li>
              <li className="item border border-transparent hover:border-b-pink-300 py-1">
                <a href="#rings">Anillos</a>
              </li>
              <li className="border border-transparent hover:border-b-pink-300 py-1">
                <a href="#user">
                  <FaUser
                    className="size-6 transition hover:scale-110"
                    onClick={openModal}
                  />
                </a>
              </li>
              <li
                className="border border-transparent hover:border-b-pink-300 py-1 hover:text-black"
                onClick={openCartModal}
              >
                <a href="#cart">
                  <HiShoppingCart className="size-6 transition hover:scale-110" />
                  <div className="absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1">
                    <p className="text-xs">{countProducts}</p>
                  </div>
                </a>
              </li>
              <li
                className="border border-transparent hover:border-b-pink-300 py-1 hover:text-black"
                onClick={handleFavoriteModal}
              >
                <a href="#favorites">
                  <MdFavorite className="size-6 transition hover:scale-110" />
                </a>
                <div className="absolute bg-black text-white rounded-full size-4 flex items-center justify-center p-1">
                  <p className="text-xs">{countFavProducts}</p>
                </div>
              </li>
            </ul>
          </div>
        )}
        <>
          {isMobile && cartModal && (
            <div
              id="cart-modal"
              className={`${
                allProducts.length
                  ? "slide-in-top right-0 overflow-auto h-screen z-50"
                  : "z-40 mt-[80px]"
              }
                fixed top-0 left-0 right-0 flex flex-col text-black bg-white shadow-black shadow-md p-5`}
            >
              {allProducts.length ? (
                <>
                  <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                    <MdClose
                      className="hover:bg-gray-300 hover:text-red-600"
                      onClick={closeCartModal}
                    />
                  </div>
                  <div className="flex flex-row gap-x-2 items-center jusitfy-center mx-auto mb-2">
                    <HiShoppingCart className="size-3" />
                    <p className="flex mx-auto font-bold text-xs">
                      Carrito de compras
                    </p>
                  </div>
                </>
              ) : (
                ""
              )}
              {allProducts.length ? (
                allProducts.map((product) => (
                  <>
                    <div
                      key={product.id}
                      className="grid grid-cols-12 items-center justify-center w-[350px] gap-x-2 text-sm hover:bg-gray-100 border-y-[1px] p-2 mx-auto"
                    >
                      <p className="text-xs col-span-1">{product.quantity}</p>
                      <img
                        src={product.imgSrc}
                        alt="Product"
                        className="size-[30px] col-span-2"
                        onClick={() => openInfoModal(product)}
                      />
                      <p className="col-span-6">{product.productName}</p>
                      <p className="col-span-2">${product.productPrice}</p>
                      <MdClose
                        onClick={() => onDeleteProduct(product)}
                        className="col-span-1 cursor-pointer size-5 text-black hover:text-red-700"
                      />
                    </div>
                  </>
                ))
              ) : (
                <>
                  <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                    <MdClose
                      className="hover:bg-gray-300 hover:text-red-600"
                      onClick={closeCartModal}
                    />
                  </div>
                  <p>No hay productos en el carrito</p>
                </>
              )}
              {allProducts.length ? (
                <>
                  <div className="flex flex-row justify-center items-center gap-x-2 mt-2 text-sm p-2 mb-6">
                    <p>Total:</p>
                    <p>${total}</p>
                  </div>
                  <div className="flex flex-row gap-x-2 w-full items-center justify-center px-4">
                    <button
                      className="flex bg-black text-white text-sm p-2 items-center justify-center transition
                                  hover:bg-pink-300/60 hover:text-black w-full"
                      onClick={onRemoveAllCart}
                    >
                      Vaciar Carrito
                    </button>
                    <button
                      className="flex bg-black text-white text-sm p-2 items-center justify-center transition
                                  hover:bg-pink-300/60 hover:text-black w-full"
                      onClick={onBuyCart}
                    >
                      Comprar Carrito
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          )}
          {favoriteModal && isMobile && (
            <div
              id="cart-modal"
              className={`${
                allFavoriteProducts.length
                  ? "slide-in-top right-0 overflow-auto h-screen z-50"
                  : "z-40 mt-[80px]"
              }
                fixed top-0 left-0 right-0 flex flex-col text-black bg-white shadow-black shadow-md p-5`}
            >
              {allFavoriteProducts.length ? (
                <>
                  <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                    <MdClose
                      className="hover:bg-gray-300 hover:text-red-600"
                      onClick={onCloseFavoriteModal}
                    />
                  </div>
                  <div className="flex flex-row gap-x-2 items-center jusitfy-center mx-auto mb-4">
                    <FaHeart className="size-3" />
                    <p className="flex mx-auto font-bold text-xs">Favoritos</p>
                  </div>
                </>
              ) : (
                ""
              )}
              {allFavoriteProducts.length ? (
                allFavoriteProducts.map((favoriteProducts) => (
                  <>
                    <div
                      key={favoriteProducts.id}
                      className="grid grid-cols-12 items-center justify-center w-[350px] gap-x-2 text-sm hover:bg-gray-100 border-y-[1px] p-2 mb-4 mx-auto"
                    >
                      <img
                        src={favoriteProducts.imgSrc}
                        alt="Product"
                        className="size-[30px] col-span-2"
                        onClick={() => openInfoModal(favoriteProducts)}
                      />
                      <p className="col-span-8">
                        {favoriteProducts.productName}
                      </p>
                      <MdClose
                        onClick={() => onDeleteFavProduct(favoriteProducts)}
                        className="col-span-2 cursor-pointer size-5 text-black hover:text-red-700"
                      />
                    </div>
                  </>
                ))
              ) : (
                <>
                  <div className="absolute top-0 right-0 p-1 flex items-center justify-end">
                    <MdClose
                      className="hover:bg-gray-300 hover:text-red-600"
                      onClick={onCloseFavoriteModal}
                    />
                  </div>
                  <p>No hay favoritos</p>
                </>
              )}
              {allFavoriteProducts.length ? (
                <>
                  <button
                    className="flex w-full bg-black text-white text-sm p-2 items-center justify-center transition
                           hover:bg-pink-300/60 hover:text-black"
                    onClick={onRemoveAllFavorites}
                  >
                    Quitar Favoritos
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </>
      </nav>
    </>
  );
}
export default NavBar;
