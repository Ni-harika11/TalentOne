// "use client"
// import  { useState } from 'react';

// const Todo = () => {
//   const [todos, setTodos] = useState<string[]>(['']);
//   const[errors,setErrors]=useState<string[]>(['']);


//   // Handle change in a specific input
//   const handleChange = (index: number, value: string) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index] = value;
//     setTodos(updatedTodos);
//     const updatedErrors =[...errors];
//     // updatedErrors[index]
//     updatedErrors[index]=value.trim()==''?'This filed is required':'';
//     setErrors(updatedErrors)
//   };


//   // Add new input field
//   const addInput = () => {
//     setTodos([...todos, '']);
//     setErrors([...errors,'']);
//   };


//   // Remove an input field
//   const removeInput = (index: number) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     const updatedErrors=errors.filter((_,i)=>i!==index)
//     setTodos(updatedTodos);
//     setErrors(updatedErrors);
//   };


//   // Submit all todos
//   const handleSubmit = () => {
//     const newErrors=todos.map(todo=>(todo.trim()==''?'This field is required':''))
//     setErrors(newErrors)

//     const hasErrors=newErrors.some(error=>error!=='');
//     if(hasErrors) return;
//     const filtered = todos.filter((todo) => todo.trim() !== '');
//     console.log('Submitting todos:', filtered);
//     setTodos(['']); // Clear after submission
//     setErrors(['']);
//   };


//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Add Multiple Todos</h2>

//       {todos.map((todo, index) => (
//         <div key={index} className="mb-4">
//           <div className="flex items-center">
//             <input
//               type="text"
//               value={todo}
//               onChange={(e) => handleChange(index, e.target.value)}
//               placeholder={`Todo #${index + 1}`}
//               className={`border px-2 py-1 w-full rounded ${
//                 errors[index] ? 'border-red-500' : ''
//               }`}
//             />
//             <button
//               onClick={() => removeInput(index)}
//               className="ml-2 text-red-500"
//               disabled={todos.length === 1}
//             >
//               ✖
//             </button>
//           </div>
//           {errors[index] && (
//             <p className="text-red-500 text-sm mt-1">{errors[index]}</p>
//           )}
//         </div>
//       ))}

//       <button
//         onClick={addInput}
//         className="bg-green-500 text-white px-3 py-1 rounded mr-2"
//       >
//         + Add More
//       </button>

//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 text-white px-3 py-1 rounded"
//       >
//         Submit Todos
//       </button>
//     </div>
//   );
// };


// export default Todo;


'use client'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'my-todos'

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([''])
  const [errors, setErrors] = useState<string[]>([''])

  // Load from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedTodos) {
      const parsed = JSON.parse(storedTodos)
      setTodos(parsed)
      setErrors(parsed.map(() => ''))
    }
  }, [])

  // Handle input change
  const handleChange = (index: number, value: string) => {
    const updatedTodos = [...todos]
    updatedTodos[index] = value
    setTodos(updatedTodos)

    const updatedErrors = [...errors]
    updatedErrors[index] = value.trim() === '' ? 'This field is required' : ''
    setErrors(updatedErrors)
  }

  // Add a new input field
  const addInput = () => {
    setTodos([...todos, ''])
    setErrors([...errors, ''])
  }

  // Remove an input field
  const removeInput = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    const updatedErrors = errors.filter((_, i) => i !== index)
    setTodos(updatedTodos)
    setErrors(updatedErrors)
  }

  // Submit and save to localStorage
  const handleSubmit = () => {
    const newErrors = todos.map((todo) =>
      todo.trim() === '' ? 'This field is required' : ''
    )
    setErrors(newErrors)
  
    const hasErrors = newErrors.some((error) => error !== '')
    if (hasErrors) return
  
    const cleanedTodos = todos.filter((todo) => todo.trim() !== '')
  
    // Get existing todos from localStorage
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY)
    const existingTodos = existing ? JSON.parse(existing) : []
  
    // Append new todos
    const updatedTodos = [...existingTodos, ...cleanedTodos]
  
    // Save updated list
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
  
    console.log('Saved to localStorage:', updatedTodos)
  
    // Reset input fields
    setTodos([''])
    setErrors([''])
  }
  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Multiple Todos</h2>

      {todos.map((todo, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <input
              type="text"
              value={todo}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Todo #${index + 1}`}
              className={`border px-2 py-1 w-full rounded ${
                errors[index] ? 'border-red-500' : ''
              }`}
            />
            <button
              onClick={() => removeInput(index)}
              className="ml-2 text-red-500"
              disabled={todos.length === 1}
            >
              ✖
            </button>
          </div>
          {errors[index] && (
            <p className="text-red-500 text-sm mt-1">{errors[index]}</p>
          )}
        </div>
      ))}

      <button
        onClick={addInput}
        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
      >
        + Add More
      </button>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Submit Todos
      </button>
    </div>
  )
}

export default Todo
