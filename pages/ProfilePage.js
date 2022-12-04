import { useSession } from 'next-auth/react'
import React from 'react'

import ProfileInfo from '../components/ProfileInfo'
import Header from '../components/Header';

import Photos from '../components/Photos';

function ProfilePage() {
    const { data: session } = useSession();

    console.log(session)
  return (
    <div className='flex flex-col content-center bg-gray-50 h-screen overflow-y-scroll scrollbar-hide '>
        <Header />
        {session ? (
        <div className='self-center'>
          <ProfileInfo />
          <Photos />
        </div>
        ): null}
    </div>
  )
}

export default ProfilePage