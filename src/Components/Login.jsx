import React,{useContext, useEffect, useState} from "react";
import  {AuthContext}  from "../Context/AuthContext";
export default function Login() {
  const {login} = useContext(AuthContext)
  const [loginuser, setLoginUser] = useState([]);
  // console.log(products)
  // console.log(products)

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = await login(email, password);
    setLoginUser(data);
    console.log(data);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginuser, [name]: value });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await login(); // Await the async function
      setLoginUser(data); // Set the fetched data in state
    };
    fetchProduct(); // Call the async function
  }, [login]); // Include getProduct as a dependency
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-700">Log in</h2>
      <form className="space-y-4">
        {/* Username Field */}       
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleOnChange}
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
            onChange={handleOnChange}
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Login
        </button>
        <p className="text-sm text-center text-gray-600">
        Don't have an account?
        <a href="/Register" className="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
      </p>
      </form>
    </div>
  </div>
  );
}
