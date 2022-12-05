import { useSession } from 'next-auth/react';
import React from 'react'

function Photo({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();

    return (
        <div className="bg-white my-7 border rounded-sm">
           
            <img src={img} className='object-cover w-full' alt='' />

        </div>
    )
}

export default Photo