import axios from 'axios'
import { useEffect, useState } from 'react'
import requests from '../data'

const SpecialEvent = () => {
  const [games, setGames] = useState([])
  const game = games[Math.floor(Math.random() * games.length)]

  useEffect(() => {
    axios
      .get(requests.requestName)
      .then((response) => setGames(response.data.results))
  }, [])
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  )
}
export default SpecialEvent
