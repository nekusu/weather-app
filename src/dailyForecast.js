import dayjs from 'dayjs';
import Weather from './weather';

class DailyForecast extends Weather {
	constructor(data) {
		super(data);
		this.day = dayjs.unix(data.dt).format('ddd');
		this.minTemperature = data.temp.min;
		this.maxTemperature = data.temp.max;
	}
}

export default DailyForecast;
