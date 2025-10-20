// https://www.netlify.com/blog/how-to-schedule-deploys-with-netlify/
import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/68f66cf93688a1a49867dde0'

// Schedules the handler function to run daily at 02:37
const handler = schedule( '37 2 * * *', async () => {
	await fetch( BUILD_HOOK, {
		method: 'POST'
	} ).then(response => {
		console.log('Build hook response:', response);
	} )

	return {
		statusCode: 200
	}
} )

export { handler }
