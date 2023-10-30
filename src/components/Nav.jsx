import React from 'react'

import { FiUser } from 'react-icons/fi'
import { RiGlobalLine } from 'react-icons/ri'

const Nav = () => {
  return (
    <header className='bg-[#0d0d0d] h-[75px] items-center flex'>
      <nav className='flex justify-between w-full m-6'>
        <div className='flex justify-around items-center'>
          <div className='flex gap-1 '>
            <select name='cars' id='cars'>
              <option value='volvo'>Test</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
            <h1 className='text-xl font-bold text-white'>STORE</h1>
          </div>
          <div>
            <ul className='flex gap-6 mx-5 text-gray-400 text-[17px] '>
              <li>
                <a href='/'>Distribution</a>
              </li>
              <li>
                <a href='/'>Support</a>
              </li>
              <li>
                <a href='/'>Unreal Engine</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <RiGlobalLine className='text-gray-500 text-2xl hover:text-gray-400 w-[26px] h-[26px]' />
          <FiUser className=' rounded-full text-gray-500 bg-[#1a1a1a] w-[30px] h-[30px] hover:text-gray-400' />
          <button className='text-black bg-[#26bbff] rounded-md  w-[90px] h-[30px] hover:bg-[#4cacac]'>
            Download
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Nav
