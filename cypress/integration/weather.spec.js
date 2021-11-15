import CurrentWeatherComponent from '../pages/CurrentWeather';
import { getDateForCurrentWeather } from '../utilities/dateTimeHelper';
import {
	weatherDescriptionBuilder,
	windDescriptionBuilder,
} from '../utilities/descriptionBuilder';

describe('checking that presentation layer content matches API response', () => {
	beforeEach(() => {
		cy.intercept('https://openweathermap.org/data/2.5/onecall?*').as('request');
		cy.visit('https://openweathermap.org/city/2643743');
	});

	it('checks the content', () => {
		const currentWeatherComponent = new CurrentWeatherComponent();
		cy.wait('@request').then((res) => {
			const weatherData = res.response.body.current;
			console.log(weatherData);
			cy.get('.owm-loader')
				.should('not.exist')
				.then(() => {
					currentWeatherComponent.checkDateTime(
						getDateForCurrentWeather(weatherData.dt)
					);
					currentWeatherComponent.checkCityText('London, GB');
					currentWeatherComponent.checkTemperature(weatherData.temp);
					currentWeatherComponent.checkWeatherDescription(
						weatherDescriptionBuilder(
							weatherData.feels_like,
							weatherData.weather[0].description,
							weatherData.wind_speed
						)
					);
					currentWeatherComponent.checkWindInfo(
						windDescriptionBuilder(weatherData.wind_speed, weatherData.wind_deg)
					);
					currentWeatherComponent.checkHumidityInfo(weatherData.humidity);
					currentWeatherComponent.checkAirPressureInfo(weatherData.pressure);
					currentWeatherComponent.checkDewPointInfo(weatherData.dew_point);
					currentWeatherComponent.checkVisibilityInfo(weatherData.visibility);
				});
		});
	});
});
