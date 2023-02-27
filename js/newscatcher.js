const apiKey = 'FCq5KsLgDjDbGb7iwOWTQhSauvtS9wr5jhuoTfl5EtY';
const apiUrl = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&media=True`;

fetch(apiUrl, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Do something with the response data
  })
  .catch(error => console.error(error));