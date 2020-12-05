import React, { useState } from 'react';
import TOP_CITIES from '../constants/topCities';
import Timer from '../components/timer';
import Results from '../components/results';
import { Map } from '../components/map';
import { GEONAMES_USERNAME } from '../config/config';

const EUROPE_LNG = 51;

const Main = () => {
    const [city, setCity] = useState('');
    const [isWrongCity, setIsWrongCity] = useState(false);
    const [cityFeatures, setCityFeatures] = useState([]);
    const [enteredCities, setEnteredCities] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [totalPopulation, setTotalPopulation] = useState(0);

    const getCityData = async (cityName) => {
        const url = `http://api.geonames.org/searchJSON?q=${cityName}&country=&featureClass=P&continentCode=EU&maxRows=10&username=${GEONAMES_USERNAME}`;

        const response = await fetch(url);

        const data = await response.json();

        if (!data.geonames[0] || Number(data.geonames[0].lng) > EUROPE_LNG) {
            setIsWrongCity(true);
            return;
        }

        const newFeatures = cityFeatures.slice();

        newFeatures.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Number(data.geonames[0].lng), Number(data.geonames[0].lat)],
            },
            properties: {
                radius: Math.sqrt(data.geonames[0].population / 10000)
            }
        });

        setTotalPopulation(totalPopulation + Number(data.geonames[0].population));

        setCityFeatures(newFeatures);
    }

    const changeHandler = event => {
        setCity(event.target.value);
        setIsWrongCity(false);
    }

    const searchHandler = () => {
        getCityData(city);
        const newCities = enteredCities.slice();
        newCities.push(city.toLowerCase());
        setEnteredCities(newCities);
        setCity('');
    }

    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    const showTopCities = () => {
        let cities = [];
        TOP_CITIES.forEach(city => {
            if (enteredCities.includes(city.City.toLowerCase())) {
                cities.push(
                    <tr key={city.Population}>
                        <td>{city.Number}</td>
                        <td>{city.City}</td>
                        <td>{city.Population}</td>
                    </tr>)
            }
        })
        return cities;
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m4 l2">
                    <h4 className="timer"><Timer setShowResults={setShowResults} /></h4>
                </div>
                <div className="col s12 m4 l8">
                    <h2>Name the City</h2>

                    <span className="card-title">Enter city name</span>
                    <div>
                        <div className="input-field">
                            <input
                                // placeholder="Enter city"
                                className="grey-input"
                                onChange={changeHandler}
                                onKeyDown={enterHandler}
                                onFocus={() => {
                                    window.scrollTo(0, 117);
                                    setIsWrongCity(false);
                                }}
                                value={city}
                            >
                            </input>

                            {isWrongCity && <div className="wrong-city-label">Wrong city name</div>}

                            {/* <button className="btn grey darken-4" onClick={searchHandler}>
                        Search
                        </button> */}
                            <Map cityFeatures={cityFeatures} />

                        </div>
                    </div>

                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>City</th>
                                <th>Population</th>
                            </tr>
                        </thead>

                        <tbody>
                            {showTopCities()}
                        </tbody>
                    </table>

                </div>
                <div className="col s12 m4 l2">
                    <div className="result">
                        {showResults ? <Results citiesNumber={enteredCities.length} population={totalPopulation} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;