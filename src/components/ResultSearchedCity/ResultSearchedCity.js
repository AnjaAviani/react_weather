import React from "react";

import './ResultSearchedCity.css'

const ResultSearchedCity = ({searchedCityDetails}) => {
    console.log({searchedCityDetails})
    /* unpack api result info */
    //JSON.stringify(searchedCityDetails.data)
    console.log(searchedCityDetails.data)
    return (
        <div className="resultSearchedCity">
            <div className="searchedCityMainDetails">
                <div className="currentTemperature">
                    <div className="currentTemperatureTitle">Temperature</div>
                    <div className="currentTemperatureNumber">{} </div>
                </div>
                <div className="citsearchedCityInfoName">
                    Name: {searchedCityDetails.data.location.name}
                </div>
                <div>
                    <div className="currentWeatherIcon">weather Icon</div>
                </div>
            </div>
            <div className="searchedCityOtherDetails">
                <div>
                    <div className="lowestTemperatureTitle">Daily lowest</div>
                    <div className="lowestTemperatureNumber">{searchedCityDetails.data.cityName}</div>
                </div>
                <div>
                    <div className="highestTemperatureTitle">Daily highest</div>
                    <div className="highestTemperatureNumber">****</div>
                </div>

                <div>
                    <div className="weatherDescriptionTitle">Weather description</div>
                    <div className="weatherDescriptionText">{searchedCityDetails.weatherNow}</div>
                </div>
            </div>
        </div>
    )
}

export default ResultSearchedCity;