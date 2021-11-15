import {
	windDescriptionCalculator,
	windDirectionCalculator,
} from './windHelper';

export const weatherDescriptionBuilder = (temp, weather, windSpeed) => {
	const temperature = Math.round(temp);
	const weatherDescription = weather.charAt(0).toUpperCase() + weather.slice(1);
	const windDescription = windDescriptionCalculator(windSpeed);
	return `Feels like ${temperature}°C. ${weatherDescription}. ${windDescription}`;
};

export const windDescriptionBuilder = (windSpeed, windDegree) => {
	const speed = (Math.round(windSpeed * 10) / 10).toFixed(1);
	const direction = windDirectionCalculator(windDegree);
	return `${speed}m/s ${direction}`;
};
