import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import games from '../data'
const SpecialEvent = ({ fetchURL, rowID }) => {
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div className='flex flex-col items-left m-auto w-[75%] mt-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <h1 className='text-white hover:w-[155px]'>Halloween Spotlight</h1>
          <span className='text-white pl-1 font-mono'>
            <MdChevronRight />
          </span>
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
      <div id={'slider' + rowID} className='flex justify-start gap-5'>
        {games.map((game) => (
          <div className='flex flex-col justify-start'>
            <div className='text-white mt-5'>
              <img
                className='rounded-md h-[220px] w-[170px]'
                src={game.URL}
                alt='dead island 2'
              />
              <h1 className='text-[13px] text-gray-500'>{game.category}</h1>
              <h1 className='text-xl'>{game.game}</h1>
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
