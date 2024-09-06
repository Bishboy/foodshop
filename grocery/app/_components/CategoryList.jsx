import React from 'react'
import { foodList } from '../_utils/data'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList() {
  return (
    <div className="mt-5">
      <h2 className="text-primary font-bold text-2xl">Shop by Category</h2>

      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-2 
        gap-5"
      >
        {foodList.map((items, index) => (
          <Link
            href={`/productsCategory/${items.name}`}
            key={items.id}
            className="flex flex-col shadow items-center p-3 rounded-lg  bg-green-50 gap-2 group cursor-pointer hover:bg-green-200"
          >
            <Image
              src={items.photo}
              alt="photo"
              width={50}
              height={50}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-green-800">{items.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList