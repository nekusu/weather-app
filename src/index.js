import getCurrentWeather from './currentWeather';

async function getWeather(location) {
	const currentWeather = await getCurrentWeather(location);
	console.log(currentWeather);
}

getWeather('argentina');
