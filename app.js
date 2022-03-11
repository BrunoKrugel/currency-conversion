// Import the promise-based version of the fs library
import fs from 'fs';
import getUSD from './currency.js'

getUSD(1).then(function (response) {
    console.log(response);
});

let brl = 2;
let usd = 1
const textData = "|Currency   | Conversion  |\n| ------------ | ------------ |\n|" + brl + "BRL|" + usd + "USD|";

// Write the text to a file
fs.writeFileSync('README.md', textData);