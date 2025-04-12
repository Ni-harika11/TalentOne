import React from "react";

const ProductList = () => {
  return (
    <>

<section className="text-gray-600 body-font">
  <div className="container mx-auto px-5 py-24">
    <div className="flex flex-wrap justify-center gap-6"> 
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <a href="./ProductDetails.html" className="block relative h-64 rounded overflow-hidden">
            <img 
              alt="ecommerce" 
              className="object-cover object-center w-full h-full block" 
              src="https://dummyimage.com/600x600" 
            />
          </a>
          <div className="mt-4 text-center"> {/* Center text properly */}
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Product Name</h2>
            <p className="mt-1 text-xl font-semibold text-indigo-600">$19.99</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <a href="./ProductDetails.html" className="block relative h-64 rounded overflow-hidden">
            <img 
              alt="ecommerce" 
              className="object-cover object-center w-full h-full block" 
              src="https://dummyimage.com/600x600" 
            />
          </a>
          <div className="mt-4 text-center"> {/* Center text properly */}
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Product Name</h2>
            <p className="mt-1 text-xl font-semibold text-indigo-600">$19.99</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <a href="./ProductDetails.html" className="block relative h-64 rounded overflow-hidden">
            <img 
              alt="ecommerce" 
              className="object-cover object-center w-full h-full block" 
              src="https://dummyimage.com/600x600" 
            />
          </a>
          <div className="mt-4 text-center"> {/* Center text properly */}
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Product Name</h2>
            <p className="mt-1 text-xl font-semibold text-indigo-600">$19.99</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>

    </>
  );
};

export default ProductList;
