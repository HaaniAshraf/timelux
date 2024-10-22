import React, { useState } from "react";
import HomeBg from "../assets/home-bg.jpg";
import FormBg from "../assets/form-bg.jpg";
import Cards from "./Cards";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <h2 className="seasons-font text-5xl md:text-6xl lg:text-8xl mb-4 text-[#FFFFE3] font-semibold tracking-[0.1em]">
            TIMELESS
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl seasons-font mb-8 text-[#FFFFE3] font-semibold tracking-[0.1em]">
            LUXURY
          </h2>
          <button
            className="relative bg-[#4B1625] text-white px-8 py-3 text-sm uppercase tracking-widest overflow-hidden group"
            onClick={() => scrollToSection("contact-section")}
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 " />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
        className="flex items-center justify-center w-full min-h-[600px] mt-36 scroll-mt-20"
      >
        <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-lg w-full max-w-xl mx-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#FFFFE3] mb-3">
              Join the Waiting List
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Be the first to experience our exclusive collection
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#FFFFE3] transition-colors placeholder-transparent peer"
                placeholder="Full Name"
                id="name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-6 text-white/60 text-sm transition-all 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 
                       peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FFFFE3]"
              >
                Full Name
              </label>
            </div>
            <div className="group relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#FFFFE3] transition-colors placeholder-transparent peer"
                placeholder="Email Address"
                id="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-6 text-white/60 text-sm transition-all 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 
                       peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FFFFE3]"
              >
                Email Address
              </label>
            </div>
            <button
              className="relative bg-[#4B1625] text-white px-8 py-3 w-full text-sm uppercase tracking-widest overflow-hidden group"
              type="submit"
            >
              <span className="relative z-10">Join</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about-section"
        className="mt-20 px-4 md:px-10 py-16 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <h2 className="text-4xl font-serif text-[#4B1625] relative z-10 inline-block">
              About Us
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-0.5 bg-[#4B1625]/20"></div>
          </div>

          <div className="relative px-6 py-8">
            <div className="absolute inset-0 border border-[#4B1625]/10"></div>
            <div className="absolute inset-x-4 inset-y-4 border border-[#4B1625]/10"></div>

            <p className="text-gray-600 leading-relaxed relative z-10 max-w-2xl mx-auto">
              We are purveyors of timeless luxury, blending traditional
              craftsmanship with contemporary elegance. Our exclusive
              collections embody sophistication and quality, carefully curated
              for those who appreciate enduring style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
