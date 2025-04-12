import React, { useState } from 'react'

const Todo = () => {
    const [add,setAdd]=useState<string>("")
    const [tasks, setTasks] = useState<string[]>([]);
    const handleSubmit=()=>{
        if(add.trim()!==""){
            setTasks([...tasks,add])
            setAdd("");
        }
    }
    
  return (
   <>
   {/* <div>
   <input
        type="text"
        onChange={(e) => setAdd(e.target.value)}
        value={add}
      />
      <button onClick={handleSubmit}>Add Task</button>
      <ul>
        {tasks.map((task,index)=>(
            <li key={index}>{task}</li>
        ))}
      </ul>
   
   </div> */}
   <div className="flex flex-col items-center gap-4 p-6  min-h-screen">
  <div className="bg-white p-4 shadow-lg rounded-xl w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-4">Task Manager</h2>

    <div className="flex gap-2">
      <input
        type="text"
        onChange={(e) => setAdd(e.target.value)}
        value={add}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
        placeholder="Enter a task..."
      />
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>

    <ul className="mt-4 space-y-2">
      {tasks.map((task, index) => (
        <li 
          key={index} 
          className="bg-gray-200 p-2 rounded-lg text-gray-700"
        >
          {task}
        </li>
      ))}
    </ul>
  </div>
</div>

   </>
  )
}

export default Todo