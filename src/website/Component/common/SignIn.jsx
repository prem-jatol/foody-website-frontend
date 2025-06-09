import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user/register', formData)
    .then(
        (sucess)=>{
            console.log(sucess.data);
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
