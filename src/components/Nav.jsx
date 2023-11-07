import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { MdChevronRight } from 'react-icons/md'
import { RiGlobalLine } from 'react-icons/ri'
import { SiEpicgames } from 'react-icons/si'
import NavDropDown from './NavDropDown'
const Nav = () => {
  const [isActive, setIsActive] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const handleShow = (event) => {
    setIsShown((event) => !event)
    setIsActive((current) => !current)
  }
  return (
    <>
      <header className='bg-[#18181c] h-[75px] items-center flex'>
        <nav className='flex justify-between w-full m-6 leading-1'>
          <div className='flex justify-around items-center'>
            <div className='flex justify-center items-center gap-1'>
              <SiEpicgames className='text-white text-3xl' />
              <MdChevronRight
                className='text-gray-400 ml-1 text-xl'
                onClick={handleShow}
                style={{
                  transform: isActive ? 'rotate(270deg)' : 'rotate(90deg)',
                  transition: isActive ? '250ms' : '250ms',
                }}
              />
              <h1 className='text-xl border border-[#18181c] border-l-gray-600 font-bold text-white pl-5 ml-2'>
                STORE
              </h1>
            </div>
            <div>
              <ul className='flex gap-6 mx-5 text-gray-400 text-[17px]'>
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
            <FiUser className='rounded-full bg-gray-700 p-2 text-gray-300 w-[35px] h-[35px] hover:text-gray-400' />
            <button className='text-black bg-[#26bbff] rounded-md  w-[90px] h-[30px] hover:bg-[#4cacac]'>
              Download
            </button>
          </div>
        </nav>
      </header>
      {isShown && <NavDropDown />}
    </>
  )
}
export default Nav
