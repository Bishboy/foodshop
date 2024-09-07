'use client'
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

const SignIn = () => {
   const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const router = useRouter()

    useEffect(()=>{
      const jwt = sessionStorage.getItem('jwt');
      if(jwt){
        router.push('/')
      }
    },[])

    const onSignIn = () => {
      GlobalApi.login(email, password).then(resp=>{
         sessionStorage.setItem("user", JSON.stringify(resp.data.user));
         sessionStorage.setItem("jwt", resp.data.jwt);
         toast("Login successfully!");
         router.push('/')
        
      },(e)=>{
        console.log(e);
           toast("Account not found, please create an account!");
      })
    }

  return (
    <div className="flex items-baseline justify-center -[14rem] py-[14rem] ">
      <div className="flex flex-col items-center p-10 bg-slate-100 border-gray-200">
        <Image src="/logo.png" alt="image" width={200} height={200} />
        <h2 className="font-bold text-2xl">Sign in to Account</h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Sign in
        </h2>
        <div className="w-full flex flex-col gap-5 mt-2">
          <Input
            placeholder="name@example.com"
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => SetPassword(e.target.value)}
          />
          <Button
            disabled={!( email || password)}
            onClick={() => onSignIn()}
          >
            Sign In
          </Button>
          <p>
            Do not have an Account?{" "}
            <Link className="text-blue-500" href={"/create-account"}>
              Click here to sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn