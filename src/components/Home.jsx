import React from "react";
import HomeBg from "../assets/home-bg.jpg";
import FormBg from "../assets/form-bg.jpg";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <div
        className="relative h-[calc(100vh-70px)] mt-[70px]"
        id="home-section"
      >
        <img
          src={HomeBg}
          alt="Winter Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl font-serif mb-4">WINTER</h2>
          <h2 className="text-6xl font-serif mb-8">COLLECTION</h2>
          <button className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>

      <div className="mt-20">
        <Cards />
      </div>

      {/* Contact Section */}
      <div
        id="contact-section"
        style={{
          backgroundImage: `url(${FormBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex items-center justify-center w-full h-[600px] mt-20 scroll-mt-20"
      >
        <h2 className="text-6xl font-serif text-white">CONTACT US</h2>
      </div>

      {/* About Section */}
      <div id="about-section" className="mt-20 px-10 py-16 scroll-mt-20">
        <h1 className="text-4xl font-serif mb-6">About Us</h1>
        <p className="max-w-3xl text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nulla dignissimos quaerat minus necessitatibus odio voluptate ducimus
          officiis. Inventore vitae expedita culpa veniam rem ratione ex officia
          magni consequuntur itaque?
        </p>
      </div>
    </div>
  );
}

export default Home;
