import {getWeatherDescription} from "./weather.js";

/**
 * @param {string} cityName
 */
const logWeatherDescription = cityName => {
    getWeatherDescription(cityName).then(data => {
        console.log(data);
    });
}