import './App.css';
import {useState, useEffect} from 'react'
import Ship from './components/StarshipCard'






function App() {

  const [ships,setShips] = useState(null)

  const getShip = async() => {
    const response = await fetch("https://swapi.dev/api/starships/")

    const data = await response.json()

    setShips(data)
    // console.log(data.results)
  
  }

  useEffect(() => {getShip()},[])

  console.log(ships)

  return (
    <div className="App">
     {/* {shipSet} */}
    {ships && ships.results.map(shipElement => (
      <Ship name={shipElement.name}/>
      
    ))}
    </div>
  );
}

export default App;
