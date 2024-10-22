import React from "react";
import { Tag } from "lucide-react";
import Product from "../assets/product.jpg";

const products = [
  { id: 1, name: "Winter Jacket", image: Product },
  { id: 2, name: "Cozy Sweater", image: Product },
  { id: 3, name: "Thermal Boots", image: Product },
  { id: 4, name: "Fleece Gloves", image: Product },
];

function Cards() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-12">
        <div className="h-px bg-gray-300 flex-grow max-w-xs" />
        <h2 className="text-3xl font-serif mx-6 text-center relative">
          <span className="relative z-10">
            Unveiling Soon: The Evolution of Style
          </span>
        </h2>
        <div className="h-px bg-gray-300 flex-grow max-w-xs" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => scrollToSection("contact-section")}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold mb-2">
                {product.name}
              </h3>
              <div className="bg-[#4B1625] text-white px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center self-start">
                <Tag size={12} className="mr-1" />
                Launching Soon
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
