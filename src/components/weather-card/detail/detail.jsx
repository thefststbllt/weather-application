export default function Detail({onChangeDay, weatherDay, sunrise, sunset, humidity, wind, visibility}) {
    return (
        <>
            <dl className="card__details details">
                <div className="details__group">
                    <dt>humidity</dt>
                    <dd>{humidity}%</dd>
                </div>
                <div className="details__group">
                    <dt>wind</dt>
                    <dd>{wind} m/sec</dd>
                </div>
                <div className="details__group">
                    <dt>visibility</dt>
                    <dd>{visibility}</dd>
                </div>
                <div className="details__group">
                    <dt>sunrise</dt>
                    <dd>{sunrise}</dd>
                </div>
                <div className="details__group">
                    <dt>sunset</dt>
                    <dd>{sunset}</dd>
                </div>
            </dl>
            <div className="card__toggle toggle">
                <input
                    onChange={onChangeDay}
                    className="toggle__radio"
                    type="radio"
                    name="day"
                    id="today"
                    checked={weatherDay === 'today'}
                />
                <label className="toggle__label" htmlFor="today">Today</label>
                <input
                    onChange={onChangeDay}
                    className="toggle__radio"
                    type="radio"
                    name="day"
                    id="tomorrow"
                    checked={weatherDay === 'tomorrow'}
                />
                <label className="toggle__label" htmlFor="tomorrow">Tomorrow</label>
            </div>
        </>
    );
}
