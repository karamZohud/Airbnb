import { GlobeAltIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <span>Become a host</span>
        <GlobeAltIcon className='w-6 cursor-pointer inline-block'/>
        <div className='flex space-x-2 border-2 rounded-full'>
        <Bars3Icon className="h-6 w-6 text-gray-500" />
        <UserCircleIcon className='h-6'/>
        </div>
    </div>
  )
}

