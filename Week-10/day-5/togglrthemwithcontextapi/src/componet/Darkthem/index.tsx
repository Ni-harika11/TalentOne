import { useState,createContext, useContext } from "react"

const Darkthem = () => { 
  
    const [isDark,setDarkMode]=useState<boolean>()
    const handleDarkMode=()=>{
        setDarkMode(false)
    }
    const handleLightMode=()=>{
        setDarkMode(true)
    }
  return (
    <div>
        <h1>{isDark?"light":"dark"}</h1>
        
        <button 
        onClick={handleDarkMode}
        style={{backgroundColor:"black",color:"white" }}
        >DarkMode</button>
        <button
        onClick={handleLightMode}
        style={{backgroundColor:"white"}}
        >LightMode</button>
    </div>
  )
}

export default Darkthem


 