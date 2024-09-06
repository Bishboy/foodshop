import React from "react";
import ProductItems from "./ProductItems";
import { productList } from "../_utils/data";

function ProductList({ productLsit }) {
  return (
    <div className="mt-10 ">
      <h2 className=" text-primary font-bold text-2xl ">Popular products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center mt-5 ">
        {productList.map((items, index) => (
          <ProductItems items={items} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
