"use client"
import { Avatar} from "@nextui-org/react";

import { SlBell } from "react-icons/sl";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Dashboard from './../../../../app/dashboard/page';
import { useState } from 'react';
import ProfileMenu from "./ProfileMenu";
import ThemeSwitcher from "@/app/ThemeSwitcher";

const DashboardNavBar = () => {
    const pathName = usePathname()

    const [openProfile,openProfileMenu]=useState(false)
    return (
<div className="flex justify-between p-3 px-10 border-b-[0.2px] border-gray-300 bg-gradient-to-r from-base-100 to-base-50" >
  <div>
    {pathName === "/dashboard" && < h2 className="text-xl font-bold">FAR CAL</h2>}
    {pathName === "/farcalculator" && < h2 className="text-md font-thin"> <Link href="/dashboard" className="text-gray-400">Dashboard /</Link> Far calculator</h2>}
  </div>

  <div className="flex gap-6 items-center ">
    <ThemeSwitcher/>
<h4 className="text-2xl">  <SlBell /></h4>
  <Avatar onClick={()=>openProfileMenu(!openProfile)}
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />

  <div className="absolute top-16 right-8  z-40">{openProfile && <ProfileMenu openProfileMenu={openProfileMenu}/>}</div>
  </div>


</div>

       
    );
};

export default DashboardNavBar;