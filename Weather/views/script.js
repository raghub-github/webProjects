const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fd0e7bf409mshf1756d6bd0d0ab5p1f21c9jsna851609f1d88',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            cityName.innerHTML = `${city}  <img src="${response.current.condition.icon}">`
            cloud_pct.innerHTML = response.current.cloud
            temp.innerHTML = response.current.temp_c
            temp2.innerHTML = response.current.temp_c
            feels_like.innerHTML = response.current.feelslike_c
            humidity.innerHTML = response.current.humidity
            humidity2.innerHTML = response.current.humidity
            f_temp.innerHTML = response.current.temp_f
            k_temp.innerHTML = `${Math.round(response.current.temp_c + 273.15)}`
            uv.innerHTML = response.current.uv
            wcondition.innerHTML = response.current.condition.text
            wind_speed.innerHTML = response.current.wind_kph
            wind_speed2.innerHTML = response.current.wind_kph
            wind_directions.innerHTML = response.current.wind_dir
            wind_degree.innerHTML = response.current.wind_degree
            pressure.innerHTML = `${Math.round(response.current.pressure_in * 25.4)}`
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Kolkata");

const getWeather1 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            // cityName.innerHTML = city
            // cloud_pct.innerHTML = response.current.cloud
            temp1.innerHTML = response.current.temp_c
            // temp2.innerHTML = response.current.temp_c
            feels_like1.innerHTML = response.current.feelslike_c
            humidity1.innerHTML = response.current.humidity
            // humidity2.innerHTML = response.current.humidity
            // f_temp.innerHTML = response.current.temp_f
            // k_temp.innerHTML = `${response.current.temp_c + 273.15}`
            // uv1.innerHTML = response.current.uv
            wcondition1.innerHTML = response.current.condition.text
            wind_speed1.innerHTML = response.current.wind_kph
            // wind_speed2.innerHTML = response.current.wind_kph
            wind_directions1.innerHTML = response.current.wind_dir
            wind_degree1.innerHTML = response.current.wind_degree
            pressure1.innerHTML = `${Math.round(response.current.pressure_in * 25.4)}`
            cloud_pct1.innerHTML = response.current.cloud
        })
        .catch(err => console.error(err));
}
getWeather1("Bolpur");

const getWeather2 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            // cityName.innerHTML = city
            // cloud_pct.innerHTML = response.current.cloud
            temp3.innerHTML = response.current.temp_c
            // temp2.innerHTML = response.current.temp_c
            feels_like3.innerHTML = response.current.feelslike_c
            humidity3.innerHTML = response.current.humidity
            // humidity2.innerHTML = response.current.humidity
            // f_temp.innerHTML = response.current.temp_f
            // k_temp.innerHTML = `${response.current.temp_c + 273.15}`
            // uv1.innerHTML = response.current.uv
            wcondition3.innerHTML = response.current.condition.text
            wind_speed3.innerHTML = response.current.wind_kph
            // wind_speed2.innerHTML = response.current.wind_kph
            wind_directions3.innerHTML = response.current.wind_dir
            wind_degree3.innerHTML = response.current.wind_degree
            pressure3.innerHTML = `${Math.round(response.current.pressure_in * 25.4)}`
            cloud_pct3.innerHTML = response.current.cloud
        })
        .catch(err => console.error(err));
}
getWeather2("Bangalore");

const getWeather3 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            // cityName.innerHTML = city
            // cloud_pct.innerHTML = response.current.cloud
            temp4.innerHTML = response.current.temp_c
            // temp2.innerHTML = response.current.temp_c
            feels_like4.innerHTML = response.current.feelslike_c
            humidity4.innerHTML = response.current.humidity
            // humidity2.innerHTML = response.current.humidity
            // f_temp.innerHTML = response.current.temp_f
            // k_temp.innerHTML = `${response.current.temp_c + 273.15}`
            // uv1.innerHTML = response.current.uv
            wcondition4.innerHTML = response.current.condition.text
            wind_speed4.innerHTML = response.current.wind_kph
            // wind_speed2.innerHTML = response.current.wind_kph
            wind_directions4.innerHTML = response.current.wind_dir
            wind_degree4.innerHTML = response.current.wind_degree
            pressure4.innerHTML = `${Math.round(response.current.pressure_in * 25.4)}`
            cloud_pct4.innerHTML = response.current.cloud
        })
        .catch(err => console.error(err));
}
getWeather3("Lucknow");

const getWeather4 = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            // cityName.innerHTML = city
            // cloud_pct.innerHTML = response.current.cloud
            temp5.innerHTML = response.current.temp_c
            // temp2.innerHTML = response.current.temp_c
            feels_like5.innerHTML = response.current.feelslike_c
            humidity5.innerHTML = response.current.humidity
            // humidity2.innerHTML = response.current.humidity
            // f_temp.innerHTML = response.current.temp_f
            // k_temp.innerHTML = `${response.current.temp_c + 273.15}`
            // uv1.innerHTML = response.current.uv
            wcondition5.innerHTML = response.current.condition.text
            wind_speed5.innerHTML = response.current.wind_kph
            // wind_speed2.innerHTML = response.current.wind_kph
            wind_directions5.innerHTML = response.current.wind_dir
            wind_degree5.innerHTML = response.current.wind_degree
            pressure5.innerHTML = `${Math.round(response.current.pressure_in * 25.4)}`
            cloud_pct5.innerHTML = response.current.cloud
        })
        .catch(err => console.error(err));
}
getWeather4("Mumbai");