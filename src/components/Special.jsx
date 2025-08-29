import React from "react";
function Special() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
  
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Special Offers
      </h1>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-16">
        <div>
          <img
            src={'photo_2025-08-22_17-47-46.jpg'}
            alt="Aqua Serenity"
            className="rounded-xl w-[750px] shadow-lg h-[900px]object-cover hover:scale-105 transition"
          />
        </div>

        <div className="bg-gradient-to-b from-[#031622] to-[#0b1a2d] p-8 rounded-xl h-150 hover:scale-105 transition ">
          <div className="mt-20">
          <p className="text-4xl mb-3">
            Limited Time Offer:{" "}
            <span className="font-semibold">20% OFF</span> on Aqua Serenity
            Perfume!
          </p>
          <h2 className="text-3xl font-bold mb-2 mt-40">Aqua Serenity</h2>
          <h3 className="text-xl text-cyan-400 font-semibold mb-4">
            Embrace the Tranquil Tides
          </h3>
          <p className="text-gray-300 mb-6">
            Immerse yourself in the calming embrace of Aqua Serenity, a
            captivating fragrance that evokes the essence of water.
          </p>
          <button className="px-5  py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Know More
          </button>
          </div>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 gap-6 items-center">

        <div className="bg-gradient-to-b from-[#1c0d00] to-[#2b1402] p-8 rounded-xl h-159 hover:scale-105 transition">
          <div className="mt-20">
          <p className="text-4xl mb-3">
            Limited Time Offer:{" "}
            <span className="font-semibold text-4xl">25% OFF</span> on Golden Angel
            Perfume!
          </p>
          <h2 className="text-3xl font-bold mb-2 mt-40">Golden Angel</h2>
          <h3 className="text-xl text-amber-400 font-semibold mb-4">
            Unleash Your Divine Glow
          </h3>
          <p className="text-gray-300 mb-6 ">
            Indulge in the divine allure of Golden Angel, a fragrance that
            embodies celestial elegance and radiance.
          </p>
          <button className="px-5  py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Know More
          </button>
          </div>
        </div>

   
        <div>
          <img
            src={'photo_2025-08-22_17-48-39.jpg'}
            alt="Golden Angel"
            className="rounded-xl w-[700] shadow-lg  object-cover hover:scale-105 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default Special;