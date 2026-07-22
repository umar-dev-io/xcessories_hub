"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-amber-500">
      <ul className="flex justify-between px-6 py-4">
        <li className="text-white font-bold uppercase">
          <Link href={"#"}>Quick Shop</Link>
        </li>
        <li className="border-2 border-primary-blue text-primary-blue bg-white p-1 rounded-2xl relative">
          <Link href={"#"}>
            <FaShoppingCart />
            <span className="w-[20] h-[20] absolute bg-red-600 text-white px-1.5 rounded-full text-sm left-4 bottom-3 flex justify-center items-center">
              <h1>{count}</h1>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
