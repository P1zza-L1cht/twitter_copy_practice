import Image from 'next/image';
import SidebarMenu from './SidebarMenu';
import {
  HomeIcon
} from "@heroicons/react/solid"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const {data: session} = useSession();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        {/* twitter logo */}
          <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image
              width="50"
              height="50"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="logo"
            />
          </div>

        {/* Menu */}
        <div className='mt-4 mb-2.5 xl:items-start'>
          <SidebarMenu  text="Home" Icon={HomeIcon} active />
          <SidebarMenu  text="Explore" Icon={HashtagIcon} />
          {session && (
            <>
              <SidebarMenu  text="Notifications" Icon={BellIcon} />
              <SidebarMenu  text="Messages" Icon={InboxIcon} />
              <SidebarMenu  text="BookMarks" Icon={BookmarkIcon} />
              <SidebarMenu  text="Lists" Icon={ClipboardIcon} />
              <SidebarMenu  text="Profile" Icon={UserIcon} />
              <SidebarMenu  text="More" Icon={DotsCircleHorizontalIcon} />
            </>
          )}
        </div>

        {/* Button */}

        {session ? (
          <>
           <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

           {/* Mini-profile */}
   
           <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
             <img 
                onClick={signOut}
                src={session.user.image} 
                alt="user-iamge"
                className="h-10 w-10 rounded-full"
             />
             <div className='leading-5 hidden xl:inline ml-2'>
               <h4 className='font-bold '>{session.user.name}</h4>
               <p className='text-grey-500'>@{session.user.username}</p>
             </div>
             <DotsHorizontalIcon  className='h-5 xl:ml-8'/>
           </div>
          </>
        ) :(
          <button 
          onClick={signIn}
            className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'
          >
            Sign in
          </button>
        )}
    </div>
  );
}
