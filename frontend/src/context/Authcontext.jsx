import { useState, createContext } from "react";
import Alert from "../Component/Alert";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    if(!userData || userData === null || userData === undefined || userData === "undefined"){
      console.log("No user data found in localStorage , returning null");
      return null;
    }
    console.log("User data from localStorage:", userData);
    return JSON.parse(userData);
  });

  //  Alert state
  const [alertData, setAlertData] = useState({
    show: false,
    message: {
      title: "",
      description: ""
    },
    type: "info",
  });

  //  Function to show alert
  const showAlert = (title, description, type = "info") => {
    setAlertData({
      show: true,
      message: { title, description },
      type,
    });
  };

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/writora/ur/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //  Show logout success message
      showAlert("Logout Success", response.data.message || "You are logged out", "success");
    } catch (error) {
      showAlert("Logout Failed", error.response?.data?.message || "Something went wrong", "error");
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {/*  Render Alert component */}
      <Alert
        show={alertData.show}
        message={alertData.message}
        type={alertData.type}
        onClose={() => setAlertData({ ...alertData, show: false })}
      />
      {children}
    </AuthContext.Provider>
  );
};
