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
	const currentWeather = await (0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(location, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayCurrentWeather(currentWeather);
	const forecastWeather = await (0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWeather, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayForecastWeather(forecastWeather);
}

async function getWeatherByCoords(coords) {
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].loadWeather();
	const [currentWeather, forecastWeather] = await Promise.all([
		(0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherByCoords)(coords, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits),
		(0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(coords, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits),
	]);
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayCurrentWeather(currentWeather);
	_ui__WEBPACK_IMPORTED_MODULE_2__["default"].displayForecastWeather(forecastWeather);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05nRjtBQUM3QjtBQUM3Qjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsQ0FBQyx1REFBYztBQUNmLDhCQUE4QixrRUFBaUIsV0FBVyx5REFBZ0I7QUFDMUUsQ0FBQyxpRUFBd0I7QUFDekIsK0JBQStCLDREQUFrQixpQkFBaUIseURBQWdCO0FBQ2xGLENBQUMsa0VBQXlCO0FBQzFCOztBQUVBO0FBQ0EsQ0FBQyx1REFBYztBQUNmO0FBQ0EsRUFBRSwwRUFBeUIsU0FBUyx5REFBZ0I7QUFDcEQsRUFBRSw0REFBa0IsU0FBUyx5REFBZ0I7QUFDN0M7QUFDQSxDQUFDLGlFQUF3QjtBQUN6QixDQUFDLGtFQUF5QjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1REFBYztBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUVBQThCO0FBQzlCLHdFQUErQjtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGFpbHlGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JlY2FzdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaG91cmx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLCQ9XCJJbnZhbGlkIERhdGVcIixsPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sZz17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGYpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksZik7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmYseTpjLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpofVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sRD1cImVuXCIsdj17fTt2W0RdPU07dmFyIHA9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffSxTPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcjtpZighdClyZXR1cm4gRDtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl2W3RdJiYocj10KSxlJiYodlt0XT1lLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7dltpXT10LHI9aX1yZXR1cm4hbiYmciYmKEQ9cikscnx8IW4mJkR9LHc9ZnVuY3Rpb24odCxlKXtpZihwKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sTz1nO08ubD1TLE8uaT1wLE8udz1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD1TKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihPLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2gobCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBPfSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PSQpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIE8udSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhTy51KGUpfHxlLGg9Ty5wKHQpLCQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1PLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sbD1mdW5jdGlvbih0LGUpe3JldHVybiBPLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELGc9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChoKXtjYXNlIGM6cmV0dXJuIHI/JCgxLDApOiQoMzEsMTEpO2Nhc2UgZjpyZXR1cm4gcj8kKDEsTSk6JCgwLE0rMSk7Y2FzZSBvOnZhciBEPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCx2PSh5PEQ/eSs3OnkpLUQ7cmV0dXJuICQocj9tLXY6bSsoNi12KSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiBsKGcrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gbChnK1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gbChnK1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gbChnK1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPU8ucCh0KSxoPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSwkPShuPXt9LG5bYV09aCtcIkRhdGVcIixuW2RdPWgrXCJEYXRlXCIsbltmXT1oK1wiTW9udGhcIixuW2NdPWgrXCJGdWxsWWVhclwiLG5bdV09aCtcIkhvdXJzXCIsbltzXT1oK1wiTWludXRlc1wiLG5baV09aCtcIlNlY29uZHNcIixuW3JdPWgrXCJNaWxsaXNlY29uZHNcIixuKVtvXSxsPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Znx8bz09PWMpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkWyRdKGwpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgJCYmdGhpcy4kZFskXShsKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbTy5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGgpe3ZhciBkLCQ9dGhpcztyPU51bWJlcihyKTt2YXIgbD1PLnAoaCkseT1mdW5jdGlvbih0KXt2YXIgZT13KCQpO3JldHVybiBPLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksJCl9O2lmKGw9PT1mKXJldHVybiB0aGlzLnNldChmLHRoaXMuJE0rcik7aWYobD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4keStyKTtpZihsPT09YSlyZXR1cm4geSgxKTtpZihsPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVtsXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gTy53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8JDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1PLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGY9bi5tb250aHMsaD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc3Vic3RyKDAscyl9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIE8ucyhzJTEyfHwxMix0LFwiMFwiKX0sZD1uLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpPLnMoYSsxLDIsXCIwXCIpLE1NTTpoKG4ubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpPLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKG4ud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKG4ud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOk8ucyhzLDIsXCIwXCIpLGg6YygxKSxoaDpjKDIpLGE6ZChzLHUsITApLEE6ZChzLHUsITEpLG06U3RyaW5nKHUpLG1tOk8ucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOk8ucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpPLnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fGxbdF18fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCwkKXt2YXIgbCx5PU8ucChkKSxNPXcociksbT0oTS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1NLEQ9Ty5tKHRoaXMsTSk7cmV0dXJuIEQ9KGw9e30sbFtjXT1ELzEyLGxbZl09RCxsW2hdPUQvMyxsW29dPShnLW0pLzYwNDhlNSxsW2FdPShnLW0pLzg2NGU1LGxbdV09Zy9uLGxbc109Zy9lLGxbaV09Zy90LGwpW3ldfHxnLCQ/RDpPLmEoRCl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihmKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIHZbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9Uyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIE8udyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksYj1fLnByb3RvdHlwZTtyZXR1cm4gdy5wcm90b3R5cGU9YixbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGZdLFtcIiR5XCIsY10sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7Ylt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLHcuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyx3KSx0LiRpPSEwKSx3fSx3LmxvY2FsZT1TLHcuaXNEYXlqcz1wLHcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdygxZTMqdCl9LHcuZW49dltEXSx3LkxzPXYsdy5wPXt9LHd9KSk7IiwiY29uc3QgYXBpRW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41Lyc7XG5jb25zdCBhcGlLZXkgPSAnZGEwMmRhYmNmYjNkZmY0YzYxNDg0NmRkN2E1MjM5YmYnO1xuXG5leHBvcnQgeyBhcGlFbmRwb2ludCwgYXBpS2V5IH07XG4iLCJpbXBvcnQgeyBhcGlFbmRwb2ludCwgYXBpS2V5IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJztcblxuY2xhc3MgQ3VycmVudFdlYXRoZXIgZXh0ZW5kcyBXZWF0aGVyIHtcblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdHN1cGVyKGRhdGEpO1xuXHRcdGNvbnN0IHtcblx0XHRcdGNvb3JkLCBtYWluLCB3aW5kLCBjbG91ZHMsXG5cdFx0fSA9IGRhdGE7XG5cdFx0dGhpcy5sb25naXR1ZGUgPSBjb29yZC5sb247XG5cdFx0dGhpcy5sYXRpdHVkZSA9IGNvb3JkLmxhdDtcblx0XHR0aGlzLnRlbXBlcmF0dXJlID0gbWFpbi50ZW1wO1xuXHRcdHRoaXMuaHVtaWRpdHkgPSBtYWluLmh1bWlkaXR5O1xuXHRcdHRoaXMud2luZFNwZWVkID0gd2luZC5zcGVlZDtcblx0XHR0aGlzLmNsb3VkaW5lc3MgPSBjbG91ZHMuYWxsO1xuXHRcdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fXdlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEN1cnJlbnRXZWF0aGVyKGRhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckJ5Q29vcmRzKHsgbG9uZ2l0dWRlLCBsYXRpdHVkZSB9LCB1bml0cyA9ICdtZXRyaWMnKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpRW5kcG9pbnR9d2VhdGhlcj9sb249JHtsb25naXR1ZGV9JmxhdD0ke2xhdGl0dWRlfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEN1cnJlbnRXZWF0aGVyKGRhdGEpO1xufVxuXG5leHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Q3VycmVudFdlYXRoZXJCeUNvb3JkcyB9O1xuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIERhaWx5Rm9yZWNhc3QgZXh0ZW5kcyBXZWF0aGVyIHtcblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdHN1cGVyKGRhdGEpO1xuXHRcdHRoaXMuZGF5ID0gZGF5anMudW5peChkYXRhLmR0KS5mb3JtYXQoJ2RkZGQnKTtcblx0XHR0aGlzLm1pblRlbXBlcmF0dXJlID0gZGF0YS50ZW1wLm1pbi50b0ZpeGVkKDApO1xuXHRcdHRoaXMubWF4VGVtcGVyYXR1cmUgPSBkYXRhLnRlbXAubWF4LnRvRml4ZWQoMCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFpbHlGb3JlY2FzdDtcbiIsImltcG9ydCB7IGFwaUVuZHBvaW50LCBhcGlLZXkgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgSG91cmx5Rm9yZWNhc3QgZnJvbSAnLi9ob3VybHlGb3JlY2FzdCc7XG5pbXBvcnQgRGFpbHlGb3JlY2FzdCBmcm9tICcuL2RhaWx5Rm9yZWNhc3QnO1xuXG5jbGFzcyBGb3JlY2FzdFdlYXRoZXIge1xuXHRjb25zdHJ1Y3Rvcih7IGhvdXJseSwgZGFpbHkgfSkge1xuXHRcdHRoaXMuaG91cmx5ID0gaG91cmx5LnNsaWNlKDEsIDkpLm1hcCgoaG91cikgPT4gbmV3IEhvdXJseUZvcmVjYXN0KGhvdXIpKTtcblx0XHR0aGlzLmRhaWx5ID0gZGFpbHkubWFwKChkYXkpID0+IG5ldyBEYWlseUZvcmVjYXN0KGRheSkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcih7IGxvbmdpdHVkZSwgbGF0aXR1ZGUgfSwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fW9uZWNhbGw/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEZvcmVjYXN0V2VhdGhlcihkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEhvdXJseUZvcmVjYXN0IGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHR0aGlzLmhvdXIgPSBkYXlqcy51bml4KGRhdGEuZHQpLmZvcm1hdCgnaCBBJyk7XG5cdFx0dGhpcy50ZW1wZXJhdHVyZSA9IGRhdGEudGVtcC50b0ZpeGVkKDApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseUZvcmVjYXN0O1xuIiwiY2xhc3MgVUkge1xuXHRzdGF0aWMgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuXG5cdHN0YXRpYyB1bml0c1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0cy10b2dnbGUnKTtcblxuXHRzdGF0aWMgc2VsZWN0ZWRVbml0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpIHx8ICdtZXRyaWMnO1xuXG5cdHN0YXRpYyB0b2dnbGVVbml0cygpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ21ldHJpYycpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaW1wZXJpYWwnKTtcblx0XHRVSS5zZWxlY3RlZFVuaXRzID0gdGhpcy5jbGFzc05hbWU7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXRzJywgVUkuc2VsZWN0ZWRVbml0cyk7XG5cdH1cblxuXHRzdGF0aWMgY2xlYXJDdXJyZW50V2VhdGhlcigpIHtcblx0XHRjb25zdCB3ZWF0aGVyRWxlbWVudHMgPSBVSS4jZ2V0V2VhdGhlckVsZW1lbnRzKCk7XG5cdFx0T2JqZWN0LmtleXMod2VhdGhlckVsZW1lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0d2VhdGhlckVsZW1lbnRzW2VsXS50ZXh0Q29udGVudCA9ICcuJztcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyBjbGVhckZvcmVjYXN0V2VhdGhlcigpIHtcblx0XHRjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3Qtd2VhdGhlcicpO1xuXHRcdGNvbnN0IGhvdXJseSA9IGZvcmVjYXN0V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjaG91cmx5Jyk7XG5cdFx0Y29uc3QgZGFpbHkgPSBmb3JlY2FzdFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2RhaWx5Jyk7XG5cdFx0aG91cmx5Py5yZW1vdmUoKTtcblx0XHRkYWlseT8ucmVtb3ZlKCk7XG5cdH1cblxuXHRzdGF0aWMgbG9hZFdlYXRoZXIoKSB7XG5cdFx0Y29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyJyk7XG5cdFx0Y3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXHRcdFVJLmNsZWFyQ3VycmVudFdlYXRoZXIoKTtcblx0XHRVSS5jbGVhckZvcmVjYXN0V2VhdGhlcigpO1xuXHR9XG5cblx0c3RhdGljIGRpc3BsYXlDdXJyZW50V2VhdGhlcih3ZWF0aGVyKSB7XG5cdFx0Y29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyJyk7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bmFtZSwgZGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgY2xvdWRpbmVzcywgd2luZFNwZWVkLFxuXHRcdH0gPSBVSS4jZ2V0V2VhdGhlckVsZW1lbnRzKCk7XG5cdFx0Y3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXHRcdG5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLm5hbWU7XG5cdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBVSS4jY2FwaXRhbGl6ZSh3ZWF0aGVyLmRlc2NyaXB0aW9uKTtcblx0XHR0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIudGVtcGVyYXR1cmUudG9GaXhlZCgwKX3CsGA7XG5cdFx0aHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmh1bWlkaXR5fSVgO1xuXHRcdGNsb3VkaW5lc3MudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmNsb3VkaW5lc3N9JWA7XG5cdFx0d2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci53aW5kU3BlZWR9ICR7VUkuc2VsZWN0ZWRVbml0cyA9PT0gJ21ldHJpYycgPyAnbS9zJyA6ICdtcGgnfWA7XG5cdH1cblxuXHRzdGF0aWMgZGlzcGxheUZvcmVjYXN0V2VhdGhlcih3ZWF0aGVyKSB7XG5cdFx0Y29uc3QgZm9yZWNhc3RXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvcmVjYXN0LXdlYXRoZXInKTtcblx0XHRjb25zdCBob3VybHkgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogJ2hvdXJseScgfSk7XG5cdFx0Y29uc3QgZGFpbHkgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogJ2RhaWx5JyB9KTtcblx0XHR3ZWF0aGVyLmhvdXJseS5mb3JFYWNoKChob3VyKSA9PiB7XG5cdFx0XHRob3VybHkuYXBwZW5kQ2hpbGQoVUkuI2NyZWF0ZUhvdXJseUNhcmQoaG91cikpO1xuXHRcdH0pO1xuXHRcdHdlYXRoZXIuZGFpbHkuZm9yRWFjaCgoZGF5KSA9PiB7XG5cdFx0XHRkYWlseS5hcHBlbmRDaGlsZChVSS4jY3JlYXRlRGFpbHlDYXJkKGRheSkpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHRvZGF5ID0gZGFpbHkuZmlyc3RFbGVtZW50Q2hpbGQucXVlcnlTZWxlY3RvcignLmRheScpO1xuXHRcdHRvZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5Jztcblx0XHR0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXHRcdGZvcmVjYXN0V2VhdGhlci5hcHBlbmRDaGlsZChob3VybHkpO1xuXHRcdGZvcmVjYXN0V2VhdGhlci5hcHBlbmRDaGlsZChkYWlseSk7XG5cdH1cblxuXHRzdGF0aWMgI2NyZWF0ZUhvdXJseUNhcmQod2VhdGhlcikge1xuXHRcdGNvbnN0IGhvdXIgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2hvdXInIH0sIHdlYXRoZXIuaG91cik7XG5cdFx0Y29uc3QgaWNvbiA9IFVJLiNjcmVhdGVXZWF0aGVySWNvbih3ZWF0aGVyKTtcblx0XHRjb25zdCB0ZW1wID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0ZW1wJyB9LCBgJHt3ZWF0aGVyLnRlbXBlcmF0dXJlfcKwYCk7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjb250YWluZXInIH0sIGljb24sIHRlbXApO1xuXHRcdGNvbnN0IGNhcmQgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NhcmQnIH0sIGhvdXIsIGNvbnRhaW5lcik7XG5cdFx0cmV0dXJuIGNhcmQ7XG5cdH1cblxuXHRzdGF0aWMgI2NyZWF0ZURhaWx5Q2FyZCh3ZWF0aGVyKSB7XG5cdFx0Y29uc3QgZGF5ID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdkYXknIH0sIHdlYXRoZXIuZGF5KTtcblx0XHRjb25zdCBpY29uID0gVUkuI2NyZWF0ZVdlYXRoZXJJY29uKHdlYXRoZXIpO1xuXHRcdGNvbnN0IG1heFRlbXAgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ21heC10ZW1wJyB9LCBgJHt3ZWF0aGVyLm1heFRlbXBlcmF0dXJlfcKwYCk7XG5cdFx0Y29uc3QgbWluVGVtcCA9IFVJLiNjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnbWluLXRlbXAnIH0sIGAke3dlYXRoZXIubWluVGVtcGVyYXR1cmV9wrBgKTtcblx0XHRjb25zdCB0ZW1wID0gVUkuI2NyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0ZW1wJyB9LCBtYXhUZW1wLCBtaW5UZW1wKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBVSS4jY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2NvbnRhaW5lcicgfSwgaWNvbiwgdGVtcCk7XG5cdFx0Y29uc3QgY2FyZCA9IFVJLiNjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY2FyZCcgfSwgZGF5LCBjb250YWluZXIpO1xuXHRcdHJldHVybiBjYXJkO1xuXHR9XG5cblx0c3RhdGljICNjcmVhdGVXZWF0aGVySWNvbih7IGljb24sIGRlc2NyaXB0aW9uIH0pIHtcblx0XHRjb25zdCB3ZWF0aGVySWNvbiA9IFVJLiNjcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRzcmM6IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUA0eC5wbmdgLFxuXHRcdFx0YWx0OiBVSS4jY2FwaXRhbGl6ZShkZXNjcmlwdGlvbiksXG5cdFx0XHR0aXRsZTogVUkuI2NhcGl0YWxpemUoZGVzY3JpcHRpb24pLFxuXHRcdH0pO1xuXHRcdHJldHVybiB3ZWF0aGVySWNvbjtcblx0fVxuXG5cdHN0YXRpYyAjZ2V0V2VhdGhlckVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlcicpO1xuXHRcdGNvbnN0IG5hbWUgPSBjdXJyZW50V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cdFx0Y29uc3QgdGVtcGVyYXR1cmUgPSBjdXJyZW50V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuXHRcdGNvbnN0IGh1bWlkaXR5ID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5cdFx0Y29uc3QgY2xvdWRpbmVzcyA9IGN1cnJlbnRXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJyNjbG91ZGluZXNzJyk7XG5cdFx0Y29uc3Qgd2luZFNwZWVkID0gY3VycmVudFdlYXRoZXIucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSwgZGVzY3JpcHRpb24sIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgY2xvdWRpbmVzcywgd2luZFNwZWVkLFxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgI2NhcGl0YWxpemUoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblx0fVxuXG5cdHN0YXRpYyAjY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcblx0XHR9KTtcblx0XHRjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuVUkudW5pdHNUb2dnbGUuY2xhc3NOYW1lID0gVUkuc2VsZWN0ZWRVbml0cztcblVJLnVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkudG9nZ2xlVW5pdHMpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImNsYXNzIFdlYXRoZXIge1xuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Y29uc3QgW3dlYXRoZXJdID0gZGF0YS53ZWF0aGVyO1xuXHRcdHRoaXMubWFpbiA9IHdlYXRoZXIubWFpbjtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcblx0XHR0aGlzLmljb24gPSB3ZWF0aGVyLmljb247XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Q3VycmVudFdlYXRoZXJCeUNvb3JkcyB9IGZyb20gJy4vY3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGdldEZvcmVjYXN0V2VhdGhlciBmcm9tICcuL2ZvcmVjYXN0V2VhdGhlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5cbmxldCBsYXN0TG9jYXRpb247XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuXHRVSS5sb2FkV2VhdGhlcigpO1xuXHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCBVSS5zZWxlY3RlZFVuaXRzKTtcblx0VUkuZGlzcGxheUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKTtcblx0Y29uc3QgZm9yZWNhc3RXZWF0aGVyID0gYXdhaXQgZ2V0Rm9yZWNhc3RXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBVSS5zZWxlY3RlZFVuaXRzKTtcblx0VUkuZGlzcGxheUZvcmVjYXN0V2VhdGhlcihmb3JlY2FzdFdlYXRoZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyQnlDb29yZHMoY29vcmRzKSB7XG5cdFVJLmxvYWRXZWF0aGVyKCk7XG5cdGNvbnN0IFtjdXJyZW50V2VhdGhlciwgZm9yZWNhc3RXZWF0aGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRnZXRDdXJyZW50V2VhdGhlckJ5Q29vcmRzKGNvb3JkcywgVUkuc2VsZWN0ZWRVbml0cyksXG5cdFx0Z2V0Rm9yZWNhc3RXZWF0aGVyKGNvb3JkcywgVUkuc2VsZWN0ZWRVbml0cyksXG5cdF0pO1xuXHRVSS5kaXNwbGF5Q3VycmVudFdlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuXHRVSS5kaXNwbGF5Rm9yZWNhc3RXZWF0aGVyKGZvcmVjYXN0V2VhdGhlcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJBdFN0YXJ0KCkge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdHRpbWVvdXQ6IDUwMDAsXG5cdFx0bWF4aW11bUFnZTogMCxcblx0fTtcblx0VUkubG9hZFdlYXRoZXIoKTtcblx0dHJ5IHtcblx0XHRjb25zdCBwb3NpdGlvbiA9IGF3YWl0IGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zKTtcblx0XHRnZXRXZWF0aGVyQnlDb29yZHMocG9zaXRpb24uY29vcmRzKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Z2V0V2VhdGhlcignQXJnZW50aW5hJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VhcmNoRm9yV2VhdGhlcihlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbG9jYXRpb24gPSBVSS5zZWFyY2hGb3JtLnRleHQudmFsdWU7XG5cdGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbiAhPT0gbGFzdExvY2F0aW9uKSB7XG5cdFx0Z2V0V2VhdGhlcihsb2NhdGlvbik7XG5cdH1cblx0bGFzdExvY2F0aW9uID0gbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFVuaXRzKCkge1xuXHRjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXIgI25hbWUnKT8udGV4dENvbnRlbnQ7XG5cdGlmIChsb2NhdGlvbiAhPT0gJy4nKSB7XG5cdFx0Z2V0V2VhdGhlcihsb2NhdGlvbik7XG5cdH1cbn1cblxuVUkuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZWFyY2hGb3JXZWF0aGVyKTtcblVJLnVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVW5pdHMpO1xuZ2V0V2VhdGhlckF0U3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==