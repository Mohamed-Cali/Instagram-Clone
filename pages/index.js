import { useSession } from 'next-auth/react';
import React from 'react'
import Home from './Home'
import ProfilePage from './ProfilePage';

function index() {
    const { data: session } = useSession();

  return (
    <div>
        <Home />
        
        
    </div>
  )
}

export default index