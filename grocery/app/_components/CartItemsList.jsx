import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const CartItemsList = ({ cartItemList, onDeleteItem }) => {
  

  return (
    <div>
      <div className="h-[500px] overflow-auto">
        {cartItemList.map((cart, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-2 mb-5 "
          >
            <div className="flex  gap-2 items-center cursor-pointer">
              <p className="font-bold text-lg">Price: ${cart.amount}</p>
              <p className="font-bold text-lg">Quantity: {cart.quantity}</p>
              <h2>{cart.name}</h2>
            </div>
            <Trash2Icon
              onClick={() => onDeleteItem(cart.id)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CartItemsList;
