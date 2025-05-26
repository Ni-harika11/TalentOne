"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoding] = useState(false);
  const [errors, setErrors] = useState("");
  // Validation function
  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    // Email validation
    if (!user.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Password validation
    if (!user.password.trim()) {
      tempErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

   //  Handle Login
  const onLogin = async () => {
    setErrors({});
    if (!validate()) return;

    try {
      setLoding(true);
      const response = await axios.get("http://localhost:3000/users");
      // Check if the email and password match any user
      const Founduser =response.data.find(
        (user:any) => user.email === user.email && user.password === user.password
      )
      //  Check if user exists or not (your API should return this info properly)
      if (Founduser) {
        toast.success("Login successful!");
        setUser({ email: "", password: "" }); // Clear input fields if you want
        router.push("/todos"); // User exists -> Go to Dashboard
      } else {
        toast.error("User not found! Please signup.");
        router.push("/signup"); // User not found -> Go to Signup page
      }
    } catch (error: any) {
      console.log("Login failed:", error);
      toast.error( "Login failed! Please try again!");
    } finally {
      setLoding(false);
    }
  };


  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 
   ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            {loading ? "Processing..." : "Login"}
          </h1>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="text"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              onClick={onLogin}
              className="w-full max-w-xs py-2 px-4 rounded-lg text-white font-semibold transition duration-300 bg-blue-600 hover:bg-blue-700">
              {loading ? "Processing..." : "Login"}
            </button>
            <Link
              href="/signup"
              className="text-blue-600 hover:underline text-sm">
              Visit Signup page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
