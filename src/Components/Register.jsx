import React,{useContext} from "react";
import  {ProductContext}  from "../Context/ProductContext";
export default function Register() {
  const {products} = useContext(ProductContext)
  // console.log(products)
  console.log(products)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
      <form className="space-y-4">
        {/* Username Field */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Register
        </button>
        <p class="text-sm text-center text-gray-600">
        Already have an account?
        <a href="/login" class="font-medium text-blue-600 hover:text-blue-500">Log in</a>
      </p>
      </form>
    </div>
  </div>
  );
}
