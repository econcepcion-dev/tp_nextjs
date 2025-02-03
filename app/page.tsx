'use client'
import { useSearchParams  } from 'next/navigation';
import { Client, Account } from 'appwrite';
import { useState, useEffect  } from 'react';
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

// export const config = {
//    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
//    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
//    platform: "com.tp",
//  };

   const client = new Client();

 client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6776d5e9000d4782fcbb')

//client
//.setEndpoint(config.endpoint!)
//.setProject(config.projectId!);

//.setPlatform(config.platform!);

 const account = new Account(client);

interface RecoveryQuery {
  userId?: string;
  secret?: string;
}

const ChangePassword = ()  => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);  // To toggle visibility for new password
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);  // To toggle visibility for repeat password

   useEffect(() => {
    // Check if passwords match every time the user types
    if (newPassword && repeatPassword) {
      setPasswordsMatch(newPassword === repeatPassword);
    }
  }, [newPassword, repeatPassword]);


  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'repeatPassword') {
      setRepeatPassword(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if passwords match before submitting
    if (!passwordsMatch || !newPassword || !repeatPassword) {
      alert('Please ensure passwords match and are not blank.');
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');

    // Simulate an API call or password change logic
    try {
      // Here you would call your API to update the password
      // For example, integrate Appwrite or other backend logic
    //  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an async operation
      const response  =   await account.updateRecovery(userId as string , secret as string , newPassword);
      setSuccessMessage('Password changed successfully!');
      console.log("Password updated successfully", response);
    } catch (error) {
      alert('Error changing password.');
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
   
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-rubik-bold text-black-300 text-center mt-2">TRIPELAGO</h1>
           <div className="flex justify-center mb-6">
             <Image src="/onboarding_tp.png" alt="" width={150} height={150} />
           </div>
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Change Password</h3>
        <form onSubmit={handleSubmit}>
       <div className="relative flex items-center">
        <input  
                type={isNewPasswordVisible ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                required
                className="w-full p-4 text-gray-700 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        <button 
                type="button"
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}>
                {isNewPasswordVisible ?  <EyeIcon className="h-10 w-10" /> : <EyeSlashIcon className="h-10 w-10" />}
        </button>
        </div>
        <div className="relative flex items-center">
         <input
               type={isRepeatPasswordVisible  ? "text" : "password"}
               id="repeatPassword"
               name="repeatPassword"
               value={repeatPassword}
               onChange={handlePasswordChange}
               placeholder="Repeat password"
               required
               className="w-full p-4 text-gray-700 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
         <button 
              type="button"
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}>
            {isRepeatPasswordVisible  ?  <EyeIcon className="h-10 w-10" /> : <EyeSlashIcon className="h-10 w-10" />}
          </button>

          </div>
          {!passwordsMatch && newPassword && repeatPassword && (
        <div style={{ color: 'red' }}>Passwords do not match</div>
      )}

      {passwordsMatch && newPassword && repeatPassword && (
        <div style={{ color: 'green' }}>Passwords match!</div>
      )}
        <button type="submit" disabled={isSubmitting} 
         className="bg-yellow-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
            {isSubmitting ? 'Changing...' : 'Change Password'}
          </button>

        </form>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </div>
      </div>
  
  );
}

export default ChangePassword;
