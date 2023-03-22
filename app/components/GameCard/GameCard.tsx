// 'use client'

import React from 'react';
import './GameCard.scss';
import { Game } from '@/app/types/Game';
import Image from 'next/image';
import Arrow from '@/app/icons/Arrow';

interface GameCardProps {
	game: Game;
}

export default function GameCard(props: GameCardProps) {
	const {
		competitions: [{ competitors, status }],
	} = props.game;

	const slug = props.game.season.slug.replace(/^\w/, (c) => c.toUpperCase());

	console.log(props.game)

	const gameStatus = status.type.description;

	const homeLogo = competitors[0].team.logo;
	const homeName = competitors[0].team.shortDisplayName;
	const homeScore = competitors[0].score;
	const homeWinner = competitors[0].winner;

	const awayLogo = competitors[1].team.logo;
	const awayName = competitors[1].team.shortDisplayName;
	const awayScore = competitors[1].score;
	const awayWinner = competitors[1].winner;

	return (
		<div className='card flex-col'>
			<p className='slug'>{slug}</p>
			<div className="wrapper">

				<div className="teams">
				<div className='home flex space-between'>
					<div className='team-container flex gap'>
						<Image alt='logo' src={homeLogo} width={24} height={24} />
						<p>{homeName}</p>
					</div>
					<div className='score-container'>
	
						<p>{homeScore}	{homeWinner && <Arrow />}</p>
					</div>
				</div>
				<div className='away flex space-between'>
					<div className='team-container flex gap'>
						<Image alt='logo' src={awayLogo} width={24} height={24} />
						<p>{awayName}</p>
					</div>
					<div className='score-container'>
						<p>{awayScore} {awayWinner && <Arrow />}</p>
					</div>
				</div>
				</div>
			
			
			<div className="status-container">
				<p className="status">{gameStatus}</p>
				<p>Today</p>
			</div>

		</div>
		</div>
	);
}


