class UI {
	static searchForm = document.querySelector('#search-form');

	static unitsToggle = document.querySelector('#units-toggle');

	static selectedUnits = localStorage.getItem('units') || 'metric';

	static toggleUnits() {
		this.classList.toggle('metric');
		this.classList.toggle('imperial');
		UI.selectedUnits = this.className;
		localStorage.setItem('units', UI.selectedUnits);
	}

	static clearCurrentWeather() {
		const weatherElements = UI.#getWeatherElements();
		Object.keys(weatherElements).forEach((el) => {
			weatherElements[el].textContent = '.';
		});
	}

	static loadWeather() {
		const currentWeather = document.querySelector('#current-weather');
		currentWeather.classList.add('loading');
		UI.clearCurrentWeather();
	}

	static displayCurrentWeather(weather) {
		const currentWeather = document.querySelector('#current-weather');
		const {
			name, description, temperature, humidity, cloudiness, windSpeed,
		} = UI.#getWeatherElements();
		currentWeather.classList.remove('loading');
		name.textContent = weather.name;
		description.textContent = UI.#capitalize(weather.description);
		temperature.textContent = `${weather.temperature.toFixed(0)}°`;
		humidity.textContent = `${weather.humidity}%`;
		cloudiness.textContent = `${weather.cloudiness}%`;
		windSpeed.textContent = `${weather.windSpeed} ${UI.selectedUnits === 'metric' ? 'm/s' : 'mph'}`;
	}

	static #getWeatherElements() {
		const currentWeather = document.querySelector('#current-weather');
		const name = currentWeather.querySelector('#name');
		const description = currentWeather.querySelector('#description');
		const temperature = currentWeather.querySelector('#temp');
		const humidity = currentWeather.querySelector('#humidity');
		const cloudiness = currentWeather.querySelector('#cloudiness');
		const windSpeed = currentWeather.querySelector('#wind');
		return {
			name, description, temperature, humidity, cloudiness, windSpeed,
		};
	}

	static #capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

UI.unitsToggle.className = UI.selectedUnits;
UI.unitsToggle.addEventListener('click', UI.toggleUnits);

export default UI;
