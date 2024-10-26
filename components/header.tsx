import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-900 rounded-md"></div>
            <span className="text-xl font-semibold text-gray-900">Finpay</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900">
              Products
            </a>
            <a href="#customers" className="text-gray-600 hover:text-gray-900">
              Customers
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#learn" className="text-gray-600 hover:text-gray-900">
              Learn
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            Login
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition font-medium">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
