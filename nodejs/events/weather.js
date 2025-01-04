import readline from "readline/promises";

const API_KEY = '27cfc8d0c4b8df5f08069ec450b5cff7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getWeather = async (city) => {
    const URL = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error('City not found');
        }
        const weather = await res.json();
        console.log(weather);
    } catch (error) {
        console.log(error);        
    }
}

const city = await rl.question('Enter the city name to get its weather: ');
await getWeather(city);
rl.close();