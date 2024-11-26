import React from 'react';
import Hero from '../components/Hero';
import InsuranceCard from '../components/InsuranceCard';
import { Shield, Heart, Coins, Umbrella } from 'lucide-react';

export default function Home() {
  const featuredPlans = [
    {
      id: "life-term",
      title: "Term Life Insurance",
      description: "Secure your family's future with our comprehensive term life insurance plan.",
      coverage: "Up to $1M",
      premium: "$29/month",
      icon: <Shield className="h-8 w-8" />
    },
    {
      id: "health-premium",
      title: "Premium Health Cover",
      description: "Get access to the best healthcare facilities with our premium health insurance.",
      coverage: "Up to $500K",
      premium: "$49/month",
      icon: <Heart className="h-8 w-8" />
    },
    {
      id: "investment-plus",
      title: "Investment Plus",
      description: "Combine life insurance with smart investment options for better returns.",
      coverage: "Flexible",
      premium: "$99/month",
      icon: <Coins className="h-8 w-8" />
    },
    {
      id: "family-umbrella",
      title: "Family Umbrella",
      description: "Complete protection for your entire family under one plan.",
      coverage: "Customizable",
      premium: "$149/month",
      icon: <Umbrella className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Insurance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPlans.map((plan) => (
            <InsuranceCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MaxLife Insurance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Protection</h3>
              <p className="text-gray-600">Over 20 years of experience in providing reliable insurance coverage.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">24/7 support and hassle-free claims process for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coins className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600">Customizable insurance solutions to fit your specific needs and budget.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}