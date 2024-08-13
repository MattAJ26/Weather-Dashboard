const APIKey = "b0a60f8efad99c4d4adbe735bff7ab4c";

// function to call the api for the 5 day forecast
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
        if (dateString[1] == "00:00:00") {
          cardsHtml += `
           <div class=" d-flex flex-column align-left bg-light p-3 m-3">
           <h5 style="border-bottom: 2px solid black;">${dateString[0]}</h5>
      <h5>Temp: ${element.main.temp}°F<img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" /></h5>
      <h5>Humidity: ${element.main.humidity}%</h6>
      <h5>Wind Speed: ${element.wind.speed}mph</h6>

      </div>
          `
        }
      }
      document.getElementById("5dayresult-content").innerHTML = cardsHtml
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

}

// function to call the api for the current forecast
function apiCallCurrentForecast(city) {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      document.getElementById("result-text").textContent = city
      document.getElementById("result-content").innerHTML = `
      <div class="d-flex flex-column align-left bg-light p-1 m-1">
      <h5>Temp: ${data.main.temp}°F<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h5>
      <h5>Humidity: ${data.main.humidity}%</h6>
      <h5>Wind Speed: ${data.wind.speed}mph</h6>

      </div>
      `
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// function to display forecast for previous city searches
function displayPrevForecast() {
  let prevSearch = JSON.parse(localStorage.getItem("weatherforecast")) || [];
  let prevSearchHTML = "";
  for (let index = 0; index < prevSearch.length; index++) {
    const element = prevSearch[index];
    prevSearchHTML += `
    <button onclick=prevSearchButton('${element}')>${element}</button>
    `;
  }
  document.getElementById("prevforecast").innerHTML = prevSearchHTML;
}

// button to click in order to display the previous forecast data
function prevSearchButton(city) {
  console.log("City", city)
apiCallCurrentForecast(city);
apiCallfiveDayForecast(city);
}
displayPrevForecast();