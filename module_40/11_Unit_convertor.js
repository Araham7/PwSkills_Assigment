/*

# (Q.11). Unit converter:

## A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station to provide temperature readings that are easily understandable to a wider audience.

*/

function celsiusToFahrenheit(c) {
    let tempF = ((9 / 5)*c + 32);
    return tempF;
}

let tempC = 50;

let fahrenheitTemperature = celsiusToFahrenheit(tempC);
console.log(fahrenheitTemperature);




