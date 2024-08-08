
const APIKey = "b0a60f8efad99c4d4adbe735bff7ab4c";
const city = document.getElementById("search-input").value;
const queryURL = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

// Weather API
fetch(queryURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


fetch(queryURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      city: 'city',
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  