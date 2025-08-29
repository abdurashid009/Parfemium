import React from "react";
import data from "../data"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#111] p-4 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition">
      {/* Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-28 h-40 object-contain mb-4"
      />

      {/* Title */}
      <h2 className="text-white text-center font-semibold text-sm">
        {product.name}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-400 text-xs mt-2">
        ⭐ {product.rating}{" "}
        <span className="text-gray-400">({product.reviews})</span>
      </div>

      {/* Price + size */}
      <p className="text-[#AB572D] mt-2 font-bold">
        ${product.price.toFixed(2)}
        <span className="text-gray-400 text-sm ml-2">{product.size}</span>
      </p>
    </div>
  );
};

const ProductsGrid = () => {
  return (
    <div className="bg-black min-h-screen p-6">
      {/* Title */}
      <h1 className="text-[#AB572D] text-2xl font-bold text-center mb-8">
        Best Selling Products
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      
    </div>
  );
};

export default ProductsGrid;
