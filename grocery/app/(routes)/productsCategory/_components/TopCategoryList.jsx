import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function TopCategoryList({ categoryList, selectedCategory }) {
  return (
    <div>
      <div className="flex mt-2 overflow-auto gap-5 mx-7 md:mx-20 justify-center py-2">
        {categoryList.map((items, index) => (
          <Link
            href={`/productsCategory/${items.attributes.name}`}
            key={index}
            className={`flex  flex-col shadow items-center p-3 rounded-lg  bg-green-50 gap-2 group cursor-pointer hover:bg-green-200 w-[150px] min-w-[100px] ${
              selectedCategory === items.attributes.name &&
              "bg-green-600 text-white "
            }`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${items?.attributes?.icon?.data[0]?.attributes?.url}`}
              alt="photo"
              width={50}
              height={50}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2
              className={`text-green-800 hover:text-white ${
                selectedCategory === items.attributes.name && " text-white "
              }`}
            >
              {items.attributes.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopCategoryList