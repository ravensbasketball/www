import 'dotenv/config';
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = 'https://admin.ravensbasketball.club/api/players';

	return Fetch( url, {
		duration: '0d'
		,type: 'json'
		,fetchOptions: {
			headers: {
				'Authorization': process.env.API_TOKEN
			}
		}
	} );
};
