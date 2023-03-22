// 'use client'

import React from 'react';
import './GameCard.scss';
import { Game } from '@/app/types/Game';

interface GameCardProps {
	game: Game;
}

export default function GameCard(props: GameCardProps) {
	return (
		<div className='card'>
			<div>
				{props.game.homeTeam} vs. {props.game.awayTeam}
			</div>
			<div>
				{props.game.homeScore} - {props.game.awayScore}
			</div>
			<div>{props.game.name}</div>
			<div>{props.game.shortName}</div>
			<div>{props.game.teamLink}</div>
		</div>
	);
}
