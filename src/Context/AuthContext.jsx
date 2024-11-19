import React from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const URL = "http://localhost:3000/api/users";
  const user = async () => {
    try {
      const response = await fetch(
        `${URL}/profile/673598c09cb09f90a4def812`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // 'auth-token': localStorage.getItem('token')
          },
        }
      );
      // Check if the response status is OK
      if (!response.ok) {
        console.error(
          "Failed to fetch product:",
          response.status,
          response.statusText
        );
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

  const login = async (email, password) => {
    try {
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) { 
        throw new Error("Failed to login");
      }

      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
