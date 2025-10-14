import { DateTime } from "luxon";
import 'dotenv/config';

export default async function( eleventyConfig ) {
	eleventyConfig.addPassthroughCopy( './src/assets/**' );
	eleventyConfig.addPassthroughCopy( './src/.htaccess' );

	eleventyConfig.addFilter( 'upcomingFixtures', function( records ) {
		const today = DateTime.now().toISODate();

		return records.filter( record => DateTime.fromISO( record.datetime ).toISODate() >= today );
	} );

	eleventyConfig.addFilter( 'pastFixtures', function( records ) {
		const today = DateTime.now().toISODate();

		return records.filter( record => DateTime.fromISO( record.datetime ).toISODate() < today );
	} );
};

export const config = {
	dir: {
		input: 'src',
		layouts: '_includes/layouts'
	}
};
