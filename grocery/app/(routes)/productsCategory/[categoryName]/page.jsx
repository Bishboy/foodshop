import React from "react";
import { allList } from "@/app/_utils/data";
import Image from "next/image";
import TopCategoryList from "../_components/TopCategoryList";
import { foodList } from "@/app/_utils/data";
import RealProductList from "@/app/_components/RealProductList";

async function ProductCategory({ params }) {
  const productLists = allList.filter(
    (product) => product.category === params.categoryName
  );

  return (
    <div>
      <h2 className="p-4 bg-primary font-bold text-3xl text-center text-white">
        {params.categoryName}
      </h2>
      <TopCategoryList foodList={foodList} selectedCategory={params.categoryName} />
      <div className="md:p-10 p-5">
        <RealProductList productLists={productLists} />
      </div>
    </div>
  );
}

export default ProductCategory;
