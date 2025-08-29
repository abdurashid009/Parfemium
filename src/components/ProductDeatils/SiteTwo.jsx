import React, { useState } from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import After from "../assets/afterpay.png";
import Star from "../assets/Frame 261.png";
import Pic1 from "../assets/pic1.png";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Frame from "../assets/Frame 450.png";
import Frofile from "../assets/Frame 441.png";
import Profile from "../assets/Frame 440.png";
import Stars from "../assets/Auto Layout Horizontal.png";
import Sar1 from "../assets/par1.png";
import Sar2 from "../assets/par2.png";
import Sar3 from "../assets/par3.png";
import Sar4 from "../assets/par4.png";
import Img9 from '../assets/img9.png'
import Img10 from '../assets/atir2.png'
import { CiHeart } from "react-icons/ci";

const SiteOne = () => {
  const [count, setCount] = useState(1);
     const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-black p-10 text-white space-y-20">
     
      <section className="grid md:grid-cols-2 gap-12 items-start">
         <div className="w-full max-w-md mx-auto relative">
    
      {!hovered && (
        <img
          src={Par2}
          alt="Product"
          className="w-full rounded-lg transition-opacity duration-300"
          onMouseEnter={() => setHovered(true)}
        />
      )}

      {hovered && (
        <img
          src={Img10}
          alt="Product Hover"
          className="w-full rounded-lg transition-opacity duration-300"
          onMouseLeave={() => setHovered(false)}
        />
      )}
    </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Luxurious Elixir</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
           Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues.
          </p>
          <img src={Star} alt="Rating" />

        <div className="flex gap-6">

  <div className="relative group">
    <img
      className="w-24 h-24 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
      src={Par2}
      alt="100ml"
    />
    <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      100 ml
    </p>
  </div>

  <div className="relative group">
    <img
      className="w-24 h-24 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
      src={Par2}
      alt="150ml"
    />
    <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      150 ml
    </p>
  </div>
</div>
         <p className="text-3xl font-bold text-[#AB572D]">$ 160.00</p> 

<div className="relative">

  <div className="absolute top-[-20px] left-[120px] flex items-center justify-between gap-6">
    
    <div>
      <p className="text-lg absolute -left-[50px] top-[8px]">Qty</p>
      <div className="flex items-center justify-between border border-gray-600 rounded-full px-4 py-2 w-32">
        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className="px-2 text-white hover:text-orange-500 transition"
        > 
          -
        </button>
        <span className="text-orange-500 font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-2 text-white hover:text-orange-500 transition"
        >
          +
        </button>
      </div>
    </div>

    <p className="flex items-center gap-2 text-lg cursor-pointer hover:text-[#AB572D] transition">
      Whish list <CiHeart size={22} />
    </p>
  </div>
  <button className="mt-20 w-full md:w-80 h-12 bg-gray-300 border border-white rounded-full font-bold text-lg text-[#AB572D] hover:bg-gray-400 active:scale-95 transition">
    Add to Bag
  </button>
</div>

          <div>
            <img  className="w-[87px] h-[15.78px] bg-[white] mt-[30px] rounded-[23px] opacity-100" src={After} alt="Afterpay" />
            <p className="text-xs absolute top-[635px] left-[879px] ">
              Shop now and pay later with 4 payments
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl mb-3">Product Details</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
           Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues. From the first spritz to the lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish indulgence.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-3">The Golden Overture</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
           Luxurious Elixir opens with a grand flourish of radiant citrus and sun-kissed fruits, reminiscent of golden rays caressing your senses. The opulent heart unfolds with a bouquet of velvety roses and rare blooms, their essence radiating with the allure of gilded petals. As the fragrance settles, a sumptuous blend of warm amber, creamy vanilla, and smooth sandalwood evokes a sense of ultimate luxury and refinement.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-start mb-8">Key Notes</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-lg font-medium">
              Top Note <br /> Citrus Accord, Sun-kissed Fruits
            </p>
            <img src={Pic1} alt="Top Note" className="w-64 h-64 mx-auto rounded-full mt-4" />
          </div>
          <div>
            <p className="text-lg font-medium">
              Heart Note <br /> Golden Roses, Rare Blooms
            </p>
            <img src={Pic2} alt="Heart Note" className="w-64 h-64 mx-auto rounded-full mt-4" />
          </div>
          <div>
            <p className="text-lg font-medium">
              Base Note <br /> Amber, Vanilla, Sandalwood
            </p>
            <img src={Pic3} alt="Base Note" className="w-64 h-64 mx-auto rounded-full mt-4" />
          </div>
        </div>
      </section>
 <div>     <p className="text-3xl mb-3">The Heart of Elegance</p>
    <p className="textSgray-300 text-lg leading-relaxed">Luxurious Elixir is the embodiment of elegance, drawing you into a world where glamour and prestige unite. With every spritz, the fragrance weaves a tapestry of glistening gold around you, enhancing your allure and capturing the admiration of those around.</p>
  </div>
  <div>
    <p className="text-3xl mb-3">The Ultimate Expression of Luxury</p>
   <p className="text-gray-300 text-lg leading-relaxed">Luxurious Elixir makes an extraordinary gift, an expression of your discerning taste and admiration for the extraordinary. Delight your loved ones with this lavish elixir, a symbol of admiration and adoration.</p>
  </div>
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-[#AB572D] mb-6 text-center">Reviews</h2>
        <img src={Frame} alt="Divider" className="mx-auto mb-6" />

        <div className="space-y-8 ">
         <div className="p-4 rounded-2xl bg-[#111] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-700/40">
  <img src={Frofile} alt="Jack Smith" className="rounded-full w-12 h-12 mb-2" />
  <img src={Stars} alt="Stars" className="mb-2" />
  <p className="mt-2 text-gray-300">
    Very lovely fragrance. Would recommend to individuals looking for a
    combination of sweetness and elegance in perfume. I like floral perfume, and
    this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy
    with purchase.
  </p>
  <p className="font-semibold">Jack Smith</p>
  <p className="text-gray-400 text-sm">June 03, 2023</p>
</div>

          <div className="p-4 rounded-2xl bg-[#111] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-700/40">
            <img src={Profile} alt="Ashley" />
            <img src={Stars} alt="Stars" />
            <p className="mt-2 text-gray-300">
              I like floral perfume, and this one is lovely, it's not overpowering. Nice, pleasant scent. I am happy with purchase.
            </p>
            <p className="font-semibold">Ashley</p>
            <p className="text-gray-400 text-sm">January 05, 2023</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#111] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-700/40">
            <img src={Frofile} alt="Lauri Jess" />
            <img src={Stars} alt="Stars" />
            <p className="mt-2 text-gray-300">
             I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn't take the air out of the room. Some scents are so overbearing but not this on. Try it you just might really love it.
            </p>
            <p className="font-semibold">Jack Smith</p>
            <p className="text-gray-400 text-sm">October 05, 2022</p>
          </div>
        </div>
        

        <button className="mt-8 mx-auto block w-52 h-12 border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </section>

     <section className="text-center">
  <h2 className="text-4xl text-[#AB572D] mb-10">Discover More</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">

    <div className="rounded-xl bg-gradient-to-b from-[#1A1A1A] to-black p-4 relative group">
      <img src={Sar1} alt="Luxurious Elixir Rough" className="rounded-lg mx-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Quick View</p>
      </div>
      <p className="mt-4 text-lg font-medium">Luxurious Elixir Rough</p>
      <p className="mt-2 text-[#AB572D] font-bold">
        $ 220.00 <span className="text-gray-400 font-light">100ml</span>
      </p>
    </div>

    <div className="rounded-xl bg-gradient-to-b from-[#1A1A1A] to-black p-4 relative group">
      <img src={Sar2} alt="The Golden Legacy" className="rounded-lg mx-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Quick View</p>
      </div>
      <p className="mt-4 text-lg font-medium">The Golden Legacy</p>
      <p className="mt-2 text-[#AB572D] font-bold">
        $ 160.00 <span className="text-gray-400 font-light">100ml</span>
      </p>
    </div>

    <div className="rounded-xl bg-gradient-to-b from-[#1A1A1A] to-black p-4 relative group">
      <img src={Sar3} alt="Luxurious Elixir" className="rounded-lg mx-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Quick View</p>
      </div>
      <p className="mt-4 text-lg font-medium">Luxurious Elixir</p>
      <p className="mt-2 text-[#AB572D] font-bold">
        $ 250.00 <span className="text-gray-400 font-light">100ml</span>
      </p>
    </div>

    <div className="rounded-xl bg-gradient-to-b from-[#1A1A1A] to-black p-4 relative group">
      <img src={Sar4} alt="Luxurious Golden Legacy" className="rounded-lg mx-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold">Quick View</p>
      </div>
      <p className="mt-4 text-lg font-medium">Luxurious Golden Legacy</p>
      <p className="mt-2 text-[#AB572D] font-bold">
        $ 240.00 <span className="text-gray-400 font-light">100ml</span>
      </p>
    </div>

  </div>
</section>

    </div>
  );
};

export default SiteOne;
