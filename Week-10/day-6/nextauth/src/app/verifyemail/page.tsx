'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const VerifyEmailPage = () => {
    // const router=useRouter()


    const [token,setToken]=useState("")
    const [verified,setVerified]=useState(false)
    const [error,setError]=useState(false)

    const verifyUserEmail=async()=>{
        try{
            await axios.post("api/users/verifyemail",{token})
            setVerified(true)
        }catch(error:any){
            setError(true)
            setError(false)
            console.log(error.response.data)
        }
    }
    useEffect(()=>{
     const  urltoken= window.location.search.split("=")[1]
     setToken(urltoken || "") //approach1

    //  const {query}=router; //or /approach 2
    //  const urltokenTwo=query.token

    },[ ])
    useEffect(()=>{
        if(token.length>0)
            verifyUserEmail()
    },[token]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Verify Email</h1>
            <h2 className="mb-6 text-gray-600">
              {token ? `Token: ${token}` : "No token"}
            </h2>
    
            {verified && (
              <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
                <h2 className="font-semibold">Verified!</h2>
                <Link href="/login" className="text-blue-600 underline">
                  Go to Login
                </Link>
              </div>
            )}
    
            {error && (
              <div className="bg-red-100 text-red-800 p-4 rounded">
                <h2 className="font-semibold">Error verifying email</h2>
              </div>
            )}
          </div>
        </div>
      );
}

export default VerifyEmailPage;