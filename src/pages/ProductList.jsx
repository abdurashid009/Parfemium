import React, { useState } from "react";
import products from "../components/data"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
 import Ism from "./ism";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#111] p-4 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-28 h-40 object-contain mb-4"
      />
      <h2 className="text-white text-center font-semibold text-sm">
        {product.name}
      </h2>
      <div className="flex items-center gap-1 text-yellow-400 text-xs mt-2">
        ⭐ {product.rating}
        <span className="text-gray-400">({product.reviews})</span>
      </div>
      <p className="text-[#AB572D] mt-2 font-bold">
        ${product.price.toFixed(2)}
        <span className="text-gray-400 text-sm ml-2">{product.size}</span>
      </p>
    </div>
  );
};

const ProductsSlider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / 8); // 8 ta mahsulot har sahifada

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-[#AB572D] text-2xl font-bold text-center mb-8">
        Best Selling Products
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={false}
        spaceBetween={20}
        slidesPerView={1} // har sahifada bitta grid bo'ladi
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products
                .slice(pageIndex * 8, pageIndex * 8 + 8)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sahifa raqami pastda ko'rinadi */}
      <div className="text-center text-gray-400 mt-6">
        Page {currentPage} of {totalPages}
      </div>
      <Ism />
    </div>
  );
};

export default ProductsSlider;
