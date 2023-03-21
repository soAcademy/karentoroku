import React from 'react'
import UserNavbar from '../components/navbar/UserNavbar'
import { BsPerson } from "react-icons/bs";

const UserHomepage = () => {
  return (
    <>
    <UserNavbar />
    <div className='mt-5'>
      <span className='text-2xl mx-5'>KARENTOROKU</span>
      <div className='flex mt-8 space-x-5 p-2 border-b-[2px] border-gray'>
        <div className='ml-3 hover:font-bold cursor-pointer'>Event Types</div>
        <div className='hover:font-bold cursor-pointer'>Scheduled Events</div>
      </div>
      <div className='flex space-x-16 items-center border-b-[2px] border-gray'>
        <div className='text-6xl my-6 ml-5'>
        <BsPerson />
        </div>
        <div>
          <p>username</p>
          <p className='text-orange-700'>karentoroku.com/username</p>
        </div>
      </div>
      <button
      className=''
      >
        + New Event Type
      </button>
    </div>
    </>
  )
}

export default UserHomepage