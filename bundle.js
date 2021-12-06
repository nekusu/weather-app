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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
	}

	static displayError(err) {
		const currentWeather = document.querySelector('#current-weather');
		const error = document.querySelector('#error');
		const errorMessage = error.querySelector('#message');
		currentWeather.classList.add('hidden');
		error.classList.remove('hidden');
		errorMessage.textContent = err.message;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].loadWeather();
	try {
		const currentWeather = await (0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(location, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayCurrentWeather(currentWeather);
		const forecastWeather = await (0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWeather, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayForecastWeather(forecastWeather);
	} catch (err) {
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayError(err);
	}
}

async function getWeatherByCoords(coords) {
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].loadWeather();
	try {
		const [currentWeather, forecastWeather] = await Promise.all([
			(0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherByCoords)(coords, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits),
			(0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(coords, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits),
		]);
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayCurrentWeather(currentWeather);
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayForecastWeather(forecastWeather);
	} catch (err) {
		_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayError(err);
	}
}

async function getWeatherAtStart() {
	const options = {
		timeout: 5000,
		maximumAge: 0,
	};
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].loadWeather();
	try {
		const position = await getCurrentPosition(options);
		getWeatherByCoords(position.coords);
	} catch (err) {
		getWeather('Argentina');
	}
}

function searchForWeather(e) {
	e.preventDefault();
	const location = _ui__WEBPACK_IMPORTED_MODULE_2__["default"].searchForm.text.value;
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

_ui__WEBPACK_IMPORTED_MODULE_2__["default"].searchForm.addEventListener('submit', searchForWeather);
_ui__WEBPACK_IMPORTED_MODULE_2__["default"].unitsToggle.addEventListener('click', switchUnits);
getWeatherAtStart();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdGO0FBQzdCO0FBQzdCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxDQUFDLHVEQUFjO0FBQ2Y7QUFDQSwrQkFBK0Isa0VBQWlCLFdBQVcseURBQWdCO0FBQzNFLEVBQUUsaUVBQXdCO0FBQzFCLGdDQUFnQyw0REFBa0IsaUJBQWlCLHlEQUFnQjtBQUNuRixFQUFFLGtFQUF5QjtBQUMzQixHQUFHO0FBQ0gsRUFBRSx3REFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsQ0FBQyx1REFBYztBQUNmO0FBQ0E7QUFDQSxHQUFHLDBFQUF5QixTQUFTLHlEQUFnQjtBQUNyRCxHQUFHLDREQUFrQixTQUFTLHlEQUFnQjtBQUM5QztBQUNBLEVBQUUsaUVBQXdCO0FBQzFCLEVBQUUsa0VBQXlCO0FBQzNCLEdBQUc7QUFDSCxFQUFFLHdEQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQWM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUE4QjtBQUM5Qix3RUFBK0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3RXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvdXJseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsImNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8nO1xuY29uc3QgYXBpS2V5ID0gJ2RhMDJkYWJjZmIzZGZmNGM2MTQ4NDZkZDdhNTIzOWJmJztcblxuZXhwb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9O1xuIiwiaW1wb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEN1cnJlbnRXZWF0aGVyIGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHRjb25zdCB7XG5cdFx0XHRjb29yZCwgbWFpbiwgd2luZCwgY2xvdWRzLFxuXHRcdH0gPSBkYXRhO1xuXHRcdHRoaXMubG9uZ2l0dWRlID0gY29vcmQubG9uO1xuXHRcdHRoaXMubGF0aXR1ZGUgPSBjb29yZC5sYXQ7XG5cdFx0dGhpcy50ZW1wZXJhdHVyZSA9IG1haW4udGVtcDtcblx0XHR0aGlzLmh1bWlkaXR5ID0gbWFpbi5odW1pZGl0eTtcblx0XHR0aGlzLndpbmRTcGVlZCA9IHdpbmQuc3BlZWQ7XG5cdFx0dGhpcy5jbG91ZGluZXNzID0gY2xvdWRzLmFsbDtcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXRzID0gJ21ldHJpYycpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlFbmRwb2ludH13ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0cmV0dXJuIG5ldyBDdXJyZW50V2VhdGhlcihkYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJCeUNvb3Jkcyh7IGxvbmdpdHVkZSwgbGF0aXR1ZGUgfSwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fXdlYXRoZXI/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0cmV0dXJuIG5ldyBDdXJyZW50V2VhdGhlcihkYXRhKTtcbn1cblxuZXhwb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEN1cnJlbnRXZWF0aGVyQnlDb29yZHMgfTtcbiIsImltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuXG5jbGFzcyBEYWlseUZvcmVjYXN0IGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHR0aGlzLmRheSA9IGRheWpzLnVuaXgoZGF0YS5kdCkuZm9ybWF0KCdkZGRkJyk7XG5cdFx0dGhpcy5taW5UZW1wZXJhdHVyZSA9IGRhdGEudGVtcC5taW4udG9GaXhlZCgwKTtcblx0XHR0aGlzLm1heFRlbXBlcmF0dXJlID0gZGF0YS50ZW1wLm1heC50b0ZpeGVkKDApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhaWx5Rm9yZWNhc3Q7XG4iLCJpbXBvcnQgeyBhcGlFbmRwb2ludCwgYXBpS2V5IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IEhvdXJseUZvcmVjYXN0IGZyb20gJy4vaG91cmx5Rm9yZWNhc3QnO1xuaW1wb3J0IERhaWx5Rm9yZWNhc3QgZnJvbSAnLi9kYWlseUZvcmVjYXN0JztcblxuY2xhc3MgRm9yZWNhc3RXZWF0aGVyIHtcblx0Y29uc3RydWN0b3IoeyBob3VybHksIGRhaWx5IH0pIHtcblx0XHR0aGlzLmhvdXJseSA9IGhvdXJseS5zbGljZSgxLCA5KS5tYXAoKGhvdXIpID0+IG5ldyBIb3VybHlGb3JlY2FzdChob3VyKSk7XG5cdFx0dGhpcy5kYWlseSA9IGRhaWx5Lm1hcCgoZGF5KSA9PiBuZXcgRGFpbHlGb3JlY2FzdChkYXkpKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXIoeyBsb25naXR1ZGUsIGxhdGl0dWRlIH0sIHVuaXRzID0gJ21ldHJpYycpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlFbmRwb2ludH1vbmVjYWxsP2xvbj0ke2xvbmdpdHVkZX0mbGF0PSR7bGF0aXR1ZGV9JnVuaXRzPSR7dW5pdHN9JmV4Y2x1ZGU9Y3VycmVudCxtaW51dGVseSxhbGVydHMmYXBwaWQ9JHthcGlLZXl9YCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0cmV0dXJuIG5ldyBGb3JlY2FzdFdlYXRoZXIoZGF0YSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZvcmVjYXN0V2VhdGhlcjtcbiIsImltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuXG5jbGFzcyBIb3VybHlGb3JlY2FzdCBleHRlbmRzIFdlYXRoZXIge1xuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0c3VwZXIoZGF0YSk7XG5cdFx0dGhpcy5ob3VyID0gZGF5anMudW5peChkYXRhLmR0KS5mb3JtYXQoJ2ggQScpO1xuXHRcdHRoaXMudGVtcGVyYXR1cmUgPSBkYXRhLnRlbXAudG9GaXhlZCgwKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3VybHlGb3JlY2FzdDtcbiIsImNsYXNzIFVJIHtcblx0c3RhdGljIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKTtcblxuXHRzdGF0aWMgdW5pdHNUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdHMtdG9nZ2xlJyk7XG5cblx0c3RhdGljIHNlbGVjdGVkVW5pdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pdHMnKSB8fCAnbWV0cmljJztcblxuXHRzdGF0aWMgdG9nZ2xlVW5pdHMoKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdtZXRyaWMnKTtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2ltcGVyaWFsJyk7XG5cdFx0VUkuc2VsZWN0ZWRVbml0cyA9IHRoaXMuY2xhc3NOYW1lO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bml0cycsIFVJLnNlbGVjdGVkVW5pdHMpO1xuXHR9XG5cblx0c3RhdGljIGNsZWFyQ3VycmVudFdlYXRoZXIoKSB7XG5cdFx0Y29uc3Qgd2VhdGhlckVsZW1lbnRzID0gVUkuI2dldFdlYXRoZXJFbGVtZW50cygpO1xuXHRcdE9iamVjdC5rZXlzKHdlYXRoZXJFbGVtZW50cykuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdHdlYXRoZXJFbGVtZW50c1tlbF0udGV4dENvbnRlbnQgPSAnLic7XG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgY2xlYXJGb3JlY2FzdFdlYXRoZXIoKSB7XG5cdFx0Y29uc3QgZm9yZWNhc3RXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvcmVjYXN0LXdlYXRoZXInKTtcblx0XHRjb25zdCBob3VybHkgPSBmb3JlY2FzdFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2hvdXJseScpO1xuXHRcdGNvbnN0IGRhaWx5ID0gZm9yZWNhc3RXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyNkYWlseScpO1xuXHRcdGhvdXJseT8ucmVtb3ZlKCk7XG5cdFx0ZGFpbHk/LnJlbW92ZSgpO1xuXHR9XG5cblx0c3RhdGljIGxvYWRXZWF0aGVyKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRcdGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcblx0XHRVSS5oaWRlRXJyb3IoKTtcblx0XHRVSS5jbGVhckN1cnJlbnRXZWF0aGVyKCk7XG5cdFx0VUkuY2xlYXJGb3JlY2FzdFdlYXRoZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBkaXNwbGF5Q3VycmVudFdlYXRoZXIod2VhdGhlcikge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRcdGNvbnN0IHtcblx0XHRcdG5hbWUsIGRlc2NyaXB0aW9uLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIGNsb3VkaW5lc3MsIHdpbmRTcGVlZCxcblx0XHR9ID0gVUkuI2dldFdlYXRoZXJFbGVtZW50cygpO1xuXHRcdGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblx0XHRuYW1lLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuXHRcdGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gVUkuI2NhcGl0YWxpemUod2VhdGhlci5kZXNjcmlwdGlvbik7XG5cdFx0dGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLnRlbXBlcmF0dXJlLnRvRml4ZWQoMCl9wrBgO1xuXHRcdGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5odW1pZGl0eX0lYDtcblx0XHRjbG91ZGluZXNzLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5jbG91ZGluZXNzfSVgO1xuXHRcdHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIud2luZFNwZWVkfSAke1VJLnNlbGVjdGVkVW5pdHMgPT09ICdtZXRyaWMnID8gJ20vcycgOiAnbXBoJ31gO1xuXHR9XG5cblx0c3RhdGljIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIod2VhdGhlcikge1xuXHRcdGNvbnN0IGZvcmVjYXN0V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JlY2FzdC13ZWF0aGVyJyk7XG5cdFx0Y29uc3QgaG91cmx5ID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdob3VybHknIH0pO1xuXHRcdGNvbnN0IGRhaWx5ID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdkYWlseScgfSk7XG5cdFx0d2VhdGhlci5ob3VybHkuZm9yRWFjaCgoaG91cikgPT4ge1xuXHRcdFx0aG91cmx5LmFwcGVuZENoaWxkKFVJLiNjcmVhdGVIb3VybHlDYXJkKGhvdXIpKTtcblx0XHR9KTtcblx0XHR3ZWF0aGVyLmRhaWx5LmZvckVhY2goKGRheSkgPT4ge1xuXHRcdFx0ZGFpbHkuYXBwZW5kQ2hpbGQoVUkuI2NyZWF0ZURhaWx5Q2FyZChkYXkpKTtcblx0XHR9KTtcblx0XHRjb25zdCB0b2RheSA9IGRhaWx5LmZpcnN0RWxlbWVudENoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcblx0XHR0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cdFx0dG9kYXkuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcblx0XHRmb3JlY2FzdFdlYXRoZXIuYXBwZW5kQ2hpbGQoaG91cmx5KTtcblx0XHRmb3JlY2FzdFdlYXRoZXIuYXBwZW5kQ2hpbGQoZGFpbHkpO1xuXHR9XG5cblx0c3RhdGljIGRpc3BsYXlFcnJvcihlcnIpIHtcblx0XHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXInKTtcblx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuXHRcdGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG5cdFx0Y3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0ZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0ZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XG5cdH1cblxuXHRzdGF0aWMgaGlkZUVycm9yKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRcdGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG5cdFx0Y3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0ZXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdH1cblxuXHRzdGF0aWMgI2NyZWF0ZUhvdXJseUNhcmQod2VhdGhlcikge1xuXHRcdGNvbnN0IGhvdXIgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2hvdXInIH0sIHdlYXRoZXIuaG91cik7XG5cdFx0Y29uc3QgaWNvbiA9IFVJLiNjcmVhdGVXZWF0aGVySWNvbih3ZWF0aGVyKTtcblx0XHRjb25zdCB0ZW1wID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0ZW1wJyB9LCBgJHt3ZWF0aGVyLnRlbXBlcmF0dXJlfcKwYCk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjb250YWluZXInIH0sIGljb24sIHRlbXApO1xuXHRcdGNvbnN0IGNhcmQgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NhcmQnIH0sIGhvdXIsIGNvbnRhaW5lcik7XG5cdFx0cmV0dXJuIGNhcmQ7XG5cdH1cblxuXHRzdGF0aWMgI2NyZWF0ZURhaWx5Q2FyZCh3ZWF0aGVyKSB7XG5cdFx0Y29uc3QgZGF5ID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdkYXknIH0sIHdlYXRoZXIuZGF5KTtcblx0XHRjb25zdCBpY29uID0gVUkuI2NyZWF0ZVdlYXRoZXJJY29uKHdlYXRoZXIpO1xuXHRcdGNvbnN0IG1heFRlbXAgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21heC10ZW1wJyB9LCBgJHt3ZWF0aGVyLm1heFRlbXBlcmF0dXJlfcKwYCk7XG5cdFx0Y29uc3QgbWluVGVtcCA9IFVJLiNjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnbWluLXRlbXAnIH0sIGAke3dlYXRoZXIubWluVGVtcGVyYXR1cmV9wrBgKTtcblx0XHRjb25zdCB0ZW1wID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0ZW1wJyB9LCBtYXhUZW1wLCBtaW5UZW1wKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbnRhaW5lcicgfSwgaWNvbiwgdGVtcCk7XG5cdFx0Y29uc3QgY2FyZCA9IFVJLiNjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY2FyZCcgfSwgZGF5LCBjb250YWluZXIpO1xuXHRcdHJldHVybiBjYXJkO1xuXHR9XG5cblx0c3RhdGljICNjcmVhdGVXZWF0aGVySWNvbih7IGljb24sIGRlc2NyaXB0aW9uIH0pIHtcblx0XHRjb25zdCB3ZWF0aGVySWNvbiA9IFVJLiNjcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRzcmM6IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUA0eC5wbmdgLFxuXHRcdFx0YWx0OiBVSS4jY2FwaXRhbGl6ZShkZXNjcmlwdGlvbiksXG5cdFx0XHR0aXRsZTogVUkuI2NhcGl0YWxpemUoZGVzY3JpcHRpb24pLFxuXHRcdH0pO1xuXHRcdHJldHVybiB3ZWF0aGVySWNvbjtcblx0fVxuXG5cdHN0YXRpYyAjZ2V0V2VhdGhlckVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRcdGNvbnN0IG5hbWUgPSBjdXJyZW50V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cdFx0Y29uc3QgdGVtcGVyYXR1cmUgPSBjdXJyZW50V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuXHRcdGNvbnN0IGh1bWlkaXR5ID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5cdFx0Y29uc3QgY2xvdWRpbmVzcyA9IGN1cnJlbnRXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyNjbG91ZGluZXNzJyk7XG5cdFx0Y29uc3Qgd2luZFNwZWVkID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSwgZGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgY2xvdWRpbmVzcywgd2luZFNwZWVkLFxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgI2NhcGl0YWxpemUoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblx0fVxuXG5cdHN0YXRpYyAjY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcblx0XHR9KTtcblx0XHRjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuVUkudW5pdHNUb2dnbGUuY2xhc3NOYW1lID0gVUkuc2VsZWN0ZWRVbml0cztcblVJLnVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkudG9nZ2xlVW5pdHMpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImNsYXNzIFdlYXRoZXIge1xuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Y29uc3QgW3dlYXRoZXJdID0gZGF0YS53ZWF0aGVyO1xuXHRcdHRoaXMubWFpbiA9IHdlYXRoZXIubWFpbjtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcblx0XHR0aGlzLmljb24gPSB3ZWF0aGVyLmljb247XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Q3VycmVudFdlYXRoZXJCeUNvb3JkcyB9IGZyb20gJy4vY3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGdldEZvcmVjYXN0V2VhdGhlciBmcm9tICcuL2ZvcmVjYXN0V2VhdGhlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5cbmxldCBsYXN0TG9jYXRpb247XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuXHRVSS5sb2FkV2VhdGhlcigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24sIFVJLnNlbGVjdGVkVW5pdHMpO1xuXHRcdFVJLmRpc3BsYXlDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlcik7XG5cdFx0Y29uc3QgZm9yZWNhc3RXZWF0aGVyID0gYXdhaXQgZ2V0Rm9yZWNhc3RXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBVSS5zZWxlY3RlZFVuaXRzKTtcblx0XHRVSS5kaXNwbGF5Rm9yZWNhc3RXZWF0aGVyKGZvcmVjYXN0V2VhdGhlcik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdFVJLmRpc3BsYXlFcnJvcihlcnIpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJCeUNvb3Jkcyhjb29yZHMpIHtcblx0VUkubG9hZFdlYXRoZXIoKTtcblx0dHJ5IHtcblx0XHRjb25zdCBbY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0XHRnZXRDdXJyZW50V2VhdGhlckJ5Q29vcmRzKGNvb3JkcywgVUkuc2VsZWN0ZWRVbml0cyksXG5cdFx0XHRnZXRGb3JlY2FzdFdlYXRoZXIoY29vcmRzLCBVSS5zZWxlY3RlZFVuaXRzKSxcblx0XHRdKTtcblx0XHRVSS5kaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuXHRcdFVJLmRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3RXZWF0aGVyKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0VUkuZGlzcGxheUVycm9yKGVycik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckF0U3RhcnQoKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0dGltZW91dDogNTAwMCxcblx0XHRtYXhpbXVtQWdlOiAwLFxuXHR9O1xuXHRVSS5sb2FkV2VhdGhlcigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnMpO1xuXHRcdGdldFdlYXRoZXJCeUNvb3Jkcyhwb3NpdGlvbi5jb29yZHMpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRnZXRXZWF0aGVyKCdBcmdlbnRpbmEnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWFyY2hGb3JXZWF0aGVyKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBsb2NhdGlvbiA9IFVJLnNlYXJjaEZvcm0udGV4dC52YWx1ZTtcblx0aWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uICE9PSBsYXN0TG9jYXRpb24pIHtcblx0XHRnZXRXZWF0aGVyKGxvY2F0aW9uKTtcblx0fVxuXHRsYXN0TG9jYXRpb24gPSBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVW5pdHMoKSB7XG5cdGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlciAjbmFtZScpPy50ZXh0Q29udGVudDtcblx0aWYgKGxvY2F0aW9uICE9PSAnLicpIHtcblx0XHRnZXRXZWF0aGVyKGxvY2F0aW9uKTtcblx0fVxufVxuXG5VSS5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlYXJjaEZvcldlYXRoZXIpO1xuVUkudW5pdHNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hVbml0cyk7XG5nZXRXZWF0aGVyQXRTdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9