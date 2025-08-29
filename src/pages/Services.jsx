import React from 'react'
import Girl from '../assets/Girl.png'
import Tea from '../assets/Tea.png'
import Flower from '../assets/Flower.png'
import Perfume from '../assets/Perfume.png'
import Girls from '../assets/Girls.png'
import Peoples from '../assets/Peoples.png'
import BgImage from '../assets/BgImage.jpg'
const Servisec = () => {
  return (
    <div>

      {/* --- Верхняя секция Our Services с задним фото --- */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Our Services
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            At Local Face, we are dedicated to providing you with a delightful and
            immersive perfume shopping experience. Our services are tailored to
            ensure that you find the perfect fragrance that complements your
            unique personality and style. We take pride in offering a range of
            services that go beyond just selling perfumes, aiming to make your
            journey with us truly special.
          </p>
        </div>
      </div>

      {/* --- Дальше ваши пункты 01, 02, 03 и т.д. --- */}
      <div className="bg-black text-white px-20 py-10 space-y-10">
        <div className="flex justify-between items-center">
          <div className=" pl-2">
            <h1 className="text-orange-400 text-3xl font-bold mb-4 py-10">01.</h1>
            <h3 className="text-3xl font-semibold mb-4 py-8">
              Personal Fragrance <br /> Consultations
            </h3>
            <p className="leading-relaxed text-gray-300">
              Choosing the right fragrance can be a deeply <br /> personal experience.
              Our team of knowledgeable <br /> fragrance experts is here to guide you
              through <br /> this process. Whether you're looking for a signature <br />
              scent, a gift for a loved one, or need assistance in <br /> exploring new
              fragrance families, our <br /> consultants will take the time to understand
              your preferences <br /> and suggest the perfect matches.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={Girl} alt="Girl" className=" object-contain" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2 flex justify-center">
            <img src={Tea} alt="Perfume" className=" object-contain" />
          </div>
          <div className="w-1/2 pl-8">
            <h1 className="text-orange-400 text-3xl font-bold mb-4 py-10">02.</h1>
            <h3 className="text-3xl font-semibold mb-4 py-8">
              Custom Fragrance Creation
            </h3>
            <p className="leading-relaxed text-gray-300">
              Experience the art of bespoke perfumery with our <br />
              custom fragrance creation service. Work closely <br />
              with our skilled perfumers to craft a scent that is <br />
              uniquely yours. From selecting individual notes to <br />
              blending them into a harmonious symphony, we'll <br />
              help you bring your fragrance vision to life. Whether <br />
              it's a special occasion, a gift for someone dear, or <br />
              simply a way to indulge in luxury, a custom-created <br />
              perfume is an unforgettable experience.
            </p>
          </div>
        </div>

        <div className="bg-black text-white  py-10 ">
          <div className="flex justify-between items-center ">
            <div className="pl-2 ">
              <h1 className="text-orange-400 text-3xl font-bold mb-4 py-10">03.</h1>
              <h3 className="text-3xl font-semibold mb-4 py-8">
                Scented Gift Selection
              </h3>
              <p className="leading-relaxed text-gray-300">
                Looking for a meaningful gift that leaves a lasting <br />
                impression? Our scented gift selection service is <br />
                designed to help you find the perfect fragrance gift <br />
                for any occasion. Whether it's a birthday, <br />
                anniversary, or a gesture of appreciation, our <br />
                experts will assist you in choosing a fragrance that <br />
                perfectly conveys your sentiments and makes the <br />
                recipient feel cherished.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={Flower} alt="Girl" className=" object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2 flex justify-center">
            <img src={Perfume} alt="Perfume" className=" object-contain" />
          </div>
          <div className="w-1/2 pl-8">
            <h1 className="text-orange-400 text-3xl font-bold mb-4 py-10">04.</h1>
            <h3 className="text-3xl font-semibold mb-4 py-10">
              Fragrance Events and Workshops
            </h3>
            <p className="leading-relaxed text-gray-300">
              Join us for fragrance-centric events and workshops <br />
              that celebrate the art of perfumery. Immerse <br />
              yourself in the captivating world of scents, learn <br />
              from experts, and discover the nuances of different <br />
              fragrance families. These events are perfect for <br />
              fragrance enthusiasts and novices alike, providing a <br />
              unique opportunity to expand your olfactory <br />
              knowledge.
            </p>
          </div>
        </div>

        <div className="bg-black text-white ">
          <div className="flex justify-between items-center">
            <div className="pl-2">
              <h1 className="text-orange-400 text-3xl py-10 font-bold ">05.</h1>
              <h3 className="text-3xl font-semibold mb-4 py-8">""
                Eco-friendly Initiatives
              </h3>
              <p className="leading-relaxed text-gray-300">
                At Local Face, we are committed to sustainability <br />
                and eco-conscious practices. As part of our <br />
                services, we offer guidance on selecting <br />
                environmentally friendly and cruelty-free fragrances. <br />
                We partner with brands that share our values and <br />
                are dedicated to making a positive impact on the <br />
                planet.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={Peoples} alt="Girl" className=" object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2 flex justify-center">
            <img src={Girls} alt="Perfume" className=" object-contain" />
          </div>
          <div className="w-1/2 pl-8">
            <h1 className="text-orange-400 py-10 text-3xl font-bold mb-4">06.</h1>
            <h3 className="text-3xl font-semibold mb-4 py-8">
              Online Shopping Convenience
            </h3>
            <p className="leading-relaxed text-gray-300">
              Explore our carefully curated collection of perfumes <br />
              from the comfort of your home. Our user-friendly <br />
              website offers a seamless online shopping <br />
              experience, complete with detailed product <br />
              descriptions and customer reviews. You can also <br />
              reach out to our customer support team for any <br />
              assistance during your shopping journey.
            </p>
          </div>
        </div>

        <p className="text-gray-300 ">
          At Local Face, our passion for perfumery drives us to go above and beyond to serve you better. We invite you to experience our exceptional <br />
          services and indulge in the world of luxurious scents. Let us be your trusted fragrance destination, where your olfactory dreams come to life.<br />
          <br />
          If you have any questions or need assistance, please do not hesitate to reach out to our friendly team. We're here to make your fragrance <br />
          exploration a truly memorable one. <br />
          <br />
          Your Local Face Team
        </p>
      </div>
    </div>
  )
}

export default Servisec
