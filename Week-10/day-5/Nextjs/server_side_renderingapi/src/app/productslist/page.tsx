"use client"
import React, { useEffect, useState } from 'react'

const Productslist = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      console.log(data)
      setProducts(data.products)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  )
}

export default Productslist
