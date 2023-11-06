import Discover from './components/Discover'
import Nav from './components/Nav'
import SpecialEvent from './components/SpecialEvent'

const App = () => {
  return (
    <>
      <Nav />
      <div className='w-[75%] m-auto'>
      <Discover />
      <SpecialEvent />
      </div>

    </>
  )
}
export default App
