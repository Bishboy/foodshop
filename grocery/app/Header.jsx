"use client";
import { Button } from "@/components/ui/button";
import {
  AlignCenterHorizontal,
  CircleUserRound,
  LayoutGrid,
  Search,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState,useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useRouter } from "next/navigation";
import GlobalApi from "./_utils/GlobalApi";
import { UpdateCartContext } from "./_context/UpdateCart";
import CartItemsList from "./_components/CartItemsList";
import { toast } from "sonner";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const [isSticky , setIsticky] = useState(false)
  // const isLoggedin = sessionStorage.getItem('jwt')? true:false
  const isLoggedin = !!sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem('user'))
  const jwt = sessionStorage.getItem("jwt");
  const [totalCartItem,  setTotalCartItem] =useState(0)
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
  const [cartItemList, setCartItemList] = useState([])
  const [sumTotal, setSumTotal] = useState(0);

  const router = useRouter()
    const onSignOut = () => { sessionStorage.clear();
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
  
   const getCartItem = async() => {
    if (user && user.id) {
      const cartListItems_ = await GlobalApi.getCartItems(user.id, jwt);
      console.log(cartListItems_);
      setTotalCartItem(cartListItems_?.length);
      setCartItemList(cartListItems_);
    } else {
      console.error("User is not logged in or user object is null");
    }
    
   }

  const getCategoryList = async() => {
    try {
      const response = await GlobalApi.getCategory()
      setCategoryList(response.data.data)
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  }

  useEffect(()=>{
    getCategoryList()
  },[])

  useEffect(()=>{
    getCartItem()
  },[updateCart])

   const onDeleteItem = (id) => {
      GlobalApi.deleteCartItems(id,jwt).then(resp=> {
        toast('Item removed!')
        getCartItem();
      })
   }
   

    useEffect(() => {
      let total = 0;
      cartItemList.forEach((element) => {
        total = total + element.amount;
      });
      setSumTotal(total.toFixed(2));
    }, [cartItemList]);

  return (
    <div
      className={` p-2 px-3 shadow-md   flex w-full bg-white z-50 justify-between ${
        isSticky
          ? "sticky top-0 left-0 right-0 border bg-green-100 duration-300"
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
            <h2 className="md:flex hidden items-center gap-2 border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browswe Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <Link
                key={index}
                href={`/productsCategory/${category.attributes.name}`}
              >
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    {
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category?.attributes?.icon?.data[0]?.attributes?.url}`}
                        unoptimized={true}
                        alt="logo"
                        width={23}
                        height={23}
                        className=""
                      />
                    }

                    <h2>{category?.attributes?.name}</h2>
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
        <Sheet>
          <SheetTrigger>
            <h2 className="flex gap-2 items-center text-lg">
              <ShoppingBasket className="h-7 w-7" />{" "}
              <span className="bg-primary text-white  px-2 rounded-full">
                {totalCartItem}
              </span>
            </h2>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="bg-primary mt-4 text-white font-bold text-lg p-4 text-center ">
                My Cart
              </SheetTitle>
              <SheetDescription>
                <CartItemsList
                  cartItemList={cartItemList}
                  onDeleteItem={onDeleteItem}
                />
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <div className="absolute w-[90%] bottom-6 flex flex-col">
                <h2 className="text-lg font-bold flex justify-between">
                  SumTotal <span>{sumTotal}</span>
                </h2>
                <Button
                  onClick={() => router.push(jwt ? "/checkout" : "/sign-in")}
                >
                  Checkout
                </Button>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>

        {!isLoggedin ? (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserRound className="w-11 h-11 bg-green-100 text-primary  rounded-full p-2 cursor-pointer " />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/checkout'>My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSignOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;
