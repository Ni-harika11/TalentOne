import ProductDetails from '@/components/Productsdetails'
import React from 'react'

const page = async ({params}) => {
  const {id} = await await params
  return (
    <div>
      
      <ProductDetails 
       id={id as string}/>
    </div>
  )
}

export default page