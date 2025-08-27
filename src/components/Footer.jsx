import React from "react";
import Baggi from "../assets/Baggi.png"
import flower from "../assets/Flowers.png";
import night from "../assets/night.png";
import ocean from "../assets/ocean.png";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
    <div className="bg-black">
      <section className=" relative py-20 bg-gradient-to-r from-black via-black to-gray-900 h-[700px] bg-cover bg-center w-full">
        <img  src={Baggi} alt="" />
        <div className=" absolute top-52 left-[110px] pl-[40px]">
           
            <h1 className=" text-5xl w-[500px]">
              Perfume Year-End Sale! Up to 50% OFF
            </h1>
            <p className=" font-extralight pt-[30px] text-[18px] w-[500px]">Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!</p>
        <button className="bg-orange-500 px-6 py-2 rounded-lg mt-[30px] hover:bg-orange-600">
          Know More
        </button>
        </div>
      </section>

      
      <section className="py-16 mt-20">
        <h2 className="text-center text-5xl  text-orange-500 mb-10">
          Latest Articles
        </h2>
        <div className="flex justify-center items-center gap-6 px-[70px]">
          
          <div className="bg-black overflow-hidden shadow-md">
            <img src={flower} alt="Lavender Perfume" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">The Soothing Symphony of Lavender Perfume</h3>
              <p className="text-sm text-gray-400 mb-4">
                Unlock the secrets of a fragrant elixir...
              </p>
              <p>Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.</p>
              <button className="bg-black px-4 py-2 rounded-lg mt-[30px] hover:bg-gray-600  border-2  ">
                Read More
              </button>
            </div>
          </div>

          
          <div className="bg-black  overflow-hidden shadow-md">
            <img src={night} alt="Luxury Perfume" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">The Art of Curating a Luxury Perfume Collection</h3>
              <p className="text-sm text-gray-400 mb-4">
                A symphony of scents and stories...
              </p>
              <p>A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.</p>
              <button className="bg-black px-4 py-2 rounded-lg mt-[30px] hover:bg-gray-600 border-2">
                Read More
              </button>
            </div>
          </div>

<div className="bg-black  overflow-hidden shadow-md">
            <img src={ocean} alt="Rose Perfume" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">The Timeless Elegance of Rose Perfume</h3>
              <p className="text-sm text-gray-400 mb-4">
                Unveiling the Queen of Flowers in Fragrance...
              </p>
              <p>Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.</p>
              <button className="bg-black px-4 py-2 rounded-lg mt-[30px] hover:border-orange-600 hover:text-orange-700 border-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        </section>
        


      <div className="flex bg-[#000000] pt-[30px] pb-[100px] bg-[radial-gradient(circle_at_center,rgba(15,15,15,1)_10%,rgba(1,10,10,1)_55%)] justify-center gap-40 pb-[50px] mt-20">
                    
          <div>
            <h1 className="text-2xl font-bold text-orange-500">Local Face</h1>
            <p className="mt-4 text-lg font-semibold">Subscribe to Our Newsletter:</p>
            <p className="mt-2 text-sm">Receive Updates on New Arrivals and Special Promotions!</p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email here"
                className="px-3 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 transition">
                Submit
              </button>
            </div>
       
            <div className="flex gap-4 mt-5">
              <a href="#"><FaTwitter className="text-sky-400 text-xl hover:scale-110 transition" /></a>
              <a href="#"><FaFacebookF className="text-blue-500 text-xl hover:scale-110 transition" /></a>
              <a href="#"><FaLinkedinIn className="text-blue-400 text-xl hover:scale-110 transition" /></a>
              <a href="#"><FaInstagram className="text-pink-500 text-xl hover:scale-110 transition" /></a>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Fashion</li>
              <li>Jewelry</li>
              <li>Sports</li>
              <li>Electronics</li>
              <li>Indoor</li>
            </ul>
          </div>

  
          <div>
            <h3 className="font-bold mb-3">Shopping</h3>
            <ul className="space-y-2 text-sm">
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Customer care</h3>
            <ul className="space-y-2 text-sm">
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold mb-3">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact Us</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;