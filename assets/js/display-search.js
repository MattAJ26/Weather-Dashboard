
const APIKey = "b0a60f8efad99c4d4adbe735bff7ab4c";
//const city = document.getElementById("search-input").value;

function apiCallfiveDayForecast(city) {
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;
  // Weather 
  console.log(queryURL)
  fetch(queryURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      let cardsHtml = ""
      for (let index = 0; index < data.list.length; index++) {
        const element = data.list[index];
        const dateString = element.dt_txt.split(" ")
        if(dateString[1] == "00:00:00"){
          cardsHtml += `
           <div class="col-9 col-md-6 d-flex flex-column align-center bg-light p-4 m-3">
           <h5>${dateString[0]}</h5>
      <h5>Temp: ${element.main.temp}°F<img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" /></h5>
      <h6>Humidity: ${element.main.humidity}%</h6>
      <h6>Wind Speed: ${element.wind.speed}mph</h6>

      </div>
          `
        }
      }
      document.getElementById("5dayresult-content").innerHTML=cardsHtml
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

}

function apiCallCurrentForecast(city) {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      document.getElementById("result-text").textContent=city
      document.getElementById("result-content").innerHTML=`
      <div class="col-9 col-md-6 d-flex flex-column align-center bg-light p-4 m-3">
      <h5>Temp: ${data.main.temp}°F<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h5>
      <h6>Humidity: ${data.main.humidity}%</h6>
      <h6>Wind Speed: ${data.wind.speed}mph</h6>

      </div>
      `
    })
    .catch(error => {
      console.error('Error:', error);
    });
}