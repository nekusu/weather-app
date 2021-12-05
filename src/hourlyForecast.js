import dayjs from 'dayjs';
import Weather from './weather';

class HourlyForecast extends Weather {
	constructor(data) {
		super(data);
		this.hour = dayjs.unix(data.dt).hour();
		this.temperature = data.temp;
	}
}

export default HourlyForecast;
