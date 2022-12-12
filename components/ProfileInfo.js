import { useSession } from 'next-auth/react';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';


function ProfileInfo() {
    const {data: session } = useSession();
  return (
    <div className='m-7 h-200 flex flex-col content-center max-w-5xl mx-5 lg:mx-auto"'>
        <div >
            <div className='flex flex-row  sm:inline-block '>
                <img 
                    src={session?.user.image}
                    alt="Profile Pic"
                    className="h-21 w-21 rounded-full cursor-pointer"
                />
                <div className='align-top pl-5 sm:mt-10 font-semibold text-xl'>
                <p >{session?.user.name}</p>
                </div>
            </div>
            <div className='hidden sm:inline-block align-top ml-2 '>
                <h4 className='hidden sm:inline-block md:text-3xl sm:text-2xl'>{session?.user.email}</h4>
                <div className='hidden sm:inline-block text-4xl ml-5 cursor-pointer'>
                    <SettingsIcon className='mt-1 md:mt-0'/>
                </div>
                <p className='sm:h-10 w-80 mt-5 border border-gray-500 text-center font-medium text-xl pt-1 cursor-pointer'>Edit profile</p>
                
            </div>
        </div>
        <div className=''>
            <div className='h-20 w-full flex flex-row justify-between items-center mt-5 border-t border-b border-gray-300 text-center'>
                <div className='md:ml-24 sm:ml-0 cursor-pointer'>
                    <span className='block font-semibold cursor-pointer'>38</span>
                    <span className='text-gray-400'>posts</span>
                </div>
                <div className='cursor-pointer'>
                    <span className='block font-semibold cursor-pointer'>257</span>
                    <span className='text-gray-400'>followers</span>
                </div>
                <div className='md:mr-24 sm:mr-0 cursor-pointer'>
                    <span className='block font-semibold cursor-pointer'>375</span>
                    <span className='text-gray-400'>following</span>
                </div>

            </div>
        </div>
    </div>
    
    
  )
}

export default ProfileInfo