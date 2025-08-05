import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock ,FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css"; 
import Alert from "../../Component/Alert";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const userInputData = {
      email:"",
      password:""
    }
    const [fieldErrors, setFieldErrors] = useState({});
    const [formData , setFormData] = useState(userInputData);
    const [alertData , setalertData] = useState({
      show:false,
      message:"",
      type:"info",
    });

    const handleInputChanges = (e) =>{
      const {name , value } = e.target;
      setFormData((prevData)=>({
        ...prevData,
        [name]:value
      }))
    }

    const handleFormSubmit = async (e)=>{
      e.preventDefault();
      try{
        let res = await fetch("http://localhost:8080/writora/ur/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(formData)          
        })
        let data = await res.json();
        // Means here we geting the server response now we can use it into the setLogSuccess state
        console.log("Response from server : ",data);
        if(data.success){
          setalertData({
            show:true,
            message:{
              title:"Login Successful",
              description:"You have successfully logged in.",
            },
            type:"success",
          })
          setFieldErrors({});
          setFormData(userInputData);
        }else{
          setalertData({
            show:true,
            message:{
              title:"Login Failed",
              description:data.message || "Please check your credentials and try again.",
            },
            type:"error",
          })
          setFieldErrors(data.errors || {});
        }
      }catch(err){
        console.error("Something error in frontend login.jsx fetch function : ");
        console.error(err);
      }
    }
    
    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };
  return (
    <div className="Login">
      {/* Left Section */}
      <div className="auth-left">
        <h1>Welcome Back 👋</h1>
        <p>Login to access your dashboard and explore more features.</p>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>

          <form onSubmit={handleFormSubmit}>

          {/* Email */}
          <div className="input-field">
            <div className="input-wrapper">
            <FaEnvelope className="input-field-icon" />
            <input type="email" name="email" onChange={handleInputChanges} value={formData.email} placeholder="Enter your email" required />
            </div>
            {fieldErrors.email && ( <p className="login-error-message-para">{fieldErrors.email}</p> )}
          </div>

          {/* Password */}
          <div className="input-field">
            <div className="input-wrapper">
            <FaLock className="input-field-icon" />
            <input type={showPassword ? "text" : "password"} name="password" onChange={handleInputChanges} value={formData.password} placeholder="Enter your password" required />
            <span className="toggle-password-icon-login" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            </div>
            {fieldErrors.password && ( <p className="login-error-message-para">{fieldErrors.password}</p> )}
          </div>

          <button type="submit" className="login-btn">Login</button>
          </form>

          {/* Alert Component */}
          <Alert show={alertData.show} message={alertData.message} type={alertData.type} onClose={()=> setalertData({...alertData,show:false})} />

          {/* Switch to Signin */}
          <div className="switch-link">
            <p>
              Don't have an account? <Link to="/signin">Signup here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
