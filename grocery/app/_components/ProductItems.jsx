import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetails from "./ProductItemDetails";

function ProductItems({ items }) {
  return (
    <div key={items.id} className="md:p-6 p-2 flex flex-col items-center justify-center gap-3 border shadow-md rounded-lg shadow-green-300 hover:scale-105  cursor-pointer transition-all ease-in-out duration-500 hover:shadow-md hover:shadow-green-500 ">
      <div className="">
        <Image
          src={items.image}
          alt="image"
          width={500}
          height={200}
          className="md:w-[9rem] h-[8rem] w-[5rem] object-contain"
        />
      </div>
      <h1 className="font-bold text-lg ">{items.name}</h1>
      <div className="flex items-center  gap-3">
        {items.selling && (
          <h2 className="font-bold text-md">${items.selling}</h2>
        )}
        <h2
          className={`font-bold ${
            items.selling && "line-through text-gray-400"
          }`}
        >
          ${items.cost}
        </h2>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-primary hover:bg-primary hover:text-white"
          >
            Add to Cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <ProductItemDetails items={items} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItems;
