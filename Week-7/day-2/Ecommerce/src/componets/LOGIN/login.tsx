"use client"

import React, { useState, FC } from 'react';
import './login.css';
// import { useNavigate } from "react-router-dom";

interface LoginI {type:"login" | "signup"}

const Login: FC<LoginI> = ({type}:LoginI) => {
    // const navigate = useNavigate();
    const [isLoginActive,setIsLoginActive]=useState(true)
    interface FormData {
        fullname: string;
        email: string;
        password: string;
        confirmPassword: string;
      }
     const [formData, setFormData] = useState<FormData>({
            fullname:"",
            email: "",
            password: "",
            confirmPassword: ""
    })
    interface FormErrors {
        fullname?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
      }
    const [errors,setError]=useState<FormErrors>({})

   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    setError({...errors,[e.target.name]:""})

    }
    
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newErrors:FormErrors = {};
    
        if (!formData.email.trim()) newErrors.email = "Email is required!";
        if (!formData.password.trim()) newErrors.password = "Password is required!";
        if (!isLoginActive && !formData.fullname.trim()) newErrors.fullname= "Name is required!";
        if (!isLoginActive && !formData.confirmPassword.trim()) newErrors.confirmPassword = "Confirm password is required!";
        if (!isLoginActive && formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match!";
    
        setError(newErrors);
        if (Object.keys(newErrors).length > 0) return; // Stop if there are errors
        console.log(    Object.keys(newErrors))
        try {
            // Fetch all users
            const response = await fetch("http://localhost:3000/user");
            const users = await response.json();
    
            if (isLoginActive) {
                // 🔹 **Login: Check if user exists**
                const user = users.find(
                    (user: FormData) => user.email === formData.email && user.password === formData.password
                );
    
                if (user) {
                    alert("Login Successful!");
                    // navigate("/user/profile")
                    // window.location.href = "/login"; // Redirect
                } else {
                    setError({ email: "Invalid email or password!" });
                }
            } else {
                // 🔹 **Signup: Check if email exists**
                const emailExists = users.some((user: FormData) => user.email === formData.email);
    
                if (emailExists) {
                    setError({ email: "Email is already registered!" });
                    return;
                }
    
                // 🔹 **Store New User**
                const signupResponse = await fetch("http://localhost:3000/user", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fullname: formData.fullname,
                        email: formData.email,
                        password: formData.password,
                    }),
                });
    
                if (!signupResponse.ok) throw new Error("Signup failed");
    
                alert("Signup Successful! Please log in.");
                setIsLoginActive(true); // Switch to login
            }
    
            // Reset form
            setFormData({ fullname: "", email: "", password: "", confirmPassword: "" });
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Try again.");
        }
     
   
    // if (Object.keys(newErrors).length === 0) {
    //     if (!isLoginActive) {
    //         // **Sign Up Logic: Store Data in JSON Server using fetch**
    //         try {
    //             const response = await fetch("http://localhost:3000/user", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     fullname: formData.fullname,
    //                     email: formData.email,
    //                     password: formData.password
    //                 })
    //             });

    //             if (!response.ok) {
    //                 throw new Error("Signup failed");
    //             }

    //             const result = await response.json();
    //             console.log("User registered:", result);
    //             alert("Signup Successful!");
    //         } catch (error) {
    //             console.error("Error signing up:", error);
    //             alert("Signup failed. Try again.");
    //         }
    //     } else {
    //         alert("Login Successful");
    //     }

    //     setFormData({ fullname: "", email: "", password: "", confirmPassword: "" });
    // }
};
  return (
 
    <div className="container">
    <div className="form active">
      <div className="form-header">{isLoginActive ? "Login" : "Sign Up"}</div>
      <form onSubmit={handleSubmit}>
        {!isLoginActive && (
          <div className="input-group">
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your name"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
        )}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {!isLoginActive && (
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
        )}

        <button className="btn" type="submit">
          {isLoginActive ? "Login" : "Sign Up"}
        </button>

        <p className="switch-text">
          {isLoginActive ? "Don't have an account?" : "Already have an account?"}{" "}
          <a onClick={() => setIsLoginActive(!isLoginActive)}>
            {isLoginActive ? "Sign up" : "Login"}
          </a>
        </p>
      </form>
    </div>
  </div>
);
};
export default Login;
