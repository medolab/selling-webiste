import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ products, onAddToCart }: FeaturedProductsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex">
              <div className="flex-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                </div>
                <p className="mt-3 text-gray-500">{product.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}