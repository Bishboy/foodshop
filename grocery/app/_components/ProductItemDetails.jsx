"use client";
import { Button } from "@/components/ui/button";
import { LoaderCircle, LoaderIcon, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { toast } from "sonner";
import { UpdateCartContext } from "../_context/UpdateCart";

function ProductItemDetails({ items }) {
  const [ptotalPrice, setptotalPrice] = useState(
    items.attributes.sellingPrice ? items.attributes.sellingPrice : items.attributes.price
  );
  const [quantity, setQuantity] = useState(1);
  const jwt = sessionStorage.getItem('jwt')
  const user = JSON.parse(sessionStorage.getItem('user'))
  const {updateCart, setUpdateCart } = useContext(UpdateCartContext)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const addToCart = () => {
    setLoading(true)
    if(!jwt){
      router.push('/sign-in')
      setLoading(false)
      return;
    }

    const data = {
      data:{
        quantity: quantity,
        amount: (quantity * ptotalPrice).toFixed(2),
        product: items.id,
        users_permissions_user:user.id,
        userId:user.id

      }
    };
      console.log(data);
      

    GlobalApi.addToCart(data,jwt).then(resp=>{
      console.log(resp);
      toast('Added to Cart')
      setUpdateCart(!updateCart)
      setLoading(false)
      
    },(e)=>{
      toast('error while adding to cart')
      setLoading(false)
    })
  }

  return (
    <div
      key={items.id}
      className="grid grid-cols-1 md:grid-cols-2 md:p-7  p-5 bg-white "
    >
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          items.attributes.image.data[0].attributes.url
        }
        alt="images"
        width={300}
        height={300}
        className="bg-slate-200 md:p-5 p-3 md:h-[320px] w-[150px] mx-auto  md:w-[300px] object-contain rounded-lg shadow-md"
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">{items.attributes.name}</h1>
        <p className="text-sm font-semibold text-gray-500">
          {items.attributes.description}
        </p>
        <div className="flex items-center  gap-3">
          {items.attributes.sellingPrice && (
            <h2 className="font-bold text-3xl">
              ${items.attributes.sellingPrice}
            </h2>
          )}
          <h2
            className={`font-bold ${
              items.attributes.sellingPrice &&
              "line-through text-3xl text-gray-400"
            }`}
          >
            ${items.attributes.price}
          </h2>
        </div>
        <h2 className="font-semibold text-lg">
          Quantity( {items.attributes.quantity} )
        </h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2 flex gap-10 items-center border px-3">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                className="font-bold hover:bg-red-700 hover:text-white px-3 rounded-lg text-lg text-red-800"
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="font-bold text-green-800 text-lg hover:bg-green-700 hover:text-white px-3 rounded-lg"
              >
                +
              </button>
            </div>
            <h1 className="font-bold">
              {" "}
              = ${(quantity * ptotalPrice).toFixed(2)}
            </h1>
          </div>

          <Button
            onClick={() => addToCart()}
            className="flex items-center gap-2"
            disabled={loading}
          >
            <ShoppingBasket />
            {loading ? <LoaderCircle className="animate-spin" /> : "Add to Cart"}
          </Button>
        </div>
        <h2>
          <span className="font-bold text-green-700">Category:</span>{" "}
          {items.attributes.categories.data[0].attributes.name}
        </h2>
      </div>
    </div>
  );
}

export default ProductItemDetails;
