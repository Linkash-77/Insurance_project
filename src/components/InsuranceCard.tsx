import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsuranceCardProps {
  id: string;
  title: string;
  description: string;
  coverage: string;
  premium: string;
  icon: React.ReactNode;
}

export default function InsuranceCard({ id, title, description, coverage, premium, icon }: InsuranceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-1">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t border-gray-100 pt-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Coverage</span>
          <span className="font-semibold">{coverage}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Premium</span>
          <span className="font-semibold text-blue-600">{premium}</span>
        </div>
      </div>
      <Link 
        to={`/plans/${id}`}
        className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}