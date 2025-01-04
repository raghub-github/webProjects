import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const URL = 'https://official-joke-api.appspot.com/random_joke';
    https.get(URL, (res) => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            const joke = JSON.parse(data);
            console.log(chalk.green(joke.setup));
            console.log(chalk.red(joke.punchline));
        });
    });
 
}

getJoke();