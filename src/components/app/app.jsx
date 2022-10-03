import {useEffect, useState} from 'react';
import {useLocation} from '../../hooks/use-location';
import PageTitle from '../page-title/page-title';
import WeatherCard from '../weather-card/weather-card';
import transformWeatherData, {getUrl} from '../../util';
import {API_END_POINT, API_KEY} from '../../const';
import Loader from '../loader/loader';

export default function App() {
    const [latitude, longitude] = useLocation();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        (async () => {
            if(!latitude || !longitude){
                return;
            }

            const url = getUrl(latitude, longitude, API_END_POINT, API_KEY);
            const response = await fetch(url);
            const rawData = await response.json();
            setWeatherData(transformWeatherData(rawData));
        })();
    }, [latitude, longitude])
    return (
        <>
            <PageTitle title="Weather App" />
            {!weatherData ? <Loader /> : <WeatherCard data={weatherData}/>}
        </>
    );
}
