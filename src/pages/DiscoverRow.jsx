import { IoMdAddCircleOutline } from 'react-icons/io'
import games from '../data'

const DiscoverRow = () => {
  return (
    <div className='flex mt-7'>
      <div className='flex rounded-xl bg-cover bg-[url("https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84")] w-full  text-white'>
        <div className='flex justify-end flex-col items-start m-[50px]'>
          <div className=''>
            <h1>OUT NOW</h1>
            <h1>Description</h1>
            <h1>Starting at </h1>
          </div>
          <div className='flex items-center justify-start gap-4 '>
            <button className='bg-white text-black w-[150px] h-[50px] rounded-[5px]'>
              BUY NOW
            </button>
            <button className='flex items-center hover:bg-white/20 h-[50px] rounded-[5px] text-sm p-1'>
              <IoMdAddCircleOutline className='mr-2 text-xl' />
              ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
      <div className='grid auto-cols-[repeat(6, 1fr)] items-start justify-start gap-4 ml-10 h-full'>
        {games.slice(0, 6).map((game) => (
          <div>
            <div className=' rounded-xl p-3 hover:bg-gray-500'>
              <div className='text-white flex items-center '>
                <img
                  className='rounded-md h-[70px] w-[50px]'
                  src={game.URL}
                  alt='dead island 2'
                />
                <h1 className='text-md pl-2 text-md'>{game.game}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default DiscoverRow
