import getCurrentWeather from './currentWeather';
import getForecastWeather from './forecastWeather';

async function getWeather(location) {
	const currentWeather = await getCurrentWeather(location);
	console.log(currentWeather);
	const forecastWeather = await getForecastWeather(currentWeather);
	console.log(forecastWeather);
}

getWeather('argentina');
