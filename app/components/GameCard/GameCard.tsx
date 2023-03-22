// 'use client'

import React from 'react';
import './GameCard.scss';
import { Game } from '@/app/types/Game';
import Image from 'next/image';

interface GameCardProps {
	game: Game;
}

export default function GameCard(props: GameCardProps) {
	const {
		competitions: [{ competitors }],
	} = props.game;
	const homeLogo = competitors[0].team.logo;
	const homeName = competitors[0].team.abbreviation;
	const homeScore = competitors[0].score;

	const awayLogo = competitors[1].team.logo;
	const awayName = competitors[1].team.abbreviation;
	const awayScore = competitors[1].score;

	return (
		<div className='card flex-col gap'>
			<div className='home flex space-between'>
				<div className='team-container flex gap'>
					<Image alt='logo' src={homeLogo} width={30} height={30} />
					<p>{homeName}</p>
				</div>

				<div className='score-container'>
					<p>{homeScore}</p>
				</div>
			</div>
			<div className='away flex space-between'>
				<div className='team-container flex gap'>
					<Image alt='logo' src={awayLogo} width={30} height={30} />
					<p>{awayName}</p>
				</div>

				<div className='score-container'>
					<p>{awayScore}</p>
				</div>
			</div>
		</div>
	);
}


