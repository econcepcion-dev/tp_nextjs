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

const ChangePassword = ()  => {
  //const searchParams = useSearchParams();
  //const userId = searchParams.get("userId");
  //const secret = searchParams.get("secret");

  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);  // To toggle visibility for new password
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);  // To toggle visibility for repeat password

  const queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    // Simulate an API call or password change logic
    try {
      // Here you would call your API to update the password
      // For example, integrate Appwrite or other backend logic
    //  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an async operation
      const response  =   await account.updateVerification(userId as string , secret as string );
      setSuccessMessage('Email verified successfully!');
      console.log("Email verified successfully", response);
    } catch (error) {
      alert('Error verifiying email;.');
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
   
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <div className="w-full max-w-sm  p-6 bg-white rounded-3xl shadow-lg">
       
        <p>
          parameter1 is userId value is: {userId}
        </p>
        <p>
          parameter1 is secret: {secret}
        </p>
       
        <h1 className="text-3xl font-rubik-bold text-black-300 text-center mt-2">TRIPELAGO</h1>
           <div className="flex justify-center mb-6">
             <Image src="/onboarding_tp.png" alt="" width={150} height={150} />
           </div>
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Email Verification</h3>
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={isSubmitting} 
         className="bg-yellow-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
            {isSubmitting ? 'Changing...' : 'Email Verify'}
          </button>

        </form>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </div>
      </div>
  
  );
}

export default ChangePassword;
