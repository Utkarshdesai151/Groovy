import { useState } from 'react';
import Link from 'next/link';

 function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="max-w-[100%]  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-orange-500 font-bold text-2xl">
              Groovy
            </Link>
          </div>

          {/* Center: Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/home" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/shops" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Shops
              </Link>
              <Link href="/rewards" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Rewards
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Icons (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Add to Cart */}
            <button 
              onClick={addToCart}
              className="relative p-1 text-gray-800 hover:text-orange-500 transition-colors"
              aria-label="Add to cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Favourite */}
            <button className="p-1 text-gray-800 hover:text-orange-500 transition-colors" aria-label="Favourites">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Profile */}
            <button className="p-1 text-gray-800 hover:text-orange-500 transition-colors" aria-label="Profile">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-orange-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {/* Navigation Links */}
            <Link href="/" className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/shops" className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Shops
            </Link>
            <Link href="/rewards" className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Rewards
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</h3>
              
              {/* Icons in Mobile Menu */}
              <div className="mt-3 space-y-1">
                {/* Add to Cart */}
                <button 
                  onClick={addToCart}
                  className="w-full flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-orange-500 hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                {/* Favourite */}
                <button className="w-full flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-orange-500 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Favourites</span>
                </button>
                
                {/* Profile */}
                <button className="w-full flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-orange-500 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;