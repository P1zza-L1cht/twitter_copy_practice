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


export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

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
          <SidebarMenu  text="Notifications" Icon={BellIcon} />
          <SidebarMenu  text="Messages" Icon={InboxIcon} />
          <SidebarMenu  text="BookMarks" Icon={BookmarkIcon} />
          <SidebarMenu  text="Lists" Icon={ClipboardIcon} />
          <SidebarMenu  text="Profile" Icon={UserIcon} />
          <SidebarMenu  text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        {/* Button */}

        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

        {/* Mini-profile */}

        <div className=" text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <img 
            src="https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png" 
            alt="user-iamge"
            className="h-10 w-10 rounded-full"
          />
          <div className='leading-5 hidden xl:inline'>
            <h4 className='font-bold '>Haruki Yui</h4>
            <p className='text-grey-500'>@code.licht</p>
          </div>
          <DotsHorizontalIcon  className='h-5 xl:ml-8'/>
        </div>

    </div>
  );
}
