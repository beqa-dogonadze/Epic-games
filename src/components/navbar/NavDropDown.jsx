import { BiRocket, BiSad } from 'react-icons/bi'
import { FaBattleNet } from 'react-icons/fa'
import { GiMetalGolemHead, GiTwinShell } from 'react-icons/gi'
import {
  SiArtstation,
  SiEpicgames,
  SiRealm,
  SiSketchfab,
  SiUnrealengine
} from 'react-icons/si'
import { TbBrandFortnite } from 'react-icons/tb'

const NavDropDown = () => {
  return (
    <div className='absolute text-white w-auto h-auto bg-[#232327] m-5 rounded-2xl p-12'>
      <div className='flex items-start gap-24'>
        <div>
          <ul className='text-sm'>
            <h1 className='text-3xl'>Play</h1>
            <li className='mt-3'>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <TbBrandFortnite className='text-xl mr-2' />
                Fortnime
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <BiRocket className='text-xl mr-2' />
                Rocket League
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <BiSad className='text-xl mr-2' />
                Fall Guys
              </a>
            </li>
          </ul>
          <ul className='text-sm mt-10'>
            <h1 className='text-2xl '>Discover</h1>
            <li className='mt-3'>
              <a href='/' className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'>
                <SiEpicgames className='text-xl mr-2' />
                Epic Games Store
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <FaBattleNet className='text-xl mr-2' />
                Fab
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <SiSketchfab className='text-xl mr-2' />
                Sketchfab
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
              >
                <SiArtstation className='text-xl mr-2' />
                ArtStation
              </a>
            </li>
          </ul>
        </div>
        <ul className='text-sm'>
          <h1 className='text-2xl'>Create</h1>
          <li className='mt-3'>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiUnrealengine className='text-xl mr-2' />
              Unreal Engine
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <TbBrandFortnite className='text-xl mr-2' />
              Create in Fortnite
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <GiMetalGolemHead className='text-xl mr-2' />
              MetaHuman
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <GiTwinShell className='text-xl mr-2' />
              Twinmotion
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiRealm className='text-xl mr-2' />
              RealityScan
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiEpicgames className='text-xl mr-2' />
              Epic Online Services
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiEpicgames className='text-xl mr-2' />
              Publish On Epic games Store
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiEpicgames className='text-xl mr-2' />
              Kids Web Services
            </a>
          </li>
          <li>
            <a
              href='/'
              className='flex items-center mt-[10px] hover:bg-[#444444] p-1 rounded-xl w-[220px]'
            >
              <SiEpicgames className='text-xl mr-2' />
              Developer Comonity
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default NavDropDown
