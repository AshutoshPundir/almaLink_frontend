// import React from 'react'
// import Dashboard from '../pages/Dashboard'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='shadow-sm'>
      <nav className=' w-screen h-15 flex items-center justify-between'>
        <div className=' w-auto h-full flex items-center justify-center mx-4'>
            {/* project_name */}
            <h1 className='text-2xl font-bold text-gray-400 '>Alma <span className='text-green-500'>Link</span></h1>
        </div>
        
        <div className='bg mx-3 px-5 flex items-center justify-between w-2xl h-full'>
            <div className='gap-9 text-md text-gray-400'>
                {/* //mid_nav */}
                <Link className='px-3' to='/'> Features </Link>
                <Link className='px-3' to='/'> Mentorship </Link>
                <Link className='px-3' to='/'> Events </Link>
                <Link className='px-3' to='/'> jobs </Link>
    
            </div>
            {/* //right_nav */}

            <div className='flex items-center justify-center '>
                {/* //right_nav-----profile */}
                <button className='mx-3 px-4 bg-white shadow-2xl text-black rounded-sm py-1'>Login</button>
                <button className='mx-3 px-4 bg-green-600 shadow-2xl text-white rounded-sm py-1'>Register Now</button>
                {/* <div className='bg-gray-50 font-black w-7 h-full '> A </div> */}


            </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
