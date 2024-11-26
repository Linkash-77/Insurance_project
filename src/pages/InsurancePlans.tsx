import React, { useState } from 'react';
import { Shield, Heart, Coins, Umbrella, Car, Home, Briefcase, Plane } from 'lucide-react';
import InsuranceCard from '../components/InsuranceCard';

export default function InsurancePlans() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Plans' },
    { id: 'life', name: 'Life Insurance' },
    { id: 'health', name: 'Health Insurance' },
    { id: 'investment', name: 'Investment Plans' },
    { id: 'general', name: 'General Insurance' },
  ];

  const plans = [
    {
      id: "life-term",
      category: "life",
      title: "Term Life Insurance",
      description: "Comprehensive coverage for your family's financial security.",
      coverage: "Up to $1M",
      premium: "$29/month",
      icon: <Shield className="h-8 w-8" />
    },
    {
      id: "health-premium",
      category: "health",
      title: "Premium Health Cover",
      description: "Superior healthcare coverage with global hospital network.",
      coverage: "Up to $500K",
      premium: "$49/month",
      icon: <Heart className="h-8 w-8" />
    },
    {
      id: "investment-plus",
      category: "investment",
      title: "Investment Plus",
      description: "Grow your wealth with guaranteed returns.",
      coverage: "Flexible",
      premium: "$99/month",
      icon: <Coins className="h-8 w-8" />
    },
    {
      id: "family-umbrella",
      category: "life",
      title: "Family Umbrella",
      description: "Complete family protection under one plan.",
      coverage: "Customizable",
      premium: "$149/month",
      icon: <Umbrella className="h-8 w-8" />
    },
    {
      id: "auto-secure",
      category: "general",
      title: "Auto Secure",
      description: "Comprehensive coverage for your vehicle.",
      coverage: "Market Value",
      premium: "$39/month",
      icon: <Car className="h-8 w-8" />
    },
    {
      id: "home-shield",
      category: "general",
      title: "Home Shield",
      description: "Protect your home and belongings.",
      coverage: "Up to $750K",
      premium: "$45/month",
      icon: <Home className="h-8 w-8" />
    },
    {
      id: "business-guard",
      category: "general",
      title: "Business Guard",
      description: "Complete business protection solution.",
      coverage: "Customizable",
      premium: "$199/month",
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      id: "travel-care",
      category: "general",
      title: "Travel Care",
      description: "Worldwide travel insurance coverage.",
      coverage: "Up to $100K",
      premium: "$19/month",
      icon: <Plane className="h-8 w-8" />
    }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? plans 
    : plans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Insurance Plans</h1>
          <p className="text-xl text-blue-100">Find the perfect insurance plan for your needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPlans.map((plan) => (
            <InsuranceCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}