import dayjs from 'dayjs';

export function getUrl(lat, lon, endpoint, apiKey) {
    return `${endpoint}forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=9`
}

export function getCurrentPosition() {
    if(!window.navigator || !window.navigator.geolocation) {
        throw new Error('Ooops! Geolocation API not supported');
    }
    return new Promise((resolve, reject) => window.navigator.geolocation.getCurrentPosition(resolve, reject));
}

function getVisibility(meterCount) {
    return (meterCount / 1000).toFixed()
}

function getWeatherData(rawData) {
    const {main, wind, visibility, weather, dt_txt} = rawData;
    const {humidity, temp} = main;

    return {
        date: dayjs(dt_txt).toDate(),
        visibility: `${getVisibility(visibility)}/km`,
        humidity: `${humidity}`,
        wind: `${Math.ceil(wind.speed)}`,
        temp: `${Math.ceil(temp)}˚C`,
        icon: weather.at(0).icon,
        description: weather.at(0).description,
        shortDescription: weather.at(0).main
    }
}

export default function transformWeatherData(rawData) {
    const {city, list} = rawData;
    const today = list.at(0);
    const tomorrow = list.at(-1);

    return {
        city: city.name,
        sunrise: dayjs.unix(city.sunrise).format('HH:mm'),
        sunset: dayjs.unix(city.sunset).format('HH:mm'),
        today: getWeatherData(today),
        tomorrow: getWeatherData(tomorrow)
    }
}
