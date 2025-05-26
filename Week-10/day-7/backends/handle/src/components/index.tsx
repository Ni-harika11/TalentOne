import React from 'react'
import { useState } from 'react'
const Homepage = () => {
    const [responsemsg,setResponsemsg] = useState('')
    const [statuscode,setStatuscode] = useState<number>(0)
    const handlesubmit= async()=>{
        const payload={
            name:'John Doe',
            email:'john@example.com'
        }
        try{
            const res=await fetch('http://localhost:3000/api/handle',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(payload)
            });
            const data=await res.json();
            setResponsemsg('Error sending request')
            setStatuscode(res.status)
        }
    }
    
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1> send POST request</h1>
    <button onClick={handlesubmit}>Login</button>
    {
        statuscode===200 ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">{responsemsg}</span>  
                </div>
        ) : statuscode===400 ? (        

            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{responsemsg}</span>  
                </div>
        ) : (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Info!</strong>
                <span className="block sm:inline">{responsemsg}</span>  
                </div>
        )
    }
    </div>
    </>
  )
}

export default Homepage