import FreeGameContainer from '../components/free-games/FreeGameContainer'
import Nav from '../components/navbar/Nav'
import SearchStore from '../components/SearchStore'
import SpecialEvent from '../components/special_events/GamesOnSaleRow'

const Home = () => {
  return (
    <>
      <Nav />
      <div className='w-[75%] m-auto mb-5'>
        <SearchStore />
        <SpecialEvent />
        <FreeGameContainer />
      </div>
    </>
  )
}
export default Home
