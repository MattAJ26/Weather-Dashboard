const searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
  console.log("city",searchInputVal)
  apiCallfiveDayForecast(searchInputVal)
  apiCallCurrentForecast(searchInputVal)
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
