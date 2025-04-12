import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [fullName,setFullName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();

        const newUser={fullName,email,password}
        try{
            const response=await fetch("http://localhost:3000/user",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newUser)
            });
            if(response.ok){
                console.log("user added succesfully")
                setFullName("")
                setEmail("")
                setPassword("")
            }else{
                console.log("Error ading user")
            }
        }catch(error){
            console.log(error)
        }

        setFullName(fullName)
        setEmail(email)
        setPassword(password)

        console.log(fullName)
        console.log(email)
        console.log(password)
      
    }
    
  return (
    <>
    <div className="flex min-h-screen items-center justify-center  ">
    <div className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Signup</h2>
        <form className="space-y-4">
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                autoComplete="name"
            />
            <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="email"
            />
            <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="new-password"
            />
            <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Sign Up
            </button>
            <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
        </form>
    </div>
</div>

    </>
  )
}

export default Signup