'use client';

import React, { useState,useEffect } from 'react';
import { Eye, EyeOff, Link } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear previous error message on submit
    setError('');
    
  };
  const router = useRouter();
  const pathname = usePathname();

    useEffect(() => {
      // Set isLogin based on the current path
      setIsLogin(pathname !== '/signup');
    }, [pathname]);
    const handleClick = () => {
    // Reset error before validating
    setError('');

    // Check if fields are empty
    if (!email || !password || (!isLogin && !name)) {
      setError('All fields are required');
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Validate name (only in Sign Up mode)
    if (!isLogin && typeof name !== 'string') {
      setError('Name must be a valid string');
      return;
    }
    if (!isLogin) {
      // --- Signup Logic ---
      const newUser = { name, email, password };
      const users = JSON.parse(localStorage.getItem('users') || '[]');
  
      // Check if email already exists
      const existingUser = users.find((user: any) => user.email === email);
      if (existingUser) {
        setError('Email already registered');
        return;
      }  
        // Save new user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please log in.');
    setIsLogin(true); // Switch to login mode
  }else {
    // --- Login Logic ---
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError('Invalid email or password');
      return;
    }

   
    // Proceed with form submission if no errors
    console.log({
      type: isLogin ? 'Login' : 'Signup',
      name,
      email,
      password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h1>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="button"
            onClick={handleClick} // Trigger validation on button click
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
         >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
       
        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
           <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setName('');
              setEmail('');
              setPassword('');
              setError('');
            }}
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>  
        </p>    
      </div>
    </div>
  );




};

export default Login;
 
 