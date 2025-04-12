"use client";

import React, { useState, FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginI {
  type: "login" | "signup";
  setIsAuthenticated: (auth: boolean) => void;
}

const API_URL = "http://localhost:3000/user"; // JSON Server API

const Login: FC<LoginI> = ({ type, setIsAuthenticated }) => {
  const [isLoginActive, setIsLoginActive] = useState(type === "login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  interface FormData {
    fullname?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  interface FormErrors {
    fullname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setMessage(null); // Clear messages
  };

  const validateForm = () => {
    let newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
       
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      
    }

    if (!isLoginActive) {
      if (!formData.fullname) {
        newErrors.fullname = "Full name is required.";
 
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm password is required.";
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage(null);

    if (!isLoginActive) {
      // SIGNUP FLOW - Store in JSON
      try {
        const existingUsers = await fetch(API_URL).then((res) => res.json());
        const userExists = existingUsers.some((user: any) => user.email === formData.email);

        if (userExists) {
          setErrors({ email: "Email already exists!" });
          setLoading(false);
          return;
        }

        const newUser = {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        };

        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
          setIsLoginActive(true);
          setFormData({ fullname: "", email: "", password: "", confirmPassword: "" });
          setMessage(null);
        }, 2000);
      } catch (error) {
        setMessage("Signup failed! Please try again.");
      }
    } else {
      // LOGIN FLOW - Check credentials
      try {
        const users = await fetch(API_URL).then((res) => res.json());
        const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);

        if (user) {
          setIsAuthenticated(true);
          navigate("/");
        } else {
          setErrors({ email: "Invalid email or password" });
        }
      } catch (error) {
        setMessage("Login failed! Please try again.");
      }
    }

    setLoading(false);
  };

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
    setFormData({ fullname: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
    setMessage(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLoginActive ? "Login" : "Sign Up"}
        </h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          {!isLoginActive && (
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm">{errors.fullname}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {!isLoginActive && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex justify-center"
            disabled={loading}
          >
            {loading ? "Processing..." : isLoginActive ? "Login" : "Sign Up"}
          </button>

          <p className="mt-4 text-center text-gray-600">
            {isLoginActive ? "Don't have an account?" : "Already have an account?"}
            <button onClick={toggleForm} className="text-blue-500 hover:underline ml-1">
              {isLoginActive ? "Sign up" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

 