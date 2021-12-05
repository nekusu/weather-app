import getCurrentWeather from './currentWeather';
import getForecastWeather from './forecastWeather';
import UI from './ui';

async function getWeather(e) {
	e.preventDefault();
	const location = UI.searchForm.text.value;
	if (location) {
		const currentWeather = await getCurrentWeather(location, UI.selectedUnits);
		console.log(currentWeather);
		const forecastWeather = await getForecastWeather(currentWeather, UI.selectedUnits);
		console.log(forecastWeather);
	}
}

UI.searchForm.addEventListener('submit', getWeather);
UI.unitsToggle.addEventListener('click', getWeather);
