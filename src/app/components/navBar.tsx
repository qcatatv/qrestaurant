"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            qRestaurant
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className={`hover:opacity-75 transition-opacity ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Despre
            </Link>
            <Link href="/menu" className={`hover:opacity-75 transition-opacity ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Meniu
            </Link>
            <Link href="/#contact" className={`hover:opacity-75 transition-opacity ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Contact
            </Link>
            <button className={`px-6 py-2 rounded-full transition-all ${
              isScrolled 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-opacity-90'
            }`}>
              Rezervă o masă
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" aria-label="Toggle menu">
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`}
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
