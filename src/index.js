import { getCurrentWeather, getCurrentWeatherByCoords } from './currentWeather';
import getForecastWeather from './forecastWeather';
import {
	searchForm,
	unitsToggle,
	showError,
	showLoadingAnimation,
	displayCurrentWeather,
	displayForecastWeather,
} from './ui';

let lastLocation;

function getCurrentPosition(options) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
}

async function getWeather(location) {
	showLoadingAnimation();
	try {
		const currentWeather = await getCurrentWeather(location, unitsToggle.className);
		displayCurrentWeather(currentWeather);
		const forecastWeather = await getForecastWeather(currentWeather, unitsToggle.className);
		displayForecastWeather(forecastWeather);
	} catch (err) {
		showError(err);
	}
}

async function getWeatherByCoords(coords) {
	showLoadingAnimation();
	try {
		const [currentWeather, forecastWeather] = await Promise.all([
			getCurrentWeatherByCoords(coords, unitsToggle.className),
			getForecastWeather(coords, unitsToggle.className),
		]);
		displayCurrentWeather(currentWeather);
		displayForecastWeather(forecastWeather);
	} catch (err) {
		showError(err);
	}
}

async function getWeatherAtStart() {
	const options = {
		timeout: 5000,
		maximumAge: 0,
	};
	showLoadingAnimation();
	try {
		const position = await getCurrentPosition(options);
		getWeatherByCoords(position.coords);
	} catch (err) {
		getWeather('Argentina');
	}
}

function searchForWeather(e) {
	e.preventDefault();
	const location = searchForm.text.value;
	if (location && location !== lastLocation) {
		getWeather(location);
	}
	lastLocation = location;
}

function switchUnits() {
	const location = document.querySelector('#current-weather #name')?.textContent;
	if (location !== '.') {
		getWeather(location);
	}
}

searchForm.addEventListener('submit', searchForWeather);
unitsToggle.addEventListener('click', switchUnits);
getWeatherAtStart();
