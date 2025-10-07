import React, { useState } from 'react';
import { Eye, EyeOff, AlertTriangle } from 'lucide-react';

export default function AutofillDemo() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    // Hidden fields
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    bankAccount: '',
    routingNumber: ''
  });
  const [showCaptured, setShowCaptured] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCaptured(true);
  };

  const capturedData = Object.entries(formData).filter(([key, value]) => value !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Warning Banner */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-yellow-800 mb-1">Security Demonstration</h3>
              <p className="text-yellow-700 text-sm">
                This form demonstrates how browser autofill can expose sensitive information through invisible fields. 
                The fields below marked in red are HIDDEN but can still be autofilled by your browser.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600 mb-6">Fill in your basic information below</p>

          <form onSubmit={handleSubmit} autoComplete="on">
            {/* Visible Fields */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    autoComplete="additional-name"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* INVISIBLE FIELDS - These are hidden but will capture autofill data */}
            <div className="hidden">
              <input type="text" name="address" autoComplete="street-address" value={formData.address} onChange={handleChange} />
              <input type="text" name="city" autoComplete="address-level2" value={formData.city} onChange={handleChange} />
              <input type="text" name="state" autoComplete="address-level1" value={formData.state} onChange={handleChange} />
              <input type="text" name="zip" autoComplete="postal-code" value={formData.zip} onChange={handleChange} />
              <input type="text" name="country" autoComplete="country-name" value={formData.country} onChange={handleChange} />
              <input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} />
              <input type="text" name="cardNumber" autoComplete="cc-number" value={formData.cardNumber} onChange={handleChange} />
              <input type="text" name="cardExpiry" autoComplete="cc-exp" value={formData.cardExpiry} onChange={handleChange} />
              <input type="text" name="cardCVV" autoComplete="cc-csc" value={formData.cardCVV} onChange={handleChange} />
              <input type="text" name="bankAccount" autoComplete="off" placeholder="Bank Account" value={formData.bankAccount} onChange={handleChange} />
              <input type="text" name="routingNumber" autoComplete="off" placeholder="Routing Number" value={formData.routingNumber} onChange={handleChange} />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Show what was captured */}
          {showCaptured && capturedData.length > 0 && (
            <div className="mt-8 p-6 bg-red-50 border-2 border-red-300 rounded-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="mr-2" size={24} />
                Data Captured by This Form
              </h3>
              <div className="space-y-2">
                {capturedData.map(([key, value]) => {
                  const isHidden = !['firstName', 'middleName', 'lastName', 'email', 'password'].includes(key);
                  return (
                    <div key={key} className={`p-3 rounded ${isHidden ? 'bg-red-100 border border-red-400' : 'bg-green-50 border border-green-300'}`}>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className={isHidden ? 'text-red-700' : 'text-green-700'}>
                          {key === 'password' ? '••••••••' : value}
                        </span>
                      </div>
                      {isHidden && (
                        <p className="text-xs text-red-600 mt-1">
                          ⚠️ This field was HIDDEN but captured via autofill
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-gray-700 font-medium">
                Red fields were invisible to you but were still filled by your browser's autofill feature!
              </p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-3">How to Demonstrate:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Have your browser's autofill enabled with saved addresses and payment information</li>
            <li>Start typing in the "First Name" field</li>
            <li>Select an autofill suggestion from your browser</li>
            <li>Click "Create Account" to see ALL the data that was captured</li>
            <li>Notice how hidden fields (addresses, bank details, cards) were filled without your knowledge</li>
          </ol>
          <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Security Lesson:</strong> Never enable autofill on untrusted websites. Malicious sites can use 
              invisible form fields to harvest your personal, financial, and banking information without your knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}