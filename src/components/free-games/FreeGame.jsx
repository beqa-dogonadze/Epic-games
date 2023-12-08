import { useEffect, useState } from 'react'
import freeGames from './gamedata'

const FreeGame = () => {
  //timer logic
  const [counter, setCounter] = useState(60)

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter === 0) {
        // Reset when value reaches 0
        setCounter(60)
      } else {
        // start normal countdown
        setCounter((prevCounter) => prevCounter - 1)
      }
    }, 1000)
    // Clear the interval when the component is unmounted
    return () => clearInterval(timer)
  }, [counter])

  return (
    <div className='flex gap-4 pl-7 pr-7'>
      {freeGames.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.game} className='rounded-t-md' />
          <button
            className={`${item.color} p-1 text-white w-full rounded-b-md`}
          >
            {item.btnname}
          </button>
          <h1 className='text-white mt-5'>{item.game}</h1>
          <h1
            className={
              item.time ? `text-gray-400 mt-1` : `text-white mt-1 text-center`
            }
          >
            {item.time ? item.time : `Unlocking in 11:23:${counter}`}
          </h1>
        </div>
      ))}
    </div>
  )
}
export default FreeGame
