import React from 'react';
import { ArrowRight, Shield, Heart, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Protect What Matters Most
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Secure your family's future with our comprehensive insurance plans tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <Link to="/plans" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Shield className="h-10 w-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Life Insurance</h3>
              <p className="text-blue-100">Protect your family's financial future</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Heart className="h-10 w-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
              <p className="text-blue-100">Comprehensive medical coverage</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
              <Coins className="h-10 w-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investment Plans</h3>
              <p className="text-blue-100">Grow your wealth securely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}