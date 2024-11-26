import React from 'react';
import { useParams } from 'react-router-dom';
import { Check, Shield, DollarSign, Clock, FileText, Phone } from 'lucide-react';

export default function PlanDetails() {
  const { id } = useParams();

  // In a real app, fetch plan details based on id
  const plan = {
    title: "Term Life Insurance",
    description: "Secure your family's future with our comprehensive term life insurance plan.",
    coverage: "Up to $1M",
    premium: "$29/month",
    features: [
      "24/7 customer support",
      "Worldwide coverage",
      "No medical examination required",
      "30-day money-back guarantee",
      "Flexible payment options",
      "Quick claim settlement"
    ],
    benefits: [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Financial Security",
        description: "Ensure your family's financial stability in your absence"
      },
      {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Tax Benefits",
        description: "Get tax deductions on premium payments"
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Lifetime Renewability",
        description: "Option to renew policy without new medical tests"
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Simple Claims",
        description: "Hassle-free and quick claim settlement process"
      }
    ]
  };

  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{plan.title}</h1>
          <p className="text-xl text-blue-100">{plan.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Plan Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plan.benefits.map((benefit, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="text-blue-600">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">Starting from</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.premium}
                </div>
                <p className="text-sm text-gray-500">Coverage up to {plan.coverage}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4">
                Get Started
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Download Brochure
              </button>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Need help?</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Our insurance experts are here to assist you
                </p>
                <a
                  href="tel:1800-123-4567"
                  className="text-blue-600 hover:text-blue-500 text-sm flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  1800-123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}