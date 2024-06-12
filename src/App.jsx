import React, { useState, useEffect } from 'react';
import { getStarships } from './services/sw-api';
import './App.css'
import StarshipCard from './components/StarShipCard';

function App() {

  const [starships, setStarships] = useState([]);

  const [nextUrl, setNextUrl]=useState(null);

  const getInitialStarShips = async () => {
    try{
    const starshipsData = await getStarships();
    console.log(starshipsData);
    setStarships(starshipsData.results);
    setNextUrl(starshipsData.next)
    }
    catch(error){
      console.error('Error :', error)
    }
  };

  const fetchNextPage= async ()=>{
    if(!nextUrl) return;
    try{
      const data = await getStarships(nextUrl);

      setNextUrl(data.next);
      setStarships(prevStarships => [...prevStarships,...data.results]);

    }
    catch(error){
      console.log('error more fetching', error);

    }
  }

  useEffect(()=>{getInitialStarShips();},[]);


  

  return (
    <div className='container'>
    <h1>React Star Wars</h1>
    <div className='content'>
      {starships.map((ship)=>(<StarshipCard starship={ship} />))}
    </div>
    {nextUrl && <button onClick={fetchNextPage}>Load More ...</button>}
    </div>
  )
}

export default App
