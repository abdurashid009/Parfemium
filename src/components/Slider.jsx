import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import Par1 from '../assets/par1.png';
import Par2 from '../assets/par2.png';
import Par3 from '../assets/par3.png';
import Par4 from '../assets/par4.png';
import Par5 from '../assets/par5.png';
import Par6 from '../assets/par6.png';
import Par7 from '../assets/par7.png';
import Par8 from '../assets/par8.png';
import Par9 from '../assets/par9.png';
import Par10 from '../assets/par10.png';
import Par11 from '../assets/par11.png';
import Par12 from '../assets/par12.png';
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="rounded-2xl shadow-lg "
      >
        <SwiperSlide>
          <div className=" bg-[black] px-[80px] py-[40px] flex justify-center gap-[30px]">
              <div
                className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
              >
                <img src={Par1} alt="" />
                <h1 className=" text-white text-xl">Luxurious Elixir Rough</h1>
                <p className=" text-[#AB572D] font-bold">
                  $ 220.00{" "}
                  <span className=" font-extralight text-white ">100ml</span>
                </p>
              </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par2} alt="" />
              <h1 className=" text-white text-xl">The Golden Legacy</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 160.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par3} alt="" />
              <h1 className=" text-white text-xl">Luxurious Elixir</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 250.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par4} alt="" />
              <h1 className=" text-white text-xl">Luxurious Essence</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 260.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[black] flex justify-center py-[40px] px-[80px] gap-[30px]">
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par5} alt="" />
              <h1 className=" text-white text-xl">Aurum Aura</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 220.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par6} alt="" />
              <h1 className=" text-white text-xl">Gleaming Gilt</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 160.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par7} alt="" />
              <h1 className=" text-white text-xl">Gilded Elixir Rough</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 1200.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par8} alt="" />
              <h1 className=" text-white text-xl">Golden Luminary</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 660.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[black] flex justify-center py-[40px] px-[80px] gap-[30px]">
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par9} alt="" />
              <h1 className=" text-white text-xl">Decadent Opal</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 220.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par10} alt="" />
              <h1 className=" text-white text-xl">Gilded Elixir</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 1600.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par11} alt="" />
              <h1 className=" text-white text-xl">Glamourous Gilt</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 250.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
            <div
              className=" hover:transform-gpu hover:translate-y-[-40px] active:scale-80
                        transition-all duration-[0.5s] flex flex-col w-[500px] pb-[30px] gap-[10px] items-center justify-around rounded-xl bg-gradient-to-tr from-[#090909] bg-gradient-to-bl to-[#1a1a1a]"
            >
              <img src={Par12} alt="" />
              <h1 className=" text-white text-xl">Luxury Enigma</h1>
              <p className=" text-[#AB572D] font-bold">
                $ 900.00{" "}
                <span className=" font-extralight text-white ">100ml</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
