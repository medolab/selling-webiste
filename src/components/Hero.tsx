import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=800&q=80"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Spring Collection 2024
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover our latest collection of premium products. From cutting-edge electronics to fashion essentials, 
          we've got everything you need to stay ahead of the curve.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}