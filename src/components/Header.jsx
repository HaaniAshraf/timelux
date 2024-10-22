import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed w-full h-[70px] bg-white flex items-center justify-between px-4 md:px-10 z-50 shadow-md">
      <div className="w-full hidden md:w-1/3 md:flex justify-start">
        {/* You can add a logo or branding here if needed */}
      </div>
      <h1
        className="text-xl sm:text-2xl md:text-4xl font-serif font-semibold text-center w-full md:w-1/3 cursor-pointer"
        onClick={() => scrollToSection("home-section")}
      >
        TimeLux
      </h1>
      <nav className="w-full md:w-1/3 flex justify-end">
        <ul className="flex items-center gap-3 sm:gap-5 text-sm sm:text-lg">
          <li>
            <button
              onClick={() => scrollToSection("about-section")}
              className="hover:text-red-700 transition-colors cursor-pointer"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="hover:text-red-700 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
