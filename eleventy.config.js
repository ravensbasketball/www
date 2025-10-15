import { DateTime } from "luxon";
import 'dotenv/config';

export default async function( eleventyConfig ) {
	eleventyConfig.addPassthroughCopy( './src/assets/**' );
	eleventyConfig.addPassthroughCopy( './src/.htaccess' );

	eleventyConfig.addFilter( 'upcomingFixtures', function( fixtures ) {
		const today = DateTime.now().toISODate();

		return fixtures.filter( fixture => DateTime.fromISO( fixture.datetime ).toISODate() >= today );
	} );

	eleventyConfig.addFilter( 'pastFixtures', function( fixtures ) {
		const today = DateTime.now().toISODate();

		return fixtures.filter( fixture => DateTime.fromISO( fixture.datetime ).toISODate() < today );
	} );

	eleventyConfig.addFilter( 'scoreFilePrefix', function( fixture ) {
		let fixtureDate = fixture.datetime.split( 'T' )[ 0 ];
		let homeTeam = fixture.homeTeam;
		let awayTeam = fixture.awayTeam;

		let scoreFilePrefix = `${fixtureDate} ${homeTeam} vs ${awayTeam}`;

		return scoreFilePrefix;
	} );
};

export const config = {
	dir: {
		input: 'src',
		layouts: '_includes/layouts'
	}
};
