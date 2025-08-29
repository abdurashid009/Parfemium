import React from 'react'
import { CiSearch } from "react-icons/ci"
import Box1 from '../assets/Box1.png'
import Box2 from '../assets/Box2.png'
import Box3 from '../assets/Box3.png'
import Box4 from '../assets/Box4.png'
import Box5 from '../assets/Box5.png'
import Box6 from '../assets/Box6.png'

const Search = () => {
  return (
    <div className="ml-[150px] mt-[90px]">
      <div className="flex items-center justify-around gap-10">
        <div className="relative">
          <input
            className="bg-white w-[270px] py-2 px-3 pr-10 rounded-md outline-none"
            type="text"
            placeholder="Search here"
          />
          <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        <select className="bg-black text-white px-3 py-1 rounded-md outline-none">
          <option>Filter by category</option>
        </select>

        <select className="bg-black text-white px-3 py-1 rounded-md outline-none">
          <option>Sort by</option>
        </select>
      </div>

      <div className="mt-[100px] grid grid-cols-3 gap-10 text-white">
        
        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box1} alt="Box1" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              Finding Your Signature Scent: A Guide to Perfume Personalities
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              Embark on a journey of self-discovery as we delve into the concept of perfume personalities.
              From bold and adventurous to elegant and timeless, there's a fragrance that perfectly complements your essence.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box2} alt="Box2" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              The Art of Curating a Luxury Perfume Collection
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste,
              personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box3} alt="Box3" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              Decoding Fragrance Notes: Unraveling the Symphony of Scents
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes – top, middle, and base – 
              and learn how each layer contributes to the overall olfactory experience of a perfume.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box4} alt="Box4" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              The Soothing Symphony of Lavender Perfumes
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty.
              In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box5} alt="Box5" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              A Journey Through Time: Perfumery's Rich History
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              In our blog collection, we invite you to embark on a journey through time, where we explore the fascinating history of perfumery.
              From ancient civilizations to modern-day masterpieces, we unravel the tales of how scents have adorned humanity throughout the ages.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>

        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div>
            <img src={Box6} alt="Box6" className="rounded-lg shadow-md" />
            <h1 className="text-2xl mt-4 font-semibold">
              The Timeless Elegance of Rose Perfumes
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. 
              Beyond its captivating beauty, this bloom has inspired perfumers to create some of the most timeless and exquisite fragrances in the world.
            </p>
          </div>
          <button className="mt-5 border border-white px-2 py-1 text-sm rounded hover:bg-white hover:text-black transition inline-block w-auto">
            Read More
          </button>
        </div>
      </div>

    
      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition">
          Load More
        </button>
      </div>
    </div>
  )
}

export default Search
