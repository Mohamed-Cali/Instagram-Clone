import { useSession } from 'next-auth/react';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';


function ProfileInfo() {
    const {data: session } = useSession();
  return (
    <div className='m-7 h-200'>
        <div className='inline-block'>
            <img 
                src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6fd63647629fa87a/630da7b9687ae01f5d14ec36/20220830_Kante.jpg'
                // src={session?.user.image}
                alt="Profile Pic"
                className="h-20 w-20 cursor-pointer rounded-full"
            />
            {/* <p>{session?.user.name}</p> */}
            <p className='mt-10 font-semibold text-xl'>Mohamed Cali</p>
        </div>
        <div className='inline-block align-top ml-2'>
            {/* <p>{session?.user.email}</p> */}
            <h4 className='inline-block text-4xl'>mocali100</h4>
            <SettingsIcon className='text-4xl ml-5 -mt-3'/>
            <p className='h-10 w-80 mt-5 border border-gray-500 text-center font-medium text-xl pt-1'>Edit profile</p>
            
        </div>
        <div className=' h-20 w-full flex flex-row justify-between items-center mt-5 border-t border-b border-gray-300 text-center'>
            <div className='ml-24'>
                <span className='block font-semibold'>38</span>
                <span className='text-gray-400'>posts</span>
            </div>
            <div >
                <span className='block font-semibold'>257</span>
                <span className='text-gray-400'>followers</span>
            </div>
            <div className='mr-24'>
                <span className='block font-semibold'>375</span>
                <span className='text-gray-400'>following</span>
            </div>

        </div>
    </div>
    
    
  )
}

export default ProfileInfo