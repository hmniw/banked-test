const dateTimeOrangeText = 'span.orange-text';
const cityText = 'div h2';
const temperature = '.current-temp span';
const weatherDescription = 'div.bold';
const windLine = 'div.wind-line';
const weatherListItem = 'li span';
const airPressure = 'li .icon-pressure';

class CurrentWeatherComponent {
	checkDateTime(dateTime) {
		return cy
			.get(dateTimeOrangeText)
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(dateTime);
			});
	}

	checkCityText(city) {
		return cy
			.get(cityText)
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(city);
			});
	}

	checkTemperature(temp) {
		return cy
			.get(temperature)
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(`${Math.round(temp)}°C`);
			});
	}

	checkWeatherDescription(description) {
		return cy
			.get(weatherDescription)
			.first()
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(description);
			});
	}

	checkWindInfo(description) {
		return cy
			.get(windLine)
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(description);
			});
	}

	checkHumidityInfo(humidity) {
		return cy
			.get(weatherListItem)
			.contains('Humidity')
			.parent()
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(`Humidity:${humidity}%`);
			});
	}

	checkVisibilityInfo(visibility) {
		return cy
			.get(weatherListItem)
			.contains('Visibility')
			.parent()
			.invoke('text')
			.then((text) => {
				const vis = Math.round(visibility / 1000).toFixed(1);
				expect(text).to.contain(`Visibility:${vis}km`);
			});
	}

	checkDewPointInfo(dewPoint) {
		return cy
			.get(weatherListItem)
			.contains('Dew point')
			.parent()
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(`Dew point:${Math.round(dewPoint)}°C`);
			});
	}

	checkAirPressureInfo(pressure) {
		return cy
			.get(airPressure)
			.parent()
			.invoke('text')
			.then((text) => {
				expect(text).to.contain(`${pressure}hPa`);
			});
	}
}
export default CurrentWeatherComponent;
