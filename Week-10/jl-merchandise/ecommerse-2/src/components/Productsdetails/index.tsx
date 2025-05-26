"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = ({ id }: { id: string }) => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (id) {
      // fetch(`https://fakestoreapi.com/products/${id}`)
      fetch(`http://localhost:5000/api/products/${id}`) // Fixed the template literal syntax)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const handleAddToCart = () => {
    router.push("/login");
  };
  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-8 p-6">
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Details */}
        {/* <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
        <p className="text-gray-500 mt-4">Category: {product.category}</p>
        <p className="text-gray-500 mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
  
        <button className="mt-6 w-fit px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Add to Cart
        </button><button className='mt-6 w-fit px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition'>Buy Now</button>
      </div> */}
        <div className="flex-1 flex flex-col justify-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 leading-relaxed text-base mb-3">
            {product.description}
          </p>

          <div className="text-sm text-gray-500 space-y-1">
            <p>
              Category: <span className="capitalize">{product.category}</span>
            </p>
            <p>
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleAddToCart}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={handleAddToCart}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
