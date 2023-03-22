'use client'
import { useState, useEffect } from 'react';
import GameCard from './components/GameCard/GameCard';
import { Game } from './types/Game';

function HomePage() {
  const [data, setData] = useState<Game[] | null>(null);
  const [query, setQuery] = useState<string>('/api/mlb')
  
  useEffect(() => {
   async function fetchData() {
     const response = await fetch(query);
     const responseData = await response.json();
     setData(responseData.events);
   }
    
    fetchData();
  }, [query]);

  console.log(data)

  if (!data) {
    return <div>Loading data...</div>;
  }

  return ( 
  <div className="flex-col container">
    {/* <h1>Welcome to the home page</h1>
    <h2>MLB Scoreboard</h2> */}
    <button type="button" onClick={() => setQuery('/api/nba')}>NBA</button>
    <button type="button" onClick={() => setQuery('/api/mlb')}>MLB</button>

    <div className="card-container">
    {data.map((game, i: number) => {
      return (
          <GameCard key={i} game={game} />
        )
    })}
    </div>
  
  </div>
  )
}

export default HomePage;
