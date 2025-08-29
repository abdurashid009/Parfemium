import React from 'react'
import Img1 from '../assets/qobil.png'

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-10 py-20 space-y-20">
      
      
      <div className="text-center space-y-6">
        <h1 className="text-[50px] font-medium">About Us</h1>
        <p className="max-w-[749px] mx-auto text-[20px] leading-relaxed">
          At Local Face, we believe that perfumes are more than just scents; they are expressions 
          of one's individuality and style. Our passion for exquisite fragrances led us to curate 
          a collection that captures the essence of diverse personalities, bringing you an unparalleled 
          olfactory experience.
        </p>
      </div>

      <div className="text-center space-y-6">
        <h1 className="text-[32px] font-medium text-[#AB572D]">Our Story</h1>
        <p className="max-w-[809px] mx-auto text-[20px] leading-relaxed">
          Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision 
          to create a haven for perfume lovers seeking authentic, locally-inspired fragrances. 
          Inspired by the diversity and richness of cultures around the world, we set out on a journey 
          to curate a collection of scents that capture the essence of each region. Our aim is to bring 
          you closer to the heart and soul of different cultures through the art of perfumery.
        </p>
      </div>

      
      <img
        className="w-[1440px] h-[618px] object-cover rounded-lg"
        src={Img1}
        alt="Perfume Collection"
      />

      <div className="space-y-10 text-center">
        <h1 className="text-[32px] font-medium text-[#AB572D]">What Makes Us Unique</h1>
        <ul className="flex justify-between gap-10 max-w-[1200px] mx-auto text-left text-[18px] leading-relaxed">
          <li className="w-1/3">
            <span >Locally Inspired</span><br />
            Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, 
            and landscapes of various regions. From the vibrant streets of Marrakech to the serene 
            cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates 
            with its origin.
          </li>
          <li className="w-1/3">
            <span >High-Quality Ingredients</span><br />
            We believe that the key to an extraordinary scent lies in the quality of ingredients. 
            That’s why we collaborate with expert perfumers who source the finest and ethically-sourced 
            materials from around the world. We never compromise on the quality of our products, ensuring 
            a long-lasting and luxurious experience.
          </li>
          <li className="w-1/3">
            <span >Personalized Service</span><br />
            We understand that choosing the perfect scent is a deeply personal experience. Our team of 
            fragrance experts is always ready to assist you in finding a fragrance that complements your 
            personality and style. Whether you’re exploring new scents or seeking to rediscover an old 
            favorite, we’re here to guide you every step of the way.
          </li>
        </ul>
      </div>

     
      <div className="font-[Satoshi] font-normal text-[20px] leading-[100%] tracking-[0]">
        <p>
          Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around 
          the world. Discover the captivating aromas that embrace the essence of local cultures and connect 
          with the beauty of our shared humanity.
        </p>
        <p >
          Thank you for being a part of our journey.
          <br /><br /><br />
          With love and gratitude,<br /><br /><br />
          The Local Face Perfumes Team
        </p>
      </div>

    </div>
  )
}

export default About
