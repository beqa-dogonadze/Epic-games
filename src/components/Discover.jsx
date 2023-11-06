import { AiOutlineSearch } from 'react-icons/ai'
const Discover = () => {

  return (
    <div className='flex items-center justify-start m-auto'>
      <div className='flex justify-start items-center mt-7'>
        <div className='flex bg-[#202020] items-center justify-center rounded-3xl w-[240px] h-[40px] gap-5 '>
          <AiOutlineSearch className='text-gray-500' />
          <input
            type='text'
            placeholder='Search store '
            name=''
            id=''
            className='w-[70%] text-gray-500 text-sm bg-[#202020]/100 placeholder-gray-500'
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
export default Discover
