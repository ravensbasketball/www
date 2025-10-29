// https://hamatti.org/posts/file-organisation-in-eleventy-filters/

import { DateTime } from 'luxon';

function upcomingFixtures( fixtures ) {
	const today = DateTime.now().toISODate();

	return fixtures.filter( fixture => DateTime.fromISO( fixture.datetime ).toISODate() >= today );
}

function pastFixtures( fixtures ) {
	const today = DateTime.now().toISODate();

	return fixtures.filter( fixture => DateTime.fromISO( fixture.datetime ).toISODate() < today );
}

function scoreFilePrefix( fixture ) {
	let fixtureDate = fixture.datetime.split( 'T' )[ 0 ];
	let homeTeam = fixture.homeTeam;
	let awayTeam = fixture.awayTeam;

	let scoreFilePrefix = `${fixtureDate} ${homeTeam} vs ${awayTeam}`;

	return scoreFilePrefix;
}

function squad( players ) {
	return players.filter( player => player.available ).sort( (a, b) => {
		let nameA = a.givenName.toUpperCase(); 
		let nameB = b.givenName.toUpperCase(); 

		if( nameA < nameB ) return -1;
		if( nameA > nameB ) return 1;

		return 0;
	} );
}

export default {
	upcomingFixtures
	,pastFixtures
	,scoreFilePrefix
	,squad
};
