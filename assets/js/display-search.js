// const resultTextEl = document.querySelector('#result-text');
// const resultContentEl = document.querySelector('#result-content');
// const searchFormEl = document.querySelector('#search-form');
const APIKey = "b0a60f8efad99c4d4adbe735bff7ab4c";
const city = document.getElementById('city').value;

// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   const searchParamsArr = document.location.search.split('&');

//   // Get the query and format values
//   const query = searchParamsArr[0].split('=').pop();
//   const format = searchParamsArr[1].split('=').pop();

//   searchApi(query, format);
// }

// function printResults(resultObj) {
//   console.log(resultObj);

//   // set up `<div>` to hold result content
//   const resultCard = document.createElement('div');
//   resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//   const resultBody = document.createElement('div');
//   resultBody.classList.add('card-body');
//   resultCard.append(resultBody);

//   const titleEl = document.createElement('h3');
//   titleEl.textContent = resultObj.title;

//   const bodyContentEl = document.createElement('p');
//   bodyContentEl.innerHTML =
//     `<strong>Date:</strong>${resultObj.date}<br/>`;

//   if (resultObj.subject) {
//     bodyContentEl.innerHTML +=
//       `<strong>Subjects:</strong>${resultObj.subject.join(', ')}<br/>`;
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> No subject for this entry.';
//   }

//   if (resultObj.description) {
//     bodyContentEl.innerHTML +=
//       `<strong>Description:</strong>${resultObj.description[0]}`;
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong>  No description for this entry.';
//   }

//   const linkButtonEl = document.createElement('a');
//   linkButtonEl.textContent = 'Read More';
//   linkButtonEl.setAttribute('href', resultObj.url);
//   linkButtonEl.classList.add('btn', 'btn-dark');

//   resultBody.append(titleEl, bodyContentEl, linkButtonEl);

//   resultContentEl.append(resultCard);
// }

// Weather API

fetch('http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={APIKey}')
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


fetch('http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={APIKey}', {
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
  

  // if (format) {
  //   locQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${format},${format},${format}&limit={limit}&appid=48c91a2dbbbf9e7731d48f2610a9e713`;
  // }

//   locQueryUrl = `${locQueryUrl}&q=${query}`;

//   fetch(locQueryUrl)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function (locRes) {
//       // write query to page so user knows what they are viewing
//       resultTextEl.textContent = locRes.search.query;

//       console.log(locRes);

//       if (!locRes.results.length) {
//         console.log('No results found!');
//         resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         resultContentEl.textContent = '';
//         for (let i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   const searchInputVal = document.querySelector('#search-input').value;
//   //const formatInputVal = document.querySelector('#format-input').value;

//   //const queryString = `./search-results.html?q=${searchInputVal}&format=${formatInputVal}`;

//   //location.assign(queryString);

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   getParams();
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// getParams();
