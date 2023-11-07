import SearchStore from './components/SearchStore'
import Nav from './components/Nav'
import SpecialEvent from './components/SpecialEvent'

const App = () => {
  return (
    <>
      <Nav />
      <div className='w-[75%] m-auto mb-5'>
        <SearchStore />
        <SpecialEvent />
      </div>
    </>
  )
}
export default App
