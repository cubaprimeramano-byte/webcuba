"use client";

import { useState, useEffect } from "react";
import { content } from "@/data/content";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          {content.site.logoImage ? (
            <img src={content.site.logoImage} alt="Logo" className="h-10 w-auto" />
          ) : (
            <div className="h-10 w-10 bg-primary text-white rounded flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
              {content.site.logoText}
            </div>
          )}
          <span className="font-bold text-xl text-gray-900 hidden sm:block">
            {content.site.title}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {content.menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4">
          {content.menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
