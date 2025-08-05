import React, { useState } from "react";
import "./Signin.css";
import { FaUser, FaEnvelope, FaLock, FaImage ,FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Alert from "../../Component/Alert";
export default function Signin() {
  const userInputData ={
    name:"",
    email:"",
    password:"",
    image:"",
  }
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData , setFormData] = useState(userInputData);
  const [alertData , setalertData] = useState({
        show:false,
        message:"",
        type:"info",
      });
  
  const handleInputChanges = (e)=>{
    const {name , value } = e.target;
    setFormData((prevData)=>({
      ...prevData,[name]:value
    }))
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!formData.image){
      alert("Please select an image before submitting the form.");
      return;
    }
    const formPayload = new FormData();
    formPayload.append("name",formData.name);
    formPayload.append("email",formData.email);
    formPayload.append("password",formData.password);
    formPayload.append("image",formData.image);
    try{
      const response = await fetch("http://localhost:8080/writora/ur/signin",{
        method:"POST",
        body:formPayload
      });
      const data = await response.json();
      if(data.success){
        setalertData({
          show:true,
          message:{
            title:"Signin Successful",
            description:"You have successfully signed in.",
          },
          type:"success",
        });
      }else{
        setalertData({
          show:true,
          message:{
            title:"Signin Failed",
            description:data.message || "Please check your credentials and try again.",
          },
          type:"error",
        });
      }
      setFormData(userInputData);
      setImage(null);
    }catch(err){
      console.error("Something error in user signin form frontend : ",err);
    }
  }

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFormData((prevData)=>({
        ...prevData,
        image:file,
      }))
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>
          Welcome to <span className="app-name">Writora</span>
        </h1>
        <p className="tagline">
          Your words matter. Start your journey with our blog platform.
        </p>
      </div>

      <div className="signin-card">
        <h2>Let's Get You Started!</h2>

        <form encType="multipart/form-data" onSubmit={handleFormSubmit} className="signIn-form_Data" action="/ur/signin" method="post">

        <div className="image-upload">
          <div className="image-circle">
            {image ? (
              <img src={image} alt="User" />
            ) : (
              <FaImage className="placeholder-icon" />
            )}
          </div>

          <label className="custom-file-button">
            Upload Image
            <input  type="file" accept="image/*"  name="image" onChange={handleImageChange} required />
          </label>

          {!image && <p className="no-image">No image selected</p>}
        </div>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input onChange={handleInputChanges} type="text" placeholder="Name" name="name" value={formData.name} required />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input onChange={handleInputChanges} type="email" placeholder="Email" name="email" value={formData.email} required/>
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input onChange={handleInputChanges} className="sign-in-password" type={showPassword?"text":"password"} placeholder="Password" name="password" value={formData.password} required />
          <span className="toggle-password-icon" onClick={togglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="nav-desk-signBTN">Sign In</button>

        </form>
        {/* Alert Component */}
        <Alert show={alertData.show} message={alertData.message} type={alertData.type} onClose={()=> setalertData({...alertData,show:false})} />

        <p className="switch-auth">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
