'use strict';
let gradus = document.querySelector('.gradus');
let cityName = document.querySelector('.city__name');
let cityTime = document.querySelector('.city__time');
let weatherType = document.querySelector('.weather__type');
let weatherImg = document.querySelector('.weather__img');
let input = document.querySelector('.user__input');
let cloud = document.querySelector('.cloudly');
let humid = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let form = document.querySelector('.one');
let body = document.querySelector('body');

let daraja;
let holat;
let val;

let country = function (count) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${count}&aqi=no`
  )
    .then(function (a) {
      return a.json();
    })
    .then(function (b) {
      console.log(b);
      daraja = b.current.temp_c;
      holat = b.current.condition.text;
      gradus.textContent = daraja;
      weatherType.textContent = holat;
      cityName.textContent = val;
      cityTime.textContent = b.location.localtime;
      weatherImg.src = b.current.condition.icon;
    })
    .catch(function (error) {
      alert(error);
    });
};
let r = 0;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  val = input.value;
  country(val);
  body.style.backgroundImage = `url(./winter${++r}.jpg)`;
  if (r == 2) {
    r = 0;
  }
});
