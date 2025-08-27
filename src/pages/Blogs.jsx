import React from "react";
import Main from "../assets/blogMain.png";
import Search from "../components/BlogSearch";
const Blogs = () => {
  return (
    <div className="bg-black">
      <h4 className="text-white  ml-[150px] ">Home/Blog</h4>
      <h1 className=" text-white mt-[70px] text-2xl justify text-center">
        OUR BLOG COLLECTION
      </h1>

      <div className="flex items-start justify-start gap-10 px-[50px] mt-[40px]  ml-[100px]">
        <div className="text-white max-w-[600px]">
          <h1 className="text-2xl mb-6">Discover the Art of Perfumery</h1>

          <p className="mb-6">
            Welcome to Local Face's Perfumery Blog Collection! Here, we invite
            you to immerse yourself in the captivating world of fragrances,
            where each blog post is a sensory journey that unveils the magic and
            allure of perfumes. Our team of fragrance enthusiasts, industry
            experts, and perfumers have curated an array of captivating articles
            to enrich your understanding and appreciation for these olfactory
            delights.
          </p>

          <p>
            At Local Face, we believe that perfumery is an extraordinary fusion
            of art, science, and emotion. Our passion for exquisite fragrances
            has inspired us to curate a treasure trove of blog posts, each
            designed to ignite your senses and deepen your appreciation for
            these olfactory wonders.
          </p>
        </div>

        <div>
          <img src={Main} alt="Perfume" className="max-w-[400px]  shadow-lg" />
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Blogs;
