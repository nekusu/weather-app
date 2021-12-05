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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeather);


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
		this.day = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).format('ddd');
		this.minTemperature = data.temp.min;
		this.maxTemperature = data.temp.max;
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
		this.hour = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).hour();
		this.temperature = data.temp;
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




async function getWeather(e) {
	e.preventDefault();
	const location = _ui__WEBPACK_IMPORTED_MODULE_2__["default"].searchForm.text.value;
	if (location) {
		const currentWeather = await (0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(location, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
		console.log(currentWeather);
		const forecastWeather = await (0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWeather, _ui__WEBPACK_IMPORTED_MODULE_2__["default"].selectedUnits);
		console.log(forecastWeather);
	}
}

_ui__WEBPACK_IMPORTED_MODULE_2__["default"].searchForm.addEventListener('submit', getWeather);
_ui__WEBPACK_IMPORTED_MODULE_2__["default"].unitsToggle.addEventListener('click', getWeather);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLGlFQUF3QjtBQUMxQztBQUNBLCtCQUErQiwyREFBaUIsV0FBVyx5REFBZ0I7QUFDM0U7QUFDQSxnQ0FBZ0MsNERBQWtCLGlCQUFpQix5REFBZ0I7QUFDbkY7QUFDQTtBQUNBOztBQUVBLHVFQUE4QjtBQUM5Qix3RUFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3RXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvdXJseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsImNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8nO1xuY29uc3QgYXBpS2V5ID0gJ2RhMDJkYWJjZmIzZGZmNGM2MTQ4NDZkZDdhNTIzOWJmJztcblxuZXhwb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9O1xuIiwiaW1wb3J0IHsgYXBpRW5kcG9pbnQsIGFwaUtleSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEN1cnJlbnRXZWF0aGVyIGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHRjb25zdCB7XG5cdFx0XHRjb29yZCwgbWFpbiwgd2luZCwgY2xvdWRzLFxuXHRcdH0gPSBkYXRhO1xuXHRcdHRoaXMubG9uZ2l0dWRlID0gY29vcmQubG9uO1xuXHRcdHRoaXMubGF0aXR1ZGUgPSBjb29yZC5sYXQ7XG5cdFx0dGhpcy50ZW1wZXJhdHVyZSA9IG1haW4udGVtcDtcblx0XHR0aGlzLmh1bWlkaXR5ID0gbWFpbi5odW1pZGl0eTtcblx0XHR0aGlzLndpbmRTcGVlZCA9IHdpbmQuc3BlZWQ7XG5cdFx0dGhpcy5jbG91ZGluZXNzID0gY2xvdWRzLmFsbDtcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXRzID0gJ21ldHJpYycpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlFbmRwb2ludH13ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0cmV0dXJuIG5ldyBDdXJyZW50V2VhdGhlcihkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudFdlYXRoZXI7XG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJztcblxuY2xhc3MgRGFpbHlGb3JlY2FzdCBleHRlbmRzIFdlYXRoZXIge1xuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0c3VwZXIoZGF0YSk7XG5cdFx0dGhpcy5kYXkgPSBkYXlqcy51bml4KGRhdGEuZHQpLmZvcm1hdCgnZGRkJyk7XG5cdFx0dGhpcy5taW5UZW1wZXJhdHVyZSA9IGRhdGEudGVtcC5taW47XG5cdFx0dGhpcy5tYXhUZW1wZXJhdHVyZSA9IGRhdGEudGVtcC5tYXg7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFpbHlGb3JlY2FzdDtcbiIsImltcG9ydCB7IGFwaUVuZHBvaW50LCBhcGlLZXkgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgSG91cmx5Rm9yZWNhc3QgZnJvbSAnLi9ob3VybHlGb3JlY2FzdCc7XG5pbXBvcnQgRGFpbHlGb3JlY2FzdCBmcm9tICcuL2RhaWx5Rm9yZWNhc3QnO1xuXG5jbGFzcyBGb3JlY2FzdFdlYXRoZXIge1xuXHRjb25zdHJ1Y3Rvcih7IGhvdXJseSwgZGFpbHkgfSkge1xuXHRcdHRoaXMuaG91cmx5ID0gaG91cmx5LnNsaWNlKDEsIDkpLm1hcCgoaG91cikgPT4gbmV3IEhvdXJseUZvcmVjYXN0KGhvdXIpKTtcblx0XHR0aGlzLmRhaWx5ID0gZGFpbHkubWFwKChkYXkpID0+IG5ldyBEYWlseUZvcmVjYXN0KGRheSkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcih7IGxvbmdpdHVkZSwgbGF0aXR1ZGUgfSwgdW5pdHMgPSAnbWV0cmljJykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fW9uZWNhbGw/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1jdXJyZW50LG1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke2FwaUtleX1gKTtcblx0aWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRyZXR1cm4gbmV3IEZvcmVjYXN0V2VhdGhlcihkYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9yZWNhc3RXZWF0aGVyO1xuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5cbmNsYXNzIEhvdXJseUZvcmVjYXN0IGV4dGVuZHMgV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRzdXBlcihkYXRhKTtcblx0XHR0aGlzLmhvdXIgPSBkYXlqcy51bml4KGRhdGEuZHQpLmhvdXIoKTtcblx0XHR0aGlzLnRlbXBlcmF0dXJlID0gZGF0YS50ZW1wO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseUZvcmVjYXN0O1xuIiwiY2xhc3MgVUkge1xuXHRzdGF0aWMgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuXG5cdHN0YXRpYyB1bml0c1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0cy10b2dnbGUnKTtcblxuXHRzdGF0aWMgc2VsZWN0ZWRVbml0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpIHx8ICdtZXRyaWMnO1xuXG5cdHN0YXRpYyB0b2dnbGVVbml0cygpIHtcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ21ldHJpYycpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaW1wZXJpYWwnKTtcblx0XHRVSS5zZWxlY3RlZFVuaXRzID0gdGhpcy5jbGFzc05hbWU7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXRzJywgVUkuc2VsZWN0ZWRVbml0cyk7XG5cdH1cbn1cblxuVUkudW5pdHNUb2dnbGUuY2xhc3NOYW1lID0gVUkuc2VsZWN0ZWRVbml0cztcblVJLnVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkudG9nZ2xlVW5pdHMpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImNsYXNzIFdlYXRoZXIge1xuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Y29uc3QgW3dlYXRoZXJdID0gZGF0YS53ZWF0aGVyO1xuXHRcdHRoaXMubWFpbiA9IHdlYXRoZXIubWFpbjtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcblx0XHR0aGlzLmljb24gPSB3ZWF0aGVyLmljb247XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0Q3VycmVudFdlYXRoZXIgZnJvbSAnLi9jdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgZ2V0Rm9yZWNhc3RXZWF0aGVyIGZyb20gJy4vZm9yZWNhc3RXZWF0aGVyJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgbG9jYXRpb24gPSBVSS5zZWFyY2hGb3JtLnRleHQudmFsdWU7XG5cdGlmIChsb2NhdGlvbikge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIobG9jYXRpb24sIFVJLnNlbGVjdGVkVW5pdHMpO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcblx0XHRjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBhd2FpdCBnZXRGb3JlY2FzdFdlYXRoZXIoY3VycmVudFdlYXRoZXIsIFVJLnNlbGVjdGVkVW5pdHMpO1xuXHRcdGNvbnNvbGUubG9nKGZvcmVjYXN0V2VhdGhlcik7XG5cdH1cbn1cblxuVUkuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBnZXRXZWF0aGVyKTtcblVJLnVuaXRzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0V2VhdGhlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=