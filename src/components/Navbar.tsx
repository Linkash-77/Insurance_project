import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import { useAuth } from '../store/authStore';

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">MaxLife</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/plans" className="text-gray-600 hover:text-blue-600">Insurance Plans</Link>
            <Link to="/claims" className="text-gray-600 hover:text-blue-600">Claims</Link>
            <Link to="/support" className="text-gray-600 hover:text-blue-600">Support</Link>
            {token ? (
              <button
                onClick={logout}
                className="flex items-center space-x-1 text-blue-600"
              >
                <User className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/signin" className="flex items-center space-x-1 text-blue-600">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}