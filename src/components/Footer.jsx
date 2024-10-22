import React from "react";
import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 mt-32">
      <div className="w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="md:text-xl font-bold mb-4 seasons-font">TIMELUX</h3>
            <p className="text-sm">
              Curating timeless pieces for the modern wardrobe.
            </p>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="md:text-lg font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/oldmoneyco.in"
              className="flex items-center gap-2 hover:text-[#4B1625] transition-colors text-sm md:text-base"
            >
              <Instagram className="w-5 h-5" />
              <span>@timeluxe</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="md:text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@fashion.com"
              className="flex items-center gap-2 hover:text-[#4B1625] transition-colors text-sm md:text-base"
            >
              <Mail className="w-5 h-5" />
              <span>hello@timeluxe.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © 2024 TimeLuxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
