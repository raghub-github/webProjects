import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const apiKey = '1526123ea2c76af03f4d082a';
const URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

https.get(URL, (res) => {
    let data = '';
    res.on('data', (chunk)=>{
        data += chunk;
    })
    res.on('end', () =>{        
        const rates = JSON.parse(data).conversion_rates;
        rl.question('Enter the currency code you want to convert to (e.g., INR, EUR, NPR): ', (code) => {
            rl.question('Enter the amount you want to convert: ', (amount) => {
                if(rates[code.toUpperCase()]){
                    const result = amount * rates[code.toUpperCase()];
                    console.log(chalk.green(`${amount} USD is equal to ${result} ${code.toUpperCase()}`));
                } else {
                    console.log(chalk.red('Invalid currency code'));
                }
                rl.close();
            });
        });
    });
});