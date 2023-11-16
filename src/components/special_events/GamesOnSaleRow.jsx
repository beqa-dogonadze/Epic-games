import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import DiscoverRow from '../discover/DiscoverRow'
import GamesOnSale from './GamesOnSale'
const GamesOnSaleRow = () => {
  return (
    <>
      <DiscoverRow />
      <div className='flex flex-col items-left m-auto mt-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <div className='flex items-center [&>*:nth-child(even)]:hover:pl-2'>
              <h1 className='text-white'>Games On Sale</h1>
              <span className='text-white font-mono'>
                <MdChevronRight className='text-sm text-gray-400 font-sarif' />
              </span>
            </div>
          </div>
        </div>
        <GamesOnSale />
      </div>
    </>
  )
}
export default GamesOnSaleRow
