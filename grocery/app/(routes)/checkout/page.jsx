'use client'
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const jwt = sessionStorage.getItem("jwt");
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    zip: '',
    address:'',
  })
  const [usename, setUsername] = useState('');
  const [email, Setemail] = useState('');
  const [phone, setPhone] =useState(0)
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState()

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData, [name]:value
    })
  }

  useEffect(() => {
    if(!jwt){
      router.push('/sign-in')
    }
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

  useEffect(() => {
    let total = 0;
    cartItemList.forEach((element) => {
      total = total + element.amount;
    });
      setTotalAmount((total * 0.9 + 15).toFixed(2));
    setSumTotal(total.toFixed(2));
  }, [cartItemList]);

  const caculateTotalAmount = () =>{
    const totalAmount = sumTotal * 0.9 + 15;
    return totalAmount.toFixed(2)
  }

  const onApprove = (data) => {
    console.log(data);
    
  }

  return (
    <div>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
        Checkout
      </h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 gap-4 lg:grid-cols-3 py-8">
        <div className="lg:col-span-2 mx-20">
          <h2 className="">Billing Details </h2>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Name"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Phone"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              placeholder="Zip"
              type="number"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Input
              placeholder="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">
            Total Cart ({totalCartItem})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold items-center flex justify-between">
              SubTotoal : <span>{sumTotal}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between items-center">
              Delivery : <span>$15.00</span>
            </h2>
            <h2 className="flex justify-between items-center">
              Tax (9%) : <span>{(totalCartItem * 0.9).toFixed(2)}</span>
            </h2>
            <hr />
            <h2 className="font-bold flex justify-between items-center">
              Total : <span>{caculateTotalAmount()}</span>
            </h2>
            {
                <PayPalButtons
                style={{ layout: "horizontal" }}
                onApprove={onApprove}
                createOrder={(data, action) => {
                  return action.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalAmount,
                          currency_code: "USD",
                        },
                      },
                    ],
                  });
                }}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
