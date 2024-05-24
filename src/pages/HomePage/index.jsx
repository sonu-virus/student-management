import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='bg-gray-400 '>

    <div className='flex justify-between mx-4 p-5 '>
      <div>Home</div>
      <Link to={"/auth/sign_up"}>SignUp</Link>
      <Link to={"/auth/login"}>LogIn</Link>
    </div>

    <div className='h-screen bg-blue-600'>
    <div className='flex justify-center pt-5 text-white'>

     Welcome To Home Page  Signup Or Login !

    </div>
    </div>

    </div>

  )
}

export default HomePage