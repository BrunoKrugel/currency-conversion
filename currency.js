import axios from "axios";
import fs from 'fs';
import 'dotenv/config';

const uri = process.env.RAPIDAPI_KEY;

async function getUSD(value) {
    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {
            from: 'BRL',
            to: 'USD',
            q: value
        },
        headers: {
            'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
            'x-rapidapi-key': uri
        }
    };
    await axios.request(options).then(function (response) {

        let textData = "|Currency   | Conversion  |\n| ------------ | ------------ |\n|" + value + " BRL|" + response.data.toFixed(2) + " USD|";

        // Write the text to a file
        fs.writeFileSync('README.md', textData);

        return response.data;
    }).catch(function (error) {
        return error;
    });
}

export default getUSD;