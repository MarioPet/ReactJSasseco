import React, { useState } from "react";

const WeatherForecasat = () => {

    const [weatherData, setWeatherData] = useState(null)
    let apiKEY = "6230d0527bfa72baaf9b72cfbb62cd8b";

    const HandleChangeEvent = (e) => {
        let lon = e.target.options[e.target.options.selectedIndex].dataset.lon;
        let lat = e.target.options[e.target.options.selectedIndex].dataset.lat;
        console.log(lat);
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKEY}`)
            .then(res => res.json())
            .then(res => setWeatherData(res))
            .catch(err => console.log(err));
    }

    const cities = [{
        title: "Valencia",
        lon: -0.37739,
        lat: 39.469749
    }, {
        title: "Cannes",
        lon: 7.01667,
        lat: 43.549999
    }, {
        title: "Prague",
        lon: 14.42076,
        lat: 50.088039
    }]
    return (
        <div id="forecast" style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div className="data">
                <select onChange={HandleChangeEvent}>
                    {cities.map((c, i) => <option data-lat={c.lat} data-lon={c.lon} key={i}>{c.title}</option>)}
                </select>

                <div className="forecast">
                    {weatherData !== null ? <h2>{weatherData.timezone}</h2> : <h2>No forecast to show...</h2> }
                </div>
            </div>
        </div>
    )
}

export default WeatherForecasat;