import React, { useState } from 'react'

const Controlled = () => {
    const [name,setName]=useState(" ")

    const handleChange=(e:any)=>{
        setName(e.target.value)
        console.log(name)
    }
  return (
    <>
    <input
    type='text'
    value={name}
    onChange={handleChange}
    />
    </>
  )
}

export default Controlled