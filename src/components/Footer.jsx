import React from "react";
import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-32">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4">TIMELUX</h3>
            <p className="text-gray-400 text-sm">
              Curating timeless pieces for the modern wardrobe.
            </p>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/oldmoneyco.in"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@timelux</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@fashion.com"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@timelux.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © 2024 TimeLux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
