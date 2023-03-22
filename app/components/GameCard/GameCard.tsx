// 'use client'

import React from 'react';
import './GameCard.scss';
import { Game } from '@/app/types/Game';
import Image from 'next/image';

interface GameCardProps {
	game: Game;
}


export default function GameCard(props: GameCardProps) {

  const {competitions: [{competitors}]} = props.game;
  const homeLogo = competitors[0].team.logo;
  const homeName = competitors[0].team.abbreviation

  const awayLogo = competitors[1].team.logo;
  const awayName = competitors[1].team.abbreviation


	return (
		<div className='card flex-col gap'>
			<div className="home flex gap">
        <Image alt='logo' src={homeLogo} width={30} height={30} />
        <p>{homeName}</p>
      </div>
      <div className="away flex gap">
      <Image alt='logo' src={awayLogo} width={30} height={30} />
      <p>{awayName}</p>
      </div>
		</div>
	);
}

{/* <div>
				{props.game.homeTeam} vs. {props.game.awayTeam}
			</div>
			<div>
				{props.game.homeScore} - {props.game.awayScore}
			</div>
			<div>{props.game.name}</div>
			<div>{props.game.shortName}</div>
			<div>
        <Image src={homeLogo} alt="logo" width={50} height={50}/>
      </div> */}