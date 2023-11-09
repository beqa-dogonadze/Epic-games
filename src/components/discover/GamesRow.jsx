import games from '../../data'

const GamesRow = () => {
  return (
    <div className='grid auto-cols-[repeat(6, 1fr)] items-start justify-start gap-2 ml-10 h-full'>
      {games.slice(0, 6).map((game) => (
        <div>
          <div className='rounded-xl p-3 hover:bg-gray-500'>
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
  )
}
export default GamesRow
