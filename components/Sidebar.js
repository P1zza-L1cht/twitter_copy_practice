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
    <div>

        {/* twitter logo */}
          <div className=''>
            <Image
              width="50"
              height="50"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="logo"
            />
          </div>

        {/* Menu */}
        <div className=''>
          <SidebarMenu  text="Home" Icon={HomeIcon} />
          <SidebarMenu  text="Explore" Icon={HashtagIcon} />
          <SidebarMenu  text="Notifications" Icon={BellIcon} />
          <SidebarMenu  text="Messages" Icon={InboxIcon} />
          <SidebarMenu  text="BookMarks" Icon={BookmarkIcon} />
          <SidebarMenu  text="Lists" Icon={ClipboardIcon} />
          <SidebarMenu  text="Profile" Icon={UserIcon} />
          <SidebarMenu  text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        {/* Button */}

        <button>Tweet</button>

        {/* Mini-profile */}

        <div className="">
          {/* <img src="" alt="" /> */}
          <div className=''>
            <h4>Haruki Yui</h4>
            <p>@code.licht</p>
          </div>
          <DotsHorizontalIcon  className='h-5' />
        </div>

    </div>
  )
}
