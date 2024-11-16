import React from "react";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const URL = "http://localhost:5000/api";

    const getProduct = async () => {
      try {
        const response = await fetch(`${URL}/products/getproduct/673598c09cb09f90a4def812`, {
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
    

  return (
    <ProductContext.Provider value={{ getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
