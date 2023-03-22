'use client'
import { useState, useEffect } from 'react';
import GameCard from './components/GameCard/GameCard';
import { Game } from './types/Game';

function HomePage() {
  const [data, setData] = useState<Game[] | null>(null);
  
  useEffect(() => {
   async function fetchData() {
     const response = await fetch('/api/scoreboard');
     const responseData = await response.json();
     setData(responseData.events);
   }
    
    fetchData();
  }, []);

  console.log(data)

  if (!data) {
    return <div>Loading data...</div>;
  }

  return ( 
  <div className="flex-col container">
    {/* <h1>Welcome to the home page</h1>
    <h2>MLB Scoreboard</h2> */}
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
