"use client"
import React, { useState } from 'react';
import AllProjects from './AllProjects';
import CreateByMe from './CreateByMe';
import ShareWithMe from './ShareWithMe';
import ButtonPrimary from '../compontent/Button/ButtonPrimary';
import Link from 'next/link';
import { SearchIcon } from './NavBar/SearchIcon';
import {Input} from "@nextui-org/react";

const DashboardHome = () => {

    const [sideBarOpen,setSideBar]=useState(true)
    const [isOpen1,setIsOpen1]=useState(true)
    const [isOpen2,setIsOpen2]=useState(false)
    const [isOpen3,setIsOpen3]=useState(false)

    const handleMenu =(menu)=>{
if(menu=== "all"){
    setIsOpen1(true);
    setIsOpen2(false)
    setIsOpen3(false)
}else if(menu === "create me"){
    setIsOpen1(false);
    setIsOpen2(true)
    setIsOpen3(false)
}else if(menu === "share me"){
    setIsOpen1(false);
    setIsOpen2(false)
    setIsOpen3(true)
}
    }

    return (
        <div className='flex gap-4 '>
            {/* SideBar  */}
   
   {
        sideBarOpen && <div className=' pt-10 px-10 w-56 flex flex-col justify-between min-h-[calc(100vh-59px)] bg-gradient-to-r from-base-100 to-base-50 shadow-md shadow-slate-400  dark:bg-slate-700 '>
        
        
        <section className="" >
           <ul >
    
    <li className={isOpen1 ? 'p-2 mb-1 bg-slate-600 rounded-xl  pl-4': 'p-2 mb-1 hover:bg-slate-600 rounded-xl  pl-4'} onClick={()=>handleMenu('all')}> All Projects </li>
    <li
     className={isOpen2 ? 'p-2 mb-1 bg-slate-600 rounded-xl  pl-4': 'p-2 mb-1 hover:bg-slate-600 rounded-xl  pl-4'}
    onClick={()=>handleMenu('create me')}>Created by me </li>
    <li
     className={isOpen3 ? 'p-2 mb-1 bg-slate-600 rounded-xl  pl-4': 'p-2 mb-1 hover:bg-slate-600 rounded-xl  pl-4'}
    onClick={()=>handleMenu('share me')}>Share With me </li>
         </ul>
    
    {/* auth Menu */}
    
    
           </section>
           <ul className="pb-10 py-4 border-t">
              <Link href={'/'}>  <li
                 className='p-2 mb-1 hover:bg-slate-600 rounded-xl  pl-4'
              >Home</li></Link>
              <ButtonPrimary btnText={"Sign Out"}/>
                    
                </ul>   
   </div>
    }

 
       
<div className={sideBarOpen? 'w-[90vw] pt-5':"w-full pt-5"}>
    
<header >
    <div className='flex pr-20  items-center justify-between '>
      <div className="flex gap-2 items-center">
      <button onClick={()=>setSideBar(!sideBarOpen)}>III</button>
    <h3 className="text-3xl">Projects</h3>
      </div>
      <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
<h2>sortBy</h2>
<Link href='/farcalculator'><ButtonPrimary btnText={"+ New project"}/></Link>

    </div>

</header>
{/* component show */}
        <section>   {
            isOpen1 && <AllProjects/>
           }
           {
            isOpen2 && <CreateByMe/>
           }
           {
            isOpen3 && <ShareWithMe/>
           }</section>
</div>
        </div>
    );
};

export default DashboardHome;