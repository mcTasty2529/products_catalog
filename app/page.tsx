import React, { use } from "react";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("error", error);
  }
};
const page = () => {
  const products = use(fetchData());

  return (
    <>
      <div className="flex flex-wrap items-center justify-center p-4">
        {products.map((product: any) => (
          <Link href={`/details/${product.id}`}>
            <ProductCard key={product.id} data={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
