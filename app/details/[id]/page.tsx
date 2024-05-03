import React, { use } from "react";

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("error", error);
  }
};
const page = ({ params }: any) => {
  const products = use(fetchData());
  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center bg-zinc-200 gap-4">
      <p className=" text-3xl text-zinc-700 font-semibold">
        {products[params.id - 1].title}
      </p>

      <p className=" text-2xl text-zinc-700 text-center">
        {products[params.id - 1].description}
      </p>
    </div>
  );
};

export default page;
