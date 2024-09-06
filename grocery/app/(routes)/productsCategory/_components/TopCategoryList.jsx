import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function TopCategoryList({ foodList, selectedCategory }) {
  return (
    <div>
      <div className="flex mt-2 overflow-auto gap-5 mx-7 md:mx-20 justify-center py-2">
        {foodList.map((items, index) => (
          <Link
            href={`/productsCategory/${items.name}`}
            key={items.id}
            className={`flex  flex-col shadow items-center p-3 rounded-lg  bg-green-50 gap-2 group cursor-pointer hover:bg-green-200 w-[150px] min-w-[100px] ${selectedCategory === items.name && 'bg-green-600 text-white '}`}
          >
            <Image
              src={items.photo}
              alt="photo"
              width={50}
              height={50}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className={`text-green-800 hover:text-white ${selectedCategory === items.name && ' text-white '}`}>{items.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopCategoryList