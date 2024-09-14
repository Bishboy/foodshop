import React from 'react'
import RealProductItems from './RealProductItems';
const RealProductList = ({ productLists }) => {
  return (
    <div className="mt-10 ">
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center mt-5 ">
        {productLists.map((items, index) => (
          <RealProductItems items={items} />
        ))}
      </div>
    </div>
  );
};

export default RealProductList