import Link from "next/link";
import React from "react";

const Header = () => {
  return (
     
      <header className="row-start-1 px-10 w-full flex justify-between items-center py-4 border-b bg-blue-500 text-white">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">MyStore</h1>
          <nav className="flex gap-6 text-sm sm:text-base">
            <Link
              href="#about"
              className="hover:text-white hover:underline transition"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-white hover:underline transition"
            >
              Contact
            </Link>
            <Link
              href="#shop"
              className="hover:text-white hover:underline transition"
            >
              Shop
            </Link>
            {/* <Link
            href="#login"
             className="hover:text-white hover:underline transition"
            >login/register</Link> */}
          </nav>
        </div>
      </header>
     
  );
};

export default Header;
