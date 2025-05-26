"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Singup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoding] = useState(false);
  const [errors,setErrors]=useState({})
  
  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    if (typeof user.username !== 'string'|| !user.username.trim()) {
      tempErrors.username = "Username must be a valid string";
    }

    if (!user.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      tempErrors.email = "Email is invalid";
    } 
     

    if (!user.password) {
      tempErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
   
  };
  const onSignup = async () => {
    setErrors('')
    if (loading) return;
    if(!validate()) return;
    setLoding(true)
    try {
      setLoding(true);

      const userData=await axios.get("http://localhost:3000/users")
      // Check if the email already exists
      const emailExists = userData.data.some(
        (existingUser: any) => existingUser.email === user.email
      );
      if (emailExists) {
        toast.error("Email already exists!");
        return;
      }
      const response = await axios.post("http://localhost:3000/users", user);
      console.log("singup succesful", response.data);
      toast.success("Signup successful!");
      
      setUser({ email: "", password: "", username: "" }); // Also clear input fields if you want
      router.push("/login"); // Go to login after signup
    } catch (error: any) {
      console.log("singup failed");
      toast.error(error.message || "Signup failed!");
    } finally {
      setLoding(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
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
            {loading ? "Processing..." : "Signup"}
          </h1>
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
              className="block text-sm font-medium text-gray-700"
            >
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
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
            
              onClick={onSignup}
              className="w-full max-w-xs py-2 px-4 rounded-lg text-white font-semibold transition duration-300 bg-blue-600 hover:bg-blue-700"
                
            > 
              {loading ? "Processing..." : "Signup"}
              
            </button>

            <Link
              href="/login"
              className="text-blue-600 hover:underline text-sm"
            >
              Visit login page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
