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

	static clearForecastWeather() {
		const forecastWeather = document.querySelector('#forecast-weather');
		const hourly = forecastWeather.querySelector('#hourly');
		const daily = forecastWeather.querySelector('#daily');
		hourly?.remove();
		daily?.remove();
	}

	static loadWeather() {
		const currentWeather = document.querySelector('#current-weather');
		currentWeather.classList.add('loading');
		UI.unitsToggle.disabled = true;
		UI.hideError();
		UI.clearCurrentWeather();
		UI.clearForecastWeather();
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

	static displayForecastWeather(weather) {
		const forecastWeather = document.querySelector('#forecast-weather');
		const hourly = UI.#createElement('div', { id: 'hourly' });
		const daily = UI.#createElement('div', { id: 'daily' });
		weather.hourly.forEach((hour) => {
			hourly.appendChild(UI.#createHourlyCard(hour));
		});
		weather.daily.forEach((day) => {
			daily.appendChild(UI.#createDailyCard(day));
		});
		const today = daily.firstElementChild.querySelector('.day');
		today.textContent = 'Today';
		today.classList.add('today');
		forecastWeather.appendChild(hourly);
		forecastWeather.appendChild(daily);
		UI.unitsToggle.disabled = false;
	}

	static displayError(err) {
		const currentWeather = document.querySelector('#current-weather');
		const error = document.querySelector('#error');
		const errorMessage = error.querySelector('#message');
		currentWeather.classList.add('hidden');
		error.classList.remove('hidden');
		errorMessage.textContent = err.message;
		UI.unitsToggle.disabled = false;
	}

	static hideError() {
		const currentWeather = document.querySelector('#current-weather');
		const error = document.querySelector('#error');
		currentWeather.classList.remove('hidden');
		error.classList.add('hidden');
	}

	static #createHourlyCard(weather) {
		const hour = UI.#createElement('div', { class: 'hour' }, weather.hour);
		const icon = UI.#createWeatherIcon(weather);
		const temp = UI.#createElement('div', { class: 'temp' }, `${weather.temperature}°`);
		const container = UI.#createElement('div', { class: 'container' }, icon, temp);
		const card = UI.#createElement('div', { class: 'card' }, hour, container);
		return card;
	}

	static #createDailyCard(weather) {
		const day = UI.#createElement('div', { class: 'day' }, weather.day);
		const icon = UI.#createWeatherIcon(weather);
		const maxTemp = UI.#createElement('div', { class: 'max-temp' }, `${weather.maxTemperature}°`);
		const minTemp = UI.#createElement('div', { class: 'min-temp' }, `${weather.minTemperature}°`);
		const temp = UI.#createElement('div', { class: 'temp' }, maxTemp, minTemp);
		const container = UI.#createElement('div', { class: 'container' }, icon, temp);
		const card = UI.#createElement('div', { class: 'card' }, day, container);
		return card;
	}

	static #createWeatherIcon({ icon, description }) {
		const weatherIcon = UI.#createElement('img', {
			src: `https://openweathermap.org/img/wn/${icon}@4x.png`,
			alt: UI.#capitalize(description),
			title: UI.#capitalize(description),
		});
		return weatherIcon;
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

	static #createElement(tag, attributes, ...children) {
		const element = document.createElement(tag);
		Object.keys(attributes).forEach((attr) => {
			element.setAttribute(attr, attributes[attr]);
		});
		children.forEach((child) => {
			if (child) {
				if (typeof child === 'string') {
					element.appendChild(document.createTextNode(child));
				} else {
					element.appendChild(child);
				}
			}
		});
		return element;
	}
}

UI.unitsToggle.className = UI.selectedUnits;
UI.unitsToggle.addEventListener('click', UI.toggleUnits);

export default UI;
