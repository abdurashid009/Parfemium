import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-black">
        

        <div className="flex bg-[#000000] pt-[30px] pb-[100px] bg-[radial-gradient(circle_at_center,rgba(15,15,15,1)_10%,rgba(1,10,10,1)_55%)] justify-center gap-40 pb-[50px] mt-20">
          <div>
            <h1 className="text-2xl font-bold text-orange-500">Local Face</h1>
            <p className="mt-4 text-lg font-semibold">
              Subscribe to Our Newsletter:
            </p>
            <p className="mt-2 text-sm">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
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
              <a href="#">
                <FaTwitter className="text-sky-400 text-xl hover:scale-110 transition" />
              </a>
              <a href="#">
                <FaFacebookF className="text-blue-500 text-xl hover:scale-110 transition" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-blue-400 text-xl hover:scale-110 transition" />
              </a>
              <a href="#">
                <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition" />
              </a>
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