import { LuGift } from 'react-icons/lu'
import FreeGame from './FreeGame'

const FreeGameContainer = () => {
  return (
    <div className='mt-20 bg-[#2a2b2b]'>
      <div className='flex p-7 justify-between'>
        <div className='flex gap-4 text-center items-center'>
          <LuGift className='text-white text-4xl' />
          <h1 className='text-white text-xl'>Free Games</h1>
        </div>
        <a
          href='/'
          className='text-white rounded-md border border-white text-center items-center p-2 pl-4 pr-4'
        >
          <button>VIEW MORE</button>
        </a>
      </div>
      <div className='pb-7'>
        <FreeGame />
      </div>
    </div>
  )
}
export default FreeGameContainer
