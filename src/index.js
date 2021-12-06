import { getCurrentWeather, getCurrentWeatherByCoords } from './currentWeather';
import getForecastWeather from './forecastWeather';
import UI from './ui';

let lastLocation;

function getCurrentPosition(options) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
}

async function getWeather(location) {
	UI.loadWeather();
	try {
		const currentWeather = await getCurrentWeather(location, UI.selectedUnits);
		UI.displayCurrentWeather(currentWeather);
		const forecastWeather = await getForecastWeather(currentWeather, UI.selectedUnits);
		UI.displayForecastWeather(forecastWeather);
	} catch (err) {
		UI.displayError(err);
	}
}

async function getWeatherByCoords(coords) {
	UI.loadWeather();
	try {
		const [currentWeather, forecastWeather] = await Promise.all([
			getCurrentWeatherByCoords(coords, UI.selectedUnits),
			getForecastWeather(coords, UI.selectedUnits),
		]);
		UI.displayCurrentWeather(currentWeather);
		UI.displayForecastWeather(forecastWeather);
	} catch (err) {
		UI.displayError(err);
	}
}

async function getWeatherAtStart() {
	const options = {
		timeout: 5000,
		maximumAge: 0,
	};
	UI.loadWeather();
	try {
		const position = await getCurrentPosition(options);
		getWeatherByCoords(position.coords);
	} catch (err) {
		getWeather('Argentina');
	}
}

function searchForWeather(e) {
	e.preventDefault();
	const location = UI.searchForm.text.value;
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

UI.searchForm.addEventListener('submit', searchForWeather);
UI.unitsToggle.addEventListener('click', switchUnits);
getWeatherAtStart();
