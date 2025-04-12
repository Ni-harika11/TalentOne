import React, { useRef, useState } from 'react'

const Unctrolled = () => {
    const [item,setItem]=useState("")
    const inputRef=useRef(null)
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log(inputRef.current.value)

    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        ref={inputRef}
        />
        <button type='submit'>Submit</button>
    </form>
    </>
 
)
}

export default Unctrolled