export default function fetchWeather(city) {
  var appid = '3be98a683befe95075cae467a48bd688';
  let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&appid=` + appid

  return fetch(url).then((response) => response.json())
}
