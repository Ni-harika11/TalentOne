"use client";

import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const page = () => {
  const [todos, setTodos] = useState<string[]>(['']); // Initialize with one empty todo input
  const [errors, setErrors] = useState<string[]>(['']); // For storing error messages
  const [submittedTodos,setSubmittedTodos]=useState<string[]>([])
  // Handle input change for a specific todo
  const handleChange = (index: number, value: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);

    const updatedErrors = [...errors];
    updatedErrors[index] = ""; // Clear error for the specific todo
    setErrors(updatedErrors);
  };
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token"); // or any flag like 'isLoggedIn'
    if (!isAuthenticated) {
      toast.error("You must be logged in to view this page");
      window.location.href = "/login"; // Redirect to login page
    }
  
    const savedTodos = localStorage.getItem("submittedTodos");
    if (savedTodos) {
      setSubmittedTodos(JSON.parse(savedTodos));
    }
  }, []);
  

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("submittedTodos");
  //   if (savedTodos) {
  //     setSubmittedTodos(JSON.parse(savedTodos));
  //   }
  // }, []);


  // Add a new empty todo input
  
  
  const addTodo = () => {
    setTodos(prev => [...prev, ...todos]);
    setErrors([...errors, '']); // Add a new empty error message for the new todo
  };

  // Remove a specific todo input
  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const updatedErrors = errors.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setErrors(updatedErrors);
  };

  // Handle the submit action (validate and submit todos)
  const handleSubmit = () => {
    const newErrors = todos.map(todo => todo.trim() === "" ? "This field is required" : "");
    setErrors(newErrors);

    // Check for errors and prevent submission if any todo is empty
    if (newErrors.some(error => error !== "")) {
      toast.error("Please fill in all todos.");
      return;
    }

    if (todos.length === 0) {
      toast.error("No tasks to submit!");
      return;
    }

    const updatedSubmitted = Array.from(new Set([...submittedTodos, ...todos]));
      // setSubmittedTodos(updatedSubmitted);
      localStorage.setItem("submittedTodos", JSON.stringify(updatedSubmitted)); //  Save to localStorage
    console.log("Submitting todos:", todos);
    toast.success("Todos submitted!");
    setSubmittedTodos(prev => [...prev, ...todos]); // Store submitted todos if needed
    // Clear all todos and errors after submission
    setTodos(['']);
    setErrors(['']);

   
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-start py-10 px-4">
      <div className="">
         
      </div>
      
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📝 My Todo List
      </motion.h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
        {/* Add Todo Input */}
        <div className="flex gap-4">
          <button
            onClick={addTodo}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold transition"
          >
            + Add More
          </button>
        </div>

        {/* Display Todos */}
        <div className="flex flex-col gap-3 mt-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet. Start adding!</p>
          ) : (
            todos.map((todo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-xl shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder={`Todo #${index + 1}`}
                  className={`flex-1 px-4 py-2 border rounded-xl ${errors[index] ? 'border-red-500' : ''}`}
                />
                <button
                  onClick={() => removeTodo(index)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ✖
                </button>
              </motion.div>
            ))
          )}
        </div>
        {/* /// */}
         
       {submittedTodos && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow-md w-full max-w-2xl">
          <ul className="text-xl font-semibold mb-2"> 
            {submittedTodos.map((todo, index) => (
              <li key={index} className="text-gray-700">• {todo}</li>
              
            ))}
          </ul>
        </div>
      )}

        {/* Submit Button */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
