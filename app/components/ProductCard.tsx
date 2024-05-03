"use client";

import Image from "next/image";
import React from "react";

const ProductCard = (props: any) => {
  return (
    <>
      <div className="bg-zinc-200 w-[150px] h-[200px] m-2 rounded-md pt-2 flex flex-col items-center justify-between ">
        <div className=" text-center text-zinc-700v p-1">
          {props.data.title}
        </div>
        <Image
          src={props.data.images[0]}
          alt="productImage"
          width={70}
          height={70}
        />
        <div className="bg-zinc-900 text-zinc-100 text-right p-1 w-full rounded-b-md">
          Price: {props.data.price}$
        </div>
      </div>
    </>
  );
};

export default ProductCard;
