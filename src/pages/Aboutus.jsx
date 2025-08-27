import React from "react";
const Site2 = () => {
  return (
    <div className="pt-32 bg-black text-white bg-[url('perfume2.png')]">
        
      <section className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          At Local Face Perfumes, we believe that fragrance is not just about how you smell; 
          it’s about how you feel. Our carefully curated collection of perfumes is designed 
          to elevate your everyday moments, helping you express your individuality with every spray.
        </p>
      </section>
  
      <section className="mt-16 flex justify-center">
        <div className="w-[809px] h-[187px] border border-orange-400 p-6 text-center">
          <h3 className="text-orange-400 text-xl mb-3">Our Story</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Local Face Perfumes was founded by a group of passionate enthusiasts with a shared vision 
            of bringing world-class fragrances to our local community. Inspired by global trends but 
            rooted in our unique cultural identity, we created a brand that blends tradition and 
            innovation seamlessly.
          </p>
        </div>
      </section>


      <section className="mt-16">
        <img 
          src="atrlar.png" 
          alt="Perfumes" 
          className="w-full h-[467px] object-cover"
        />
      </section>

     
      <section className="mt-12 text-center max-w-5xl mx-auto px-6">
        <h3 className="text-orange-400 text-xl mb-6">What Makes Us Unique</h3>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-semibold mb-2">Locally Inspired</h4>
            <p className="text-gray-400 text-sm">
              Our perfumes are uniquely crafted to reflect the essence of our culture, 
              blending notes that resonate with our roots.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">High-Quality Ingredients</h4>
            <p className="text-gray-400 text-sm">
              We source only the best raw materials from around the world, ensuring 
              each fragrance is of the highest quality and long-lasting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Personalized Service</h4>
            <p className="text-gray-400 text-sm">
              We pride ourselves on delivering a personalized experience to every customer, 
              helping them find the perfect scent that matches their style.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Site2;
