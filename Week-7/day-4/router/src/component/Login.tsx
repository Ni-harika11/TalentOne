import React, { useState,useContext } from 'react'
import UserContext from '../components/UserContext'
const Login = () => {
    const [name,setName]=useState<string>("")
    const [password,setPassword]=useState<string>('')
    const {setUser}:any=useContext(UserContext)
    
    const handlesubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setUser({name,password})

  }
    return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username' onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button onClick={handlesubmit}>Submit</button>        
    </div>
  )
}

export default Login