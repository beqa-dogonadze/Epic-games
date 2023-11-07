import { useState } from 'react'
import games from '../data'

const SpecialGames = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible((current) => !current)
    let i = 0
    if (i === 0) {
      i = 1
      let elem = document.getElementById('myBar')
      let width = 1
      let id = setInterval(frame, 50)
      function frame() {
        if (width >= 100) {
          clearInterval(id)
          i = 0
        } else {
          width++
          elem.style.width = width + ''
        }
      }
    }
  }

  return (
    <div className='flex justify-start gap-8'>
      {games.slice(0, 6).map((game) => (
        <div className='flex flex-col justify-start'>
          <div className='text-white mt-5 '>
            <img
              className='rounded-md h-[280px] w-[213px]'
              src={game.URL}
              alt={game.game}
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
  )
}
export default SpecialGames
