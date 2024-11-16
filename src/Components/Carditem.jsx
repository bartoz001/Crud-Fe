import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

export default function Carditem() {
  const { getProduct } = useContext(ProductContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(); // Await the async function
      setProduct(data); // Set the fetched data in state
    };

    fetchProduct(); // Call the async function
  }, [getProduct]); // Include getProduct as a dependency

  console.log(product);

  return (
    <>
      <div className="flex">
        {product.length > 0 && (
          <div className="grid hover grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {product.map((item) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                key={item._id}
              >
                <img
                  src={item.image_url}
                  className="w-full h-48 object-cover"
                  alt={item.name}
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h5>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
