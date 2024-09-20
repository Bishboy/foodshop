'use client'
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const jwt = sessionStorage.getItem("jwt");
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);

  useEffect(() => {
    getCartItem();
  }, []);

  const getCartItem = async () => {
    if (user && user.id) {
      const cartListItems_ = await GlobalApi.getCartItems(user.id, jwt);
      console.log(cartListItems_);
      setTotalCartItem(cartListItems_?.length);
      setCartItemList(cartListItems_);
    } else {
      console.error("User is not logged in or user object is null");
    }
  };
  return (
    <div>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
        Checkout
      </h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 gap-4 lg:grid-cols-3 py-8">
        <div className="lg:col-span-2 mx-20">
          <h2 className="">Billing Details </h2>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input placeholder="Phone" type="number" />
            <Input placeholder="Zip" type="number" />
          </div>
          <div className="mt-3">
            <Input placeholder="Address" type="text" />
          </div>
        </div>

        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">
            Total Cart ({totalCartItem})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold items-center flex justify-between">
              SubTotoal : <span>$250</span>
            </h2>
            <hr />
            <h2 className="flex justify-between items-center">
              Delivery : <span>$15:00</span>
            </h2>
            <h2 className="flex justify-between items-center">
              Tax (9%) : <span>$250:00</span>
            </h2>
            <hr />
            <h2 className="font-bold flex justify-between items-center">
              Total : <span>$350:00</span>
            </h2>
            <Button>
              Payment <ArrowBigRight />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
