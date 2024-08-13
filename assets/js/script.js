//script for handling the form submission of the search button
const searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
  console.log("city",searchInputVal)
  let prevSearch = JSON.parse(localStorage.getItem("weatherforecast")) || []
  prevSearch.push(searchInputVal)
  localStorage.setItem("weatherforecast", JSON.stringify(prevSearch))
  apiCallfiveDayForecast(searchInputVal)
  apiCallCurrentForecast(searchInputVal)
  displayPrevForecast()
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
