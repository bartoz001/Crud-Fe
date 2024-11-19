import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { AuthContext } from "../Context/AuthContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext); // Function to get user data
  const { AddProduct } = useContext(ProductContext); // Function to add a product
  const [UserProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await user(); // Await the user function to fetch data
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [user]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
    user_id: "",
  });

  // Update `user_id` when `UserProfile` changes
  useEffect(() => {
    if (UserProfile._id) {
      setFormData((prev) => ({ ...prev, user_id: UserProfile._id }));
    }
  }, [UserProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_id) {
      AddProduct(formData.name, formData.description, formData.image_url);
      console.log("Product Data:", formData);
      navigate("/");
    } else {
      console.error("User ID is missing. Cannot add product.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Add Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image_url"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
