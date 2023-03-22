import React from 'react'
import UserNavbar from '../components/navbar/UserNavbar'
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';

const UserHomepage = () => {
  return (
    <>
    <UserNavbar />
    <div className='mt-5'>
      <span className='text-2xl mx-5'>KARENTOROKU</span>
      <div className='flex mt-8 space-x-5 p-2 border-b-[2px] border-gray'>
        <div className='ml-3 hover:font-bold cursor-pointer duration-300'>Event Types</div>
        <div className='hover:font-bold cursor-pointer duration-300'>Scheduled Events</div>
      </div>
      <div className='flex space-x-16 items-center border-b-[2px] border-gray'>
        <div className='text-6xl my-6 ml-5'>
        <BsPerson />
        </div>
        <div>
          <p className='text-xl'>username</p>
          <p className='text-orange-700 text-xl'>karentoroku.com/username</p>
        </div>
      </div>
      <div className='text-center'>
      <button
      className='text-xl px-60 py-5 my-5 rounded-full text-center border-2'
      >
        + New Event Type
      </button>
      </div>
      <div className='mt-5 mx-5 bg-orange-200 border-2 border-orange-200 pl-5 pt-10'>
        <p className='text-2xl'>Meeting 30 min</p>
        <p className='text-gray-500 mt-2'>30mins, One-on-One</p>
        <div className='my-10'>
        <Link to="/CustomerBooking" className='text-orange-700 text-lg'>view booking page</Link>
        </div>      
      </div>
      <div className='mt-0.5 mx-5 bg-orange-200 border-2 border-orange-200 flex justify-around items-center py-2'>
        <p className='text-lg'>Copy Link</p>
        <button
          className='bg-white px-10 py-3 border-orange-700 border-2 rounded-full text-lg'
        >
          Share
        </button>
      </div>
      <div className='mt-5 mx-5 bg-orange-200 border-2 border-orange-200 pl-5 pt-10'>
        <p className='text-2xl'>Meeting 30 min</p>
        <p className='text-gray-500 mt-2'>30mins, One-on-One</p>
        <div className='my-10'>
        <Link to="/CustomerBooking" className='text-orange-700 text-lg'>view booking page</Link>
        </div>
      </div>
      <div className='mt-0.5 mx-5 bg-orange-200 border-2 border-orange-200 flex justify-around items-center py-2'>
        <p className='text-lg'>Copy Link</p>
        <button
          className='bg-white px-10 py-3 border-orange-700 border-2 rounded-full text-lg'
        >
          Share
        </button>
      </div>
    </div>
    </>
  )
}

export default UserHomepage