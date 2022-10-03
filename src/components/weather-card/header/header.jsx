import dayjs from 'dayjs';

export default function Header({city, date, temp, icon, description, shortDescription}) {
    return (
        <>
            <h2 className="card__title">{city}</h2>
            <time className="card__date" dateTime={dayjs(date).toISOString()}>{dayjs(date).format('DD MMM YYYY')}</time>
            <div className="card__icon">
                <img src={`img/${icon}.png`} alt={shortDescription} />
            </div>
            <div className="card__degree">{temp}</div>
            <div className="card__weather">{description}</div>
        </>
    )
}
