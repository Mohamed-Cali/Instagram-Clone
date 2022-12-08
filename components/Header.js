import Image from "next/image"
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { modalState } from "../atoms/modalAtoms";
import { useRecoilState } from 'recoil'
import { useEffect, useRef, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';


function Header () {
    const {data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    const [showPopUp, setShowPopUp] = useState(false)

    let ref = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!ref?.current?.contains(e.target)){
            setShowPopUp(false);
            console.log(ref.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });


    return (
        <div className="relative">
            <div className="shadow-sm border-b bg-white sticky top-0 z-50">
                <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                
                    <div onClick={() => router.push('/')}
                        className="relative hidden lg:inline-grid w-24 cursor-pointer" >
                        <Image 
                            src='https://links.papareact.com/ocw'
                            layout='fill'
                            objectFit="contain"
                        />

                    </div>
                    <div onClick={() => router.push('/')}
                        className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer" >
                        <Image 
                            src='https://links.papareact.com/jjm'
                            layout='fill'
                            objectFit="contain"
                        />

                    </div>
                    <div className="max-w-xs">
                        <div className="relative mt-1 p-3 rounded-md">
                            <div className="absolute -inset-y-0 pl-3 flex items-center">
                                <SearchIcon className="h-5 w-5 text-gray-500" />
                            </div>
                            <input 
                                className="bg-gray-50 block w-full pl-10 sm:text-sm 
                                border-gray-300 rounded-md focus:ring-black 
                                focus:border-black"
                                type='text' 
                                placeholder="Search"                  
                            /> 
                            </div>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <HomeIcon onClick={() => router.push('/')} className="navBtn"/>
                        <MenuIcon className="h-8 md:hidden cursor-pointer"/>

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45"/>
                                <div className="absolute -top-2 -right-2 text-xs h-5 w-5
                                bg-red-500 rounded-full flex items-center justify-center
                                animate-pulse text-white">
                                    7
                                </div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="h-8 cursor-pointer md:navBtn"/>
                            <UserGroupIcon className="navBtn"/>
                            <HeartIcon className="navBtn"/>
                            <img 
                                
                                onClick={() => setShowPopUp(!showPopUp)}
                                src={session.user.image}
                                alt="Profile Pic"
                                className="h-10 w-10 cursor-pointer rounded-full"
                            />
                            
                        </>
                    ): (
                        <button onClick={signIn}>Sign In</button>
                    )}
                    </div>
                    
                </div>
            </div>
            {showPopUp ? (
                <div ref={ref} className="-mt-1 fixed shadow-md rounded-lg right-0 z-50 inline-block h-40 w-64 border
                     border-white bg-white flex flex-col justify-between xl:mr-16 2xl:mr-52 ">
                    <div className="ml-3 mt-3 cursor-pointer">
                        <AccountCircleIcon />
                        <p onClick={() => router.push('/ProfilePage')} className="inline-block ml-3 text-lg">Profile</p>
                    </div>
                    <div className="ml-3 cursor-pointer">
                        <SettingsIcon />
                        <p className="inline-block ml-3 text-lg ">Settings</p>
                    </div>
                    <div className="border-t border-gray-500 pb-2 cursor-pointer"
                        onClick={signOut}
                    >
                        <p className="ml-5 mt-3">Log Out</p>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default Header


