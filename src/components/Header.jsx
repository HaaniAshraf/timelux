import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed w-full h-[70px] bg-white flex items-center justify-between px-3 md:px-10 z-50 shadow-md">
      {/* Empty div - hidden on mobile, visible from md up */}
      <div className="hidden md:block md:w-1/3"></div>

      {/* Title - full width on mobile, 1/3 width from md up */}
      <h1
        className="text-xl sm:text-2xl md:text-4xl font-serif font-semibold cursor-pointer md:w-1/3 md:text-center text-[#4B1625] tracking-[0.1em]"
        onClick={() => scrollToSection("home-section")}
      >
        TIMELUXE
      </h1>

      {/* Navigation - maintains position on both mobile and desktop */}
      <nav className="md:w-1/3 md:flex md:justify-end">
        <ul className="flex items-center gap-2 sm:gap-5 text-sm sm:text-lg">
          <li>
            <button
              onClick={() => scrollToSection("about-section")}
              className="hover:text-[#4B1625] transition-colors cursor-pointer"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="hover:text-[#4B1625] transition-colors cursor-pointer"
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
