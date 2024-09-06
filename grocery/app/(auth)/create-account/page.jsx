'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input, } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GlobalApi from '@/app/_utils/GlobalApi';


const CreateAccount = () => {
    const [username, SetUserName]=useState('')
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const onCreateAccount = () => {
        GlobalApi.register(username,email,password).then(resp=>{
            console.log(resp.data.user);
            console.log(resp.data.jwt);      
        })

    }

  return (
    <div className="flex items-baseline justify-center my-10 ">
      <div className="flex flex-col items-center p-10 bg-slate-100 border-gray-200">
        <Image src="/logo.png" alt="image" width={200} height={200} />
        <h2 className="font-bold text-2xl">Create an Account</h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Create an account
        </h2>
        <div className="w-full flex flex-col gap-5 mt-2">
          <Input
            placeholder="Username"
            onChange={(e) => SetUserName(e.target.value)}
          />
          <Input
            placeholder="name@example.com"
            onChange={(e) => SetEmail(e.target.value)}
            type='email'
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => SetPassword(e.target.value)}
          />
          <Button disabled={!(username||email||password)} onClick={() => onCreateAccount()}>Create an Account</Button>
          <p>
            Already have an Account?{" "}
            <Link className="text-blue-500" href={"/sign-in"}>
              Click here to sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount