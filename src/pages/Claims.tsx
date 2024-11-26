import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function Claims() {
  const [activeTab, setActiveTab] = useState('file');

  const claims = [
    {
      id: 'CLM001',
      type: 'Health Insurance',
      date: '2024-03-15',
      amount: '$1,500',
      status: 'Processing',
      description: 'Hospital admission for routine surgery'
    },
    {
      id: 'CLM002',
      type: 'Car Insurance',
      date: '2024-03-10',
      amount: '$2,800',
      status: 'Approved',
      description: 'Vehicle repair after minor accident'
    },
    {
      id: 'CLM003',
      type: 'Home Insurance',
      date: '2024-03-05',
      amount: '$5,000',
      status: 'Rejected',
      description: 'Water damage claim'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Claims Center</h1>
          <p className="text-xl text-blue-100">File and manage your insurance claims</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('file')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'file'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                File a Claim
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'history'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Claims History
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'file' ? (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold mb-6">Submit a New Claim</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Insurance Type</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option>Health Insurance</option>
                      <option>Life Insurance</option>
                      <option>Car Insurance</option>
                      <option>Home Insurance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Incident Date</label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Claim Amount</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Describe the incident..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Supporting Documents</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <FileText className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            <span>Upload files</span>
                            <input type="file" className="sr-only" multiple />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Claim
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Recent Claims</h2>
                <div className="space-y-4">
                  {claims.map((claim) => (
                    <div key={claim.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-sm text-gray-500">Claim ID: {claim.id}</span>
                          <h3 className="font-medium">{claim.type}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(claim.status)}`}>
                          {claim.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{claim.description}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Date: {claim.date}</span>
                        <span>Amount: {claim.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}