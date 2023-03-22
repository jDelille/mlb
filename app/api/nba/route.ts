import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const url =
		'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

	try {
		const response = await fetch(url);
		const data = await response.json();

		return NextResponse.json(data);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
