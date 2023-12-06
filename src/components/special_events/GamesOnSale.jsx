import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import games from '../../data'
const GamesOnSale = () => {
  const CustomPrevArrow = (props) => {
    return <MdChevronLeft className='text-white z-1' onClick={props.onClick} />
  }

  const CustomNextArrow = (props) => {
    return <MdChevronRight className='text-white z-10' onClick={props.onClick} />
  }

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  }

  return (
    <>
      <Slider {...settings}>
        {games.map((game) => (
          <div
            className='flex flex-col justify-start w-full gap-5'
            key={game.id}
          >
            <div className='text-white mt-5 '>
              <img
                className='rounded-md h-[280px] w-[203px]'
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
  )
}
export default GamesOnSale
