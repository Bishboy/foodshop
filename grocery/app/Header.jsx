"use client";
import { Button } from "@/components/ui/button";
import {
  AlignCenterHorizontal,
  CircleUserRound,
  LayoutGrid,
  Search,
  ShoppingBag,
} from "lucide-react";
import { foodList } from "./_utils/data";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import GlobalApi from "./_utils/GlobalApi";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const [isSticky , setIsticky] = useState(false)
  const isLoggedin = sessionStorage.getItem('jwt')? true:false
  const router = useRouter()
  
    const onSignOut = () => {
      sessionStorage.clear();
      router.push("/sign-in");
    };

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsticky(true)
      } else{
        setIsticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  })
  
 

  // const getCategoryList= () => {
  //   GlobalApi.getCategory().then(resp => {
  //     console.log('categoy', resp.data.data);

  //     // setCategoryList(resp.data.data)

  //   })
  // }

  // useEffect(()=>{
  //   getCategoryList()

  // },[])

  return (

    <div
      className={` p-2  px-3 shadow-md  flex w-full bg-white z-50 justify-between ${
        isSticky
          ? "sticky top-0 left-0 right-0 border  bg-green-100 duration-300"
          : ""
      }`}
    >
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
            className=""
          />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex hidden   items-center gap-2 border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browswe Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {foodList.map((category, index) => (
              <Link
                key={category.id}
                href={`/productsCategory/${category.name}`}
              >
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    {
                      <Image
                        src={category.photo}
                        alt="logo"
                        width={23}
                        height={23}
                        className=""
                      />
                    }

                    <h2>{category.name}</h2>
                  </div>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className=" items-center border rounded-full p-2 gap-3 px-5 hidden md:flex">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        {!isLoggedin ? (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserRound className="w-12 h-12 bg-green-100 text-primary  rounded-full p-2 cursor-pointer " />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>onSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;
