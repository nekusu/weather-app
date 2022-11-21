/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiEndpoint": () => (/* binding */ apiEndpoint),
/* harmony export */   "apiKey": () => (/* binding */ apiKey)
/* harmony export */ });
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'da02dabcfb3dff4c614846dd7a5239bf';




/***/ }),

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getCurrentWeatherByCoords": () => (/* binding */ getCurrentWeatherByCoords)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");



class CurrentWeather extends _weather__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(data) {
		super(data);
		const {
			coord, main, wind, clouds,
		} = data;
		this.longitude = coord.lon;
		this.latitude = coord.lat;
		this.temperature = main.temp;
		this.humidity = main.humidity;
		this.windSpeed = wind.speed;
		this.cloudiness = clouds.all;
		this.name = data.name;
		this.country = data.sys.country;
	}
}

async function getCurrentWeather(location, units = 'metric') {
	const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}weather?q=${location}&units=${units}&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`);
	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return new CurrentWeather(data);
}

async function getCurrentWeatherByCoords({ longitude, latitude }, units = 'metric') {
	const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}weather?lon=${longitude}&lat=${latitude}&units=${units}&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`);
	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return new CurrentWeather(data);
}




/***/ }),

/***/ "./src/dailyForecast.js":
/*!******************************!*\
  !*** ./src/dailyForecast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");



class DailyForecast extends _weather__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(data) {
		super(data);
		this.day = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).format('dddd');
		this.minTemperature = data.temp.min.toFixed(0);
		this.maxTemperature = data.temp.max.toFixed(0);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyForecast);


/***/ }),

/***/ "./src/forecastWeather.js":
/*!********************************!*\
  !*** ./src/forecastWeather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _hourlyForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyForecast */ "./src/hourlyForecast.js");
/* harmony import */ var _dailyForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyForecast */ "./src/dailyForecast.js");




class ForecastWeather {
	constructor({ hourly, daily }) {
		this.hourly = hourly.slice(1, 9).map((hour) => new _hourlyForecast__WEBPACK_IMPORTED_MODULE_1__["default"](hour));
		this.daily = daily.map((day) => new _dailyForecast__WEBPACK_IMPORTED_MODULE_2__["default"](day));
	}
}

async function getForecastWeather({ longitude, latitude }, units = 'metric') {
	const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}onecall?lon=${longitude}&lat=${latitude}&units=${units}&exclude=current,minutely,alerts&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`);
	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return new ForecastWeather(data);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForecastWeather);


/***/ }),

/***/ "./src/hourlyForecast.js":
/*!*******************************!*\
  !*** ./src/hourlyForecast.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");



class HourlyForecast extends _weather__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor(data) {
		super(data);
		this.hour = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).format('h A');
		this.temperature = data.temp.toFixed(0);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HourlyForecast);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchForm": () => (/* binding */ searchForm),
/* harmony export */   "unitsToggle": () => (/* binding */ unitsToggle),
/* harmony export */   "showError": () => (/* binding */ showError),
/* harmony export */   "showLoadingAnimation": () => (/* binding */ showLoadingAnimation),
/* harmony export */   "displayCurrentWeather": () => (/* binding */ displayCurrentWeather),
/* harmony export */   "displayForecastWeather": () => (/* binding */ displayForecastWeather)
/* harmony export */ });
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




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Weather {
	constructor(data) {
		const [weather] = data.weather;
		this.main = weather.main;
		this.description = weather.description;
		this.icon = weather.icon;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentWeather */ "./src/currentWeather.js");
/* harmony import */ var _forecastWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecastWeather */ "./src/forecastWeather.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




let lastLocation;

function getCurrentPosition(options) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
}

async function getWeather(location) {
	(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showLoadingAnimation)();
	try {
		const currentWeather = await (0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(location, _ui__WEBPACK_IMPORTED_MODULE_2__.unitsToggle.className);
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayCurrentWeather)(currentWeather);
		const forecastWeather = await (0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWeather, _ui__WEBPACK_IMPORTED_MODULE_2__.unitsToggle.className);
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayForecastWeather)(forecastWeather);
	} catch (err) {
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showError)(err);
	}
}

async function getWeatherByCoords(coords) {
	(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showLoadingAnimation)();
	try {
		const [currentWeather, forecastWeather] = await Promise.all([
			(0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherByCoords)(coords, _ui__WEBPACK_IMPORTED_MODULE_2__.unitsToggle.className),
			(0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(coords, _ui__WEBPACK_IMPORTED_MODULE_2__.unitsToggle.className),
		]);
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayCurrentWeather)(currentWeather);
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.displayForecastWeather)(forecastWeather);
	} catch (err) {
		(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showError)(err);
	}
}

async function getWeatherAtStart() {
	const options = {
		timeout: 5000,
		maximumAge: 0,
	};
	(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showLoadingAnimation)();
	try {
		const position = await getCurrentPosition(options);
		getWeatherByCoords(position.coords);
	} catch (err) {
		getWeather('Argentina');
	}
}

function searchForWeather(e) {
	e.preventDefault();
	const location = _ui__WEBPACK_IMPORTED_MODULE_2__.searchForm.text.value;
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

_ui__WEBPACK_IMPORTED_MODULE_2__.searchForm.addEventListener('submit', searchForWeather);
_ui__WEBPACK_IMPORTED_MODULE_2__.unitsToggle.addEventListener('click', switchUnits);
getWeatherAtStart();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdGO0FBQzdCO0FBUXJDOztBQUVkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLENBQUMseURBQW9CO0FBQ3JCO0FBQ0EsK0JBQStCLGtFQUFpQixXQUFXLHNEQUFxQjtBQUNoRixFQUFFLDBEQUFxQjtBQUN2QixnQ0FBZ0MsNERBQWtCLGlCQUFpQixzREFBcUI7QUFDeEYsRUFBRSwyREFBc0I7QUFDeEIsR0FBRztBQUNILEVBQUUsOENBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0EsQ0FBQyx5REFBb0I7QUFDckI7QUFDQTtBQUNBLEdBQUcsMEVBQXlCLFNBQVMsc0RBQXFCO0FBQzFELEdBQUcsNERBQWtCLFNBQVMsc0RBQXFCO0FBQ25EO0FBQ0EsRUFBRSwwREFBcUI7QUFDdkIsRUFBRSwyREFBc0I7QUFDeEIsR0FBRztBQUNILEVBQUUsOENBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHlEQUFvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUEyQjtBQUMzQiw2REFBNEI7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3RXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvdXJseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsImNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8nO1xuY29uc3QgYXBpS2V5ID0gJ2RhMDJkYWJjZmIzZGZmNGM2MTQ4NDZkZDdhNTIzOWJmJztcblxuZXhwb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9O1xuIiwiaW1wb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEN1cnJlbnRXZWF0aGVyIGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHRjb25zdCB7XG5cdFx0XHRjb29yZCwgbWFpbiwgd2luZCwgY2xvdWRzLFxuXHRcdH0gPSBkYXRhO1xuXHRcdHRoaXMubG9uZ2l0dWRlID0gY29vcmQubG9uO1xuXHRcdHRoaXMubGF0aXR1ZGUgPSBjb29yZC5sYXQ7XG5cdFx0dGhpcy50ZW1wZXJhdHVyZSA9IG1haW4udGVtcDtcblx0XHR0aGlzLmh1bWlkaXR5ID0gbWFpbi5odW1pZGl0eTtcblx0XHR0aGlzLndpbmRTcGVlZCA9IHdpbmQuc3BlZWQ7XG5cdFx0dGhpcy5jbG91ZGluZXNzID0gY2xvdWRzLmFsbDtcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG5cdFx0dGhpcy5jb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fXdlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEN1cnJlbnRXZWF0aGVyKGRhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckJ5Q29vcmRzKHsgbG9uZ2l0dWRlLCBsYXRpdHVkZSB9LCB1bml0cyA9ICdtZXRyaWMnKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpRW5kcG9pbnR9d2VhdGhlcj9sb249JHtsb25naXR1ZGV9JmxhdD0ke2xhdGl0dWRlfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEN1cnJlbnRXZWF0aGVyKGRhdGEpO1xufVxuXG5leHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Q3VycmVudFdlYXRoZXJCeUNvb3JkcyB9O1xuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIERhaWx5Rm9yZWNhc3QgZXh0ZW5kcyBXZWF0aGVyIHtcblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdHN1cGVyKGRhdGEpO1xuXHRcdHRoaXMuZGF5ID0gZGF5anMudW5peChkYXRhLmR0KS5mb3JtYXQoJ2RkZGQnKTtcblx0XHR0aGlzLm1pblRlbXBlcmF0dXJlID0gZGF0YS50ZW1wLm1pbi50b0ZpeGVkKDApO1xuXHRcdHRoaXMubWF4VGVtcGVyYXR1cmUgPSBkYXRhLnRlbXAubWF4LnRvRml4ZWQoMCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFpbHlGb3JlY2FzdDtcbiIsImltcG9ydCB7IGFwaUVuZHBvaW50LCBhcGlLZXkgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgSG91cmx5Rm9yZWNhc3QgZnJvbSAnLi9ob3VybHlGb3JlY2FzdCc7XG5pbXBvcnQgRGFpbHlGb3JlY2FzdCBmcm9tICcuL2RhaWx5Rm9yZWNhc3QnO1xuXG5jbGFzcyBGb3JlY2FzdFdlYXRoZXIge1xuXHRjb25zdHJ1Y3Rvcih7IGhvdXJseSwgZGFpbHkgfSkge1xuXHRcdHRoaXMuaG91cmx5ID0gaG91cmx5LnNsaWNlKDEsIDkpLm1hcCgoaG91cikgPT4gbmV3IEhvdXJseUZvcmVjYXN0KGhvdXIpKTtcblx0XHR0aGlzLmRhaWx5ID0gZGFpbHkubWFwKChkYXkpID0+IG5ldyBEYWlseUZvcmVjYXN0KGRheSkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcih7IGxvbmdpdHVkZSwgbGF0aXR1ZGUgfSwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fW9uZWNhbGw/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEZvcmVjYXN0V2VhdGhlcihkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEhvdXJseUZvcmVjYXN0IGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHR0aGlzLmhvdXIgPSBkYXlqcy51bml4KGRhdGEuZHQpLmZvcm1hdCgnaCBBJyk7XG5cdFx0dGhpcy50ZW1wZXJhdHVyZSA9IGRhdGEudGVtcC50b0ZpeGVkKDApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseUZvcmVjYXN0O1xuIiwiY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuY29uc3QgdW5pdHNUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdHMtdG9nZ2xlJyk7XG5cbnVuaXRzVG9nZ2xlLmNsYXNzTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpIHx8ICdtZXRyaWMnO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuXHR9KTtcblx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVySWNvbih7IGljb24sIGRlc2NyaXB0aW9uIH0pIHtcblx0Y29uc3Qgd2VhdGhlckljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0c3JjOiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1ANHgucG5nYCxcblx0XHRhbHQ6IGNhcGl0YWxpemUoZGVzY3JpcHRpb24pLFxuXHRcdHRpdGxlOiBjYXBpdGFsaXplKGRlc2NyaXB0aW9uKSxcblx0fSk7XG5cdHJldHVybiB3ZWF0aGVySWNvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Q2FyZCh3ZWF0aGVyKSB7XG5cdGNvbnN0IGhvdXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaG91cicgfSwgd2VhdGhlci5ob3VyKTtcblx0Y29uc3QgaWNvbiA9IGNyZWF0ZVdlYXRoZXJJY29uKHdlYXRoZXIpO1xuXHRjb25zdCB0ZW1wID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3RlbXAnIH0sIGAke3dlYXRoZXIudGVtcGVyYXR1cmV9wrBgKTtcblx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbnRhaW5lcicgfSwgaWNvbiwgdGVtcCk7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY2FyZCcgfSwgaG91ciwgY29udGFpbmVyKTtcblx0cmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Q2FyZCh3ZWF0aGVyKSB7XG5cdGNvbnN0IGRheSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdkYXknIH0sIHdlYXRoZXIuZGF5KTtcblx0Y29uc3QgaWNvbiA9IGNyZWF0ZVdlYXRoZXJJY29uKHdlYXRoZXIpO1xuXHRjb25zdCBtYXhUZW1wID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21heC10ZW1wJyB9LCBgJHt3ZWF0aGVyLm1heFRlbXBlcmF0dXJlfcKwYCk7XG5cdGNvbnN0IG1pblRlbXAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnbWluLXRlbXAnIH0sIGAke3dlYXRoZXIubWluVGVtcGVyYXR1cmV9wrBgKTtcblx0Y29uc3QgdGVtcCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0ZW1wJyB9LCBtYXhUZW1wLCBtaW5UZW1wKTtcblx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbnRhaW5lcicgfSwgaWNvbiwgdGVtcCk7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY2FyZCcgfSwgZGF5LCBjb250YWluZXIpO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckVsZW1lbnRzKCkge1xuXHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXInKTtcblx0Y29uc3QgbmFtZSA9IGN1cnJlbnRXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cdGNvbnN0IHRlbXBlcmF0dXJlID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcblx0Y29uc3QgaHVtaWRpdHkgPSBjdXJyZW50V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcblx0Y29uc3QgY2xvdWRpbmVzcyA9IGN1cnJlbnRXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyNjbG91ZGluZXNzJyk7XG5cdGNvbnN0IHdpbmRTcGVlZCA9IGN1cnJlbnRXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5cdHJldHVybiB7XG5cdFx0bmFtZSwgZGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgY2xvdWRpbmVzcywgd2luZFNwZWVkLFxuXHR9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcblx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdtZXRyaWMnKTtcblx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdpbXBlcmlhbCcpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pdHMnLCB0aGlzLmNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudFdlYXRoZXIoKSB7XG5cdGNvbnN0IHdlYXRoZXJFbGVtZW50cyA9IGdldFdlYXRoZXJFbGVtZW50cygpO1xuXHRPYmplY3Qua2V5cyh3ZWF0aGVyRWxlbWVudHMpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0d2VhdGhlckVsZW1lbnRzW2VsXS50ZXh0Q29udGVudCA9ICcuJztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9yZWNhc3RXZWF0aGVyKCkge1xuXHRjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3Qtd2VhdGhlcicpO1xuXHRjb25zdCBob3VybHkgPSBmb3JlY2FzdFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2hvdXJseScpO1xuXHRjb25zdCBkYWlseSA9IGZvcmVjYXN0V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjZGFpbHknKTtcblx0aG91cmx5Py5yZW1vdmUoKTtcblx0ZGFpbHk/LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyKSB7XG5cdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuXHRjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuXHRjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0ZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGVyci5tZXNzYWdlO1xuXHR1bml0c1RvZ2dsZS5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoaWRlRXJyb3IoKSB7XG5cdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuXHRjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0ZXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dMb2FkaW5nQW5pbWF0aW9uKCkge1xuXHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXInKTtcblx0Y3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXHR1bml0c1RvZ2dsZS5kaXNhYmxlZCA9IHRydWU7XG5cdGhpZGVFcnJvcigpO1xuXHRjbGVhckN1cnJlbnRXZWF0aGVyKCk7XG5cdGNsZWFyRm9yZWNhc3RXZWF0aGVyKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7XG5cdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRjb25zdCB7XG5cdFx0bmFtZSwgZGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgY2xvdWRpbmVzcywgd2luZFNwZWVkLFxuXHR9ID0gZ2V0V2VhdGhlckVsZW1lbnRzKCk7XG5cdGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblx0bmFtZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIubmFtZX0sICR7d2VhdGhlci5jb3VudHJ5fWA7XG5cdGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZSh3ZWF0aGVyLmRlc2NyaXB0aW9uKTtcblx0dGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLnRlbXBlcmF0dXJlLnRvRml4ZWQoMCl9wrBgO1xuXHRodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuaHVtaWRpdHl9JWA7XG5cdGNsb3VkaW5lc3MudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmNsb3VkaW5lc3N9JWA7XG5cdHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIud2luZFNwZWVkfSAke3VuaXRzVG9nZ2xlLmNsYXNzTmFtZSA9PT0gJ21ldHJpYycgPyAnbS9zJyA6ICdtcGgnfWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIod2VhdGhlcikge1xuXHRjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3Qtd2VhdGhlcicpO1xuXHRjb25zdCBob3VybHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiAnaG91cmx5JyB9KTtcblx0Y29uc3QgZGFpbHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiAnZGFpbHknIH0pO1xuXHR3ZWF0aGVyLmhvdXJseS5mb3JFYWNoKChob3VyKSA9PiB7XG5cdFx0aG91cmx5LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJseUNhcmQoaG91cikpO1xuXHR9KTtcblx0d2VhdGhlci5kYWlseS5mb3JFYWNoKChkYXkpID0+IHtcblx0XHRkYWlseS5hcHBlbmRDaGlsZChjcmVhdGVEYWlseUNhcmQoZGF5KSk7XG5cdH0pO1xuXHRjb25zdCB0b2RheSA9IGRhaWx5LmZpcnN0RWxlbWVudENoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcblx0dG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXHR0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXHRmb3JlY2FzdFdlYXRoZXIuYXBwZW5kQ2hpbGQoaG91cmx5KTtcblx0Zm9yZWNhc3RXZWF0aGVyLmFwcGVuZENoaWxkKGRhaWx5KTtcblx0dW5pdHNUb2dnbGUuZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxudW5pdHNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0cyk7XG5cbmV4cG9ydCB7XG5cdHNlYXJjaEZvcm0sXG5cdHVuaXRzVG9nZ2xlLFxuXHRzaG93RXJyb3IsXG5cdHNob3dMb2FkaW5nQW5pbWF0aW9uLFxuXHRkaXNwbGF5Q3VycmVudFdlYXRoZXIsXG5cdGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIsXG59O1xuIiwiY2xhc3MgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRjb25zdCBbd2VhdGhlcl0gPSBkYXRhLndlYXRoZXI7XG5cdFx0dGhpcy5tYWluID0gd2VhdGhlci5tYWluO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuaWNvbiA9IHdlYXRoZXIuaWNvbjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyLCBnZXRDdXJyZW50V2VhdGhlckJ5Q29vcmRzIH0gZnJvbSAnLi9jdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgZ2V0Rm9yZWNhc3RXZWF0aGVyIGZyb20gJy4vZm9yZWNhc3RXZWF0aGVyJztcbmltcG9ydCB7XG5cdHNlYXJjaEZvcm0sXG5cdHVuaXRzVG9nZ2xlLFxuXHRzaG93RXJyb3IsXG5cdHNob3dMb2FkaW5nQW5pbWF0aW9uLFxuXHRkaXNwbGF5Q3VycmVudFdlYXRoZXIsXG5cdGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIsXG59IGZyb20gJy4vdWknO1xuXG5sZXQgbGFzdExvY2F0aW9uO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50UG9zaXRpb24ob3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcblx0c2hvd0xvYWRpbmdBbmltYXRpb24oKTtcblx0dHJ5IHtcblx0XHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0c1RvZ2dsZS5jbGFzc05hbWUpO1xuXHRcdGRpc3BsYXlDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlcik7XG5cdFx0Y29uc3QgZm9yZWNhc3RXZWF0aGVyID0gYXdhaXQgZ2V0Rm9yZWNhc3RXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCB1bml0c1RvZ2dsZS5jbGFzc05hbWUpO1xuXHRcdGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3RXZWF0aGVyKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0c2hvd0Vycm9yKGVycik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckJ5Q29vcmRzKGNvb3Jkcykge1xuXHRzaG93TG9hZGluZ0FuaW1hdGlvbigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IFtjdXJyZW50V2VhdGhlciwgZm9yZWNhc3RXZWF0aGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRcdGdldEN1cnJlbnRXZWF0aGVyQnlDb29yZHMoY29vcmRzLCB1bml0c1RvZ2dsZS5jbGFzc05hbWUpLFxuXHRcdFx0Z2V0Rm9yZWNhc3RXZWF0aGVyKGNvb3JkcywgdW5pdHNUb2dnbGUuY2xhc3NOYW1lKSxcblx0XHRdKTtcblx0XHRkaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuXHRcdGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3RXZWF0aGVyKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0c2hvd0Vycm9yKGVycik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckF0U3RhcnQoKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0dGltZW91dDogNTAwMCxcblx0XHRtYXhpbXVtQWdlOiAwLFxuXHR9O1xuXHRzaG93TG9hZGluZ0FuaW1hdGlvbigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnMpO1xuXHRcdGdldFdlYXRoZXJCeUNvb3Jkcyhwb3NpdGlvbi5jb29yZHMpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRnZXRXZWF0aGVyKCdBcmdlbnRpbmEnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWFyY2hGb3JXZWF0aGVyKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHNlYXJjaEZvcm0udGV4dC52YWx1ZTtcblx0aWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uICE9PSBsYXN0TG9jYXRpb24pIHtcblx0XHRnZXRXZWF0aGVyKGxvY2F0aW9uKTtcblx0fVxuXHRsYXN0TG9jYXRpb24gPSBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVW5pdHMoKSB7XG5cdGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlciAjbmFtZScpPy50ZXh0Q29udGVudDtcblx0aWYgKGxvY2F0aW9uICE9PSAnLicpIHtcblx0XHRnZXRXZWF0aGVyKGxvY2F0aW9uKTtcblx0fVxufVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlYXJjaEZvcldlYXRoZXIpO1xudW5pdHNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hVbml0cyk7XG5nZXRXZWF0aGVyQXRTdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9