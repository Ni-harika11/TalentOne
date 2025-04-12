import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [error,setError]=useState<string>("")

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        setEmail(email)
        setPassword(password)
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
    }
  
 
  return (
    
    <>
    <div className="flex min-h-screen items-center justify-center ">
    <div className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
        <form className="space-y-4">
            <div>
            <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter email"
                onChange={(e)=>setEmail((e.target.value))} 
                value={email}
                autoComplete='email'
            />
            {error.email && <p className='error'>{error.email}</p>}
            </div>
          
              <div>
              <input 
                type="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter password"
                onChange={(e)=>setPassword((e.target.value))}
                value={password}
                autoComplete='password'
            />
              {error.password && <p className="error">{error.password}</p>}
              </div>
          
            {/* <p>if you don't have account ? <Link to="/">click me</Link></p> */}
            <button onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300">
                Submit
            </button>
            <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>        </form>
    </div>
</div>

    </>
  )
}

export default Login