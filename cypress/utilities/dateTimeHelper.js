function getDateTimeFromEpoch(epoch) {
	return new Date(epoch * 1000);
}

export const getDateForCurrentWeather = (epoch) => {
	//Format eg 'Nov 14, 08:02pm'
	const date = getDateTimeFromEpoch(epoch);
	const time = date
		.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
		.split(' ');
	const dateString = date.toString().replace(',', '').split(' ');
	return `${dateString[1]} ${dateString[2]}, ${
		time[0]
	}${time[1].toLowerCase()}`;
};

export const getDateFor8DayForecast = (epoch) => {
	//Format eg 'Sun, Nov 14'
	const date = getDateTimeFromEpoch(epoch);
	const dateString = date.toString().replace(',', '').split(' ');
	return `${dateString[0]}, ${dateString[2]} ${dateString[1]}`;
};
