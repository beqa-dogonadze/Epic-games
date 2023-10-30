import { AiOutlineSearch } from 'react-icons/ai'
const Home = () => {
  return (
    <div className='flex items-center justify-center m-0 '>
      <div className='flex w-[67%] justify-start items-center mt-7'>
        <div className='flex bg-[#1a1a1a] items-center justify-center rounded-3xl w-[240px] h-[40px] gap-5 '>
          <AiOutlineSearch className='text-gray-500' />
          <input
            type='text'
            placeholder='Search store '
            name=''
            id=''
            className='w-[70%] text-gray-500 text-sm bg-[#1a1a1a] placeholder-gray-500'
          />
        </div>
        <ul className='ml-5 flex gap-6'>
          <li>
            <a href='/discover' className='active:text-white text-gray-400'>
              Discover
            </a>
          </li>
          <li>
            <a href='/' className='active:text-white text-gray-400'>
              Browse
            </a>
          </li>
          <li>
            <a href='/' className='active:text-white text-gray-400'>
              News
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Home