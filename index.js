const argv = require('yargs').argv;

let city = argv.d || 'portland';

let request = require('request');

let apiKey = '4ee8c555c358747f30ba08a473ceb49d';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    console.log('body:', body);
  }
});
