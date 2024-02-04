"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import ButtonPrimary from './compontent/Button/ButtonPrimary';
import ThemeSwitcher from '@/app/ThemeSwitcher';

const Navbar = () => {
   const pathName = usePathname()

    const menu = [
        {
        menuName:"Home",path:'/'
         },
        {
        menuName:"Contact",path:'/contact'
         },
        {
        menuName:"Product",path:'/product'
         },
        {
        menuName:"About",path:'/about'
         },
        {
        menuName:"Dashboard",path:'/dashboard'
         }
]
    return (
        <div className='p-2 h-20 bg-base-100'>
         <div className='container mx-auto flex items-center justify-between '>
       <div className='flex items-center gap-4'>
       <h2 className='text-2xl font-semibold'>LOGO</h2>
         <ul className='flex gap-5 py-4 items-center'>
            {
                menu.map((item)=> <li className={pathName === item.path ? "border-b-2 pb-2  border-white":"hover:border-b-2 hover:translate-x-1 duration-150 pb-2 border-white"} key={item.menuName}><Link href={item.path}>{item.menuName}</Link></li>)
            }
            </ul>
       </div>
     <section className="flex gap-3 items-center">
        <ThemeSwitcher/>
        <ButtonPrimary btnText={"Login"}/>
    
     </section>
         </div>
        </div>
    );
};

export default Navbar;