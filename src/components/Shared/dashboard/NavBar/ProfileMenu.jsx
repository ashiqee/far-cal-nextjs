import Link from 'next/link';
import React from 'react';

const ProfileMenu = ({openProfileMenu}) => {
    return (
        <div>
            <ul onMouseLeave={()=>openProfileMenu(false)} className=' py-2 rounded-xl bg-gray-200 text-blue-800'>
              <Link href='/profile'>  <li className="px-4 pr-16 p-1 hover:bg-slate-400 rounded-sm">Profile</li></Link>
              <Link href='/profile'>  <li className="px-4 pr-16 p-1 hover:bg-slate-400 rounded-sm">Contact</li></Link>
              <Link href='#'>  <li className="px-4 pr-16 p-1 hover:bg-slate-400 rounded-sm">Logout</li></Link>
               
             </ul>
        </div>
    );
};

export default ProfileMenu;