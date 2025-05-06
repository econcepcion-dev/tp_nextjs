'use client'
import { useSearchParams  } from 'next/navigation';
import { Client, Account } from 'appwrite';
import { useState, useEffect  } from 'react';
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

 //export const config = {
 //   endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
 //   projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
 //   platform: "com.tp",
 // };

   const client = new Client();

 client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6776d5e9000d4782fcbb')

//.setPlatform(config.platform!);

 const account = new Account(client);

interface RecoveryQuery {
  userId?: string;
  secret?: string;
}

const AppSignIn = ()  => {
  //const searchParams = useSearchParams();
  //const userId = searchParams.get("userId");
  //const secret = searchParams.get("secret");



  const queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret')

    return (
   
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <div className="w-full max-w-sm  p-6 bg-white rounded-3xl shadow-lg">
       
        {/*<p>
          parameter1 is userId value is: {userId}
        </p>
        <p>
          parameter1 is secret: {secret}
        </p>
       */}
        <h1 className="text-3xl font-rubik-bold text-black-300 text-center mt-2">TRIPELAGO</h1>
           <div className="flex justify-center mb-6">
             <Image src="/onboarding_tp.png" alt="" width={150} height={150} />
           </div>
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome</h3>
      </div>
      </div>
  
  );
}

export default AppSignIn;
