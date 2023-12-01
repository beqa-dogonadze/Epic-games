import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Slider from 'react-slick'
import games from '../../data'
const GamesOnSale = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  }

  return (
    <>
      <div className='flex justify-end gap-2'>
        <MdChevronLeft className='text-white bg-[#202020] rounded-full text-2xl w-[32px] h-[32px] items-center flex justify-center' />

        <MdChevronRight className='text-white bg-[#202020] rounded-full text-2xl w-[32px] h-[32px] items-center flex justify-center' />
      </div>
      <>
        <Slider
          className='flex justify-between gap-8 overflow-scroll scroll-smooth cards-wrapper overflow-x-hidden'
          {...settings}
        >
          {games.slice(0, 6).map((game) => (
            <div className='flex flex-col justify-start w-full ' key={game.id}>
              <div className='text-white mt-5 '>
                <img
                  className='rounded-md h-[280px] w-[233px]'
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
        </Slider>
      </>
    </>
  )
}
export default GamesOnSale
