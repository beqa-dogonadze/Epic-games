import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import games from '../data'
const SpecialEvent = ({ rowID }) => {
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className='flex flex-col items-left m-auto mt-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center [&>*:nth-child(even)]:hover:pl-2'>
            <h1 className='text-white'>Games On Sale</h1>
            <span className='text-white font-mono'>
              <MdChevronRight className='text-sm text-gray-400 font-sarif' />
            </span>
          </div>
        </div>
        <div className='flex'>
          <MdChevronLeft
            onClick={slideLeft}
            className='bg-gray-900 text-2xl text-white rounded-full'
          />
          <MdChevronRight
            onClick={slideRight}
            className='bg-gray-900 text-2xl text-white rounded-full'
          />
        </div>
      </div>
      <div id={'slider' + rowID} className='flex justify-start gap-[5%] h-max sm:w[-150px]'>
        {games.slice(0,6).map((game) => (
          <div className='flex flex-col justify-start w-[15%] '>
            <div className='text-white mt-5 '>
              <img
                className='rounded-md h-[260px] w-[200px]'
                src={game.URL}
                alt='dead island 2'
              />
              <h1 className='text-[13px] text-gray-500'>{game.category}</h1>
              <h1 className='text-md'>{game.game}</h1>
            </div>
            <div className='flex gap-3 text-white items-center'>
              <h4 className='bg-blue-600 rounded-md text-sm w-[50px] h-[24px] justify-center items-center flex tracking-tight font-sarif'>
                {game.sale}
              </h4>
              <h1 className='text-xl '>
                <del className='text-gray-400'>{game.price}</del>
              </h1>
              <h1 className='text-xl'>{game.newPrice}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SpecialEvent
