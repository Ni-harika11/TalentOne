import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9+_.%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");  
    console.log("Logging in with", { email, password });

   
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 ">{error}</p>
        )}
        <button
          type="submit"
          className="w-full p-2 rounded text-white font-semibold"
          style={{ backgroundColor: "#a1eafb" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;











 