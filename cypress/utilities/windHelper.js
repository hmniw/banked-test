export const windDirectionCalculator = (degree) => {
	switch (true) {
		case 0 <= degree < 11.25 || 348.75 <= degree <= 360:
			return 'N';
		case 11.25 <= degree < 33.75:
			return 'NNE';
		case 33.75 <= degree < 56.25:
			return 'NE';
		case 56.25 <= degree < 78.75:
			return 'ENE';
		case 78.75 <= degree < 101.25:
			return 'E';
		case 101.25 <= degree < 123.75:
			return 'ESE';
		case 123.75 <= degree < 146.25:
			return 'SE';
		case 146.25 <= degree < 168.75:
			return 'SSE';
		case 168.75 <= degree < 191.25:
			return 'S';
		case 191.25 <= degree < 213.75:
			return 'SSW';
		case 213.75 <= degree < 236.25:
			return 'SW';
		case 236.25 <= degree < 258.75:
			return 'WSW';
		case 258.75 <= degree < 281.25:
			return 'W';
		case 281.25 <= degree < 303.75:
			return 'WNW';
		case 303.75 <= degree < 326.25:
			return 'NW';
		case 326.25 <= degree < 348.75:
			return 'NNW';
		default:
			throw 'Wind degree is greater than 360 or less than 0';
	}
};

export const windDescriptionCalculator = (windSpeed) => {
	switch (true) {
		case 0.0 <= windSpeed < 1:
			return 'Calm';
		case 1 <= windSpeed < 3:
			return 'Light air';
		case 3 <= windSpeed < 4:
			return 'Light breeze';
		case 4 <= windSpeed < 6:
			return 'Gentle breeze';
		case 6 <= windSpeed < 9:
			return 'Moderate breeze';
		case 9 <= windSpeed < 11:
			return 'Fresh breeze';
		case 11 <= windSpeed < 14:
			return 'Strong breeze';
		case 14 <= windSpeed < 17:
			return 'Near gale';
		case 17 <= windSpeed < 21:
			return 'Gale';
		case 21 <= windSpeed < 25:
			return 'Strong gale';
		case 25 <= windSpeed < 29:
			return 'Storm';
		case 29 <= windSpeed < 33:
			return 'Violent storm';
		case windSpeed >= 33:
			return 'Hurricane';
		default:
			throw 'Wind speed value is less than 0';
	}
};
