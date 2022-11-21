const searchForm = document.querySelector('#search-form');
const unitsToggle = document.querySelector('#units-toggle');

unitsToggle.className = localStorage.getItem('units') || 'metric';

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function createElement(tag, attributes, ...children) {
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

function createWeatherIcon({ icon, description }) {
	const weatherIcon = createElement('img', {
		src: `https://openweathermap.org/img/wn/${icon}@4x.png`,
		alt: capitalize(description),
		title: capitalize(description),
	});
	return weatherIcon;
}

function createHourlyCard(weather) {
	const hour = createElement('div', { class: 'hour' }, weather.hour);
	const icon = createWeatherIcon(weather);
	const temp = createElement('div', { class: 'temp' }, `${weather.temperature}°`);
	const container = createElement('div', { class: 'container' }, icon, temp);
	const card = createElement('div', { class: 'card' }, hour, container);
	return card;
}

function createDailyCard(weather) {
	const day = createElement('div', { class: 'day' }, weather.day);
	const icon = createWeatherIcon(weather);
	const maxTemp = createElement('div', { class: 'max-temp' }, `${weather.maxTemperature}°`);
	const minTemp = createElement('div', { class: 'min-temp' }, `${weather.minTemperature}°`);
	const temp = createElement('div', { class: 'temp' }, maxTemp, minTemp);
	const container = createElement('div', { class: 'container' }, icon, temp);
	const card = createElement('div', { class: 'card' }, day, container);
	return card;
}

function getWeatherElements() {
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

function toggleUnits() {
	this.classList.toggle('metric');
	this.classList.toggle('imperial');
	localStorage.setItem('units', this.className);
}

function clearCurrentWeather() {
	const weatherElements = getWeatherElements();
	Object.keys(weatherElements).forEach((el) => {
		weatherElements[el].textContent = '.';
	});
}

function clearForecastWeather() {
	const forecastWeather = document.querySelector('#forecast-weather');
	const hourly = forecastWeather.querySelector('#hourly');
	const daily = forecastWeather.querySelector('#daily');
	hourly?.remove();
	daily?.remove();
}

function showError(err) {
	const currentWeather = document.querySelector('#current-weather');
	const error = document.querySelector('#error');
	const errorMessage = error.querySelector('#message');
	currentWeather.classList.add('hidden');
	error.classList.remove('hidden');
	errorMessage.textContent = err.message;
	unitsToggle.disabled = false;
}

function hideError() {
	const currentWeather = document.querySelector('#current-weather');
	const error = document.querySelector('#error');
	currentWeather.classList.remove('hidden');
	error.classList.add('hidden');
}

function showLoadingAnimation() {
	const currentWeather = document.querySelector('#current-weather');
	currentWeather.classList.add('loading');
	unitsToggle.disabled = true;
	hideError();
	clearCurrentWeather();
	clearForecastWeather();
}

function displayCurrentWeather(weather) {
	const currentWeather = document.querySelector('#current-weather');
	const {
		name, description, temperature, humidity, cloudiness, windSpeed,
	} = getWeatherElements();
	currentWeather.classList.remove('loading');
	name.textContent = `${weather.name}, ${weather.country}`;
	description.textContent = capitalize(weather.description);
	temperature.textContent = `${weather.temperature.toFixed(0)}°`;
	humidity.textContent = `${weather.humidity}%`;
	cloudiness.textContent = `${weather.cloudiness}%`;
	windSpeed.textContent = `${weather.windSpeed} ${unitsToggle.className === 'metric' ? 'm/s' : 'mph'}`;
}

function displayForecastWeather(weather) {
	const forecastWeather = document.querySelector('#forecast-weather');
	const hourly = createElement('div', { id: 'hourly' });
	const daily = createElement('div', { id: 'daily' });
	weather.hourly.forEach((hour) => {
		hourly.appendChild(createHourlyCard(hour));
	});
	weather.daily.forEach((day) => {
		daily.appendChild(createDailyCard(day));
	});
	const today = daily.firstElementChild.querySelector('.day');
	today.textContent = 'Today';
	today.classList.add('today');
	forecastWeather.appendChild(hourly);
	forecastWeather.appendChild(daily);
	unitsToggle.disabled = false;
}

unitsToggle.addEventListener('click', toggleUnits);

export {
	searchForm,
	unitsToggle,
	showError,
	showLoadingAnimation,
	displayCurrentWeather,
	displayForecastWeather,
};
