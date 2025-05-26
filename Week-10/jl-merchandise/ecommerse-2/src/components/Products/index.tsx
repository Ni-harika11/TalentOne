"use client";
import  Link  from 'next/link';
import { useEffect, useState } from 'react';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage=8;  // Number of products per page

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
      fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        setAllProducts(data);
        setProducts(data); // initialize display with all products
      });
          setCurrentPage(1); // Reset to the first page after search

  }, []);
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // setAllProducts(products) // reset to all if search is empty
      setProducts(allProducts); // reset to all products
    } else {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
    }
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();

    }
  };
  const dataclear = () => {
    setSearchTerm('');+
    setProducts(allProducts); 
  }
   // Calculate the products to display on the current page
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="col-span-2 md:col-span-4 mb-4 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        
        
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            if (value.trim() === "") {
              setProducts(allProducts);
            } else {
              const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase())
              );
              setProducts(filtered);
            }
            setCurrentPage(1);
          }}
          
          onKeyDown={handleKeyDown}
        />
        {searchTerm && (
          <span
            className="text-sm text-gray-500 cursor-pointer"
            onClick={dataclear}
          >
            Clear
          </span>
        )}
         <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      {currentProducts.length === 0 ? (
        <p className="col-span-4 text-center text-gray-500">No products found.</p>
      ) : (
        currentProducts.map(product => (
          
          <div key={product._id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col">
            {/* <img
              src={product.image}
              alt={product.title}
               className="h-40 w-50 object-contain rounded-lg p-2 "
            /> */}
              <img
              src="https://static.vecteezy.com/system/resources/thumbnails/028/244/679/small/white-t-shirt-mockup-male-t-shirt-with-short-sleeves-front-back-view-realistic-3d-mock-up-ai-generated-photo.jpg"
              alt="Dummy T-shirt"
              className="h-40 w-50 object-contain rounded-lg p-2"
            />
          
            <h2 className="text-base font-semibold text-gray-800 truncate">{product.name}</h2>

          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>  
           <p className="text-blue-600 font-bold mt-1">${product.price}</p>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
            <div className="text-sm text-gray-600 mt-1 flex justify-between">
                <span>⭐ {product.rating.rate}</span>
                <span>🛒 {product.rating.count}</span>
          </div>
            <Link href={`/productsdetails/${product.id}`}  className="mt-4 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
  View Details
</Link>  
        </div>
        ))
      )}
    {/* Pagination Controls */}
    <div className="col-span-4 flex justify-center mt-4">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === index + 1
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
</div>
  );
};

export default Products;
