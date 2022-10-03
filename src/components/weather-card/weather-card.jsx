import {useState} from 'react';
import Header from './header/header';
import Detail from './detail/detail';

export default function WeatherCard ({data}) {
    const [currentDay, setCurrentDate] = useState('today');
    const {city, sunrise, sunset} = data;
    const chosenDayWeather = data[currentDay];

    return (
        <arcticle className="card">
            <div className="left-col">
                <Header
                city={city}
                date={chosenDayWeather.date}
                temp={chosenDayWeather.temp}
                icon={chosenDayWeather.icon}
                description={chosenDayWeather.description}
                shortDescription={chosenDayWeather.shortDescription}
                />
            </div>
            <div className="right-col">
                <Detail
                    onChangeDay={({target}) => setCurrentDate(target.id)}
                    weatherDay={currentDay}
                    sunrise={sunrise}
                    sunset={sunset}
                    humidity={chosenDayWeather.humidity}
                    wind={chosenDayWeather.wind}
                    visibility={chosenDayWeather.visibility}
                />
            </div>
        </arcticle>
    )
}
