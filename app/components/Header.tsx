import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between px-6 items-center p-4 bg-zinc-900  ">
      <Link href="/">
        <h1 className=" font-extralight text-zinc-400 text-2xl ">
          <FaRegArrowAltCircleLeft />
        </h1>
      </Link>
      <h1 className=" font-extralight text-zinc-400 text-2xl ">
        PRODUCTS CATALOG
      </h1>
    </nav>
  );
};

export default Header;
