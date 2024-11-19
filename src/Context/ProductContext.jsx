import React from "react";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const URL = "http://localhost:3000/api/products";

    const getProduct = async () => {
      try {
        const response = await fetch(`${URL}/getproduct/673598c09cb09f90a4def812`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // 'auth-token': localStorage.getItem('token')
          },
        });    
        // Check if the response status is OK
        if (!response.ok) {
          console.error("Failed to fetch product:", response.status, response.statusText);
          return null;
        }    
        // Parse the JSON data
        const data = await response.json();
        // console.log("Data received:", data); // Log data for inspection
        return data;
    
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
      }
    };
     
    const AddProduct = async (name, description,image_url,user_id) => {
      try {
        const response = await fetch(`${URL}/addproduct/673598c09cb09f90a4def812`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({ name, description,image_url,user_id }),
        });
        if (!response.ok) {
          console.error("Failed to add product:", response.status, response.statusText);
          return null;
        }
        const data = await response.json();
        console.log("Data received:", data); // Log data for inspection
      } catch (error) {
        console.error("Error adding product:", error);
        return null;
      }
    }
  
  return (
    <ProductContext.Provider value={{ getProduct , AddProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
