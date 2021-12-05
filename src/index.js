import getCurrentWeather from './currentWeather';
import getForecastWeather from './forecastWeather';
import UI from './ui';

async function getWeather(e) {
	e.preventDefault();
	const location = UI.searchForm.text.value;
	if (location) {
		UI.loadWeather();
		const currentWeather = await getCurrentWeather(location, UI.selectedUnits);
		UI.displayCurrentWeather(currentWeather);
		const forecastWeather = await getForecastWeather(currentWeather, UI.selectedUnits);
		console.log(forecastWeather);
	}
}

UI.searchForm.addEventListener('submit', getWeather);
UI.unitsToggle.addEventListener('click', getWeather);
