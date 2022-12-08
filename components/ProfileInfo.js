import { useSession } from 'next-auth/react';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';


function ProfileInfo() {
    const {data: session } = useSession();
  return (
    <div className='m-7 h-200 flex flex-col content-center max-w-5xl mx-5 lg:mx-auto"'>
        <div className=''>
            <div className='inline-block'>
                <img 
                    src={session?.user.image}
                    alt="Profile Pic"
                    className="h-21 w-21 cursor-pointer rounded-full cursor-pointer"
                />
            
                <p className='mt-10 font-semibold text-xl'>{session?.user.name}</p>
            </div>
            <div className='inline-block align-top ml-2 '>
                <h4 className='inline-block md:text-4xl sm:text-2xl'>{session?.user.email}</h4>
                <SettingsIcon className='text-4xl ml-5 -mt-3 cursor-pointer'/>
                <p className='h-10 w-80 mt-5 border border-gray-500 text-center font-medium text-xl pt-1 cursor-pointer'>Edit profile</p>
                
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