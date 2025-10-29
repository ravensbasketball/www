import filters from './_11ty/filters.js'
import 'dotenv/config';

export default async function( eleventyConfig ) {
	Object.entries( filters ).forEach( ( [ name, callback ] ) => {
		eleventyConfig.addFilter( name, callback );
	} );

	eleventyConfig.addPassthroughCopy( './src/assets/**' );
	eleventyConfig.addPassthroughCopy( './src/.htaccess' );
};

export const config = {
	dir: {
		input: 'src',
		layouts: '_includes/layouts'
	}
};
