export default async function( eleventyConfig ) {
	eleventyConfig.addPassthroughCopy( './src/*.css' );
};

import 'dotenv/config';

export const config = {
	dir: {
		input: 'src',
		layouts: '_includes/layouts'
	}
};
