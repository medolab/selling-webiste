import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export default function Navbar({ cartItemsCount, onCartClick, onSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative p-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute right-5 top-4.5 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={onCartClick}
              className="flex items-center space-x-2 w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Cart ({cartItemsCount})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}