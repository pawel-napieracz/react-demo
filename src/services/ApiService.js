const BASE_URL = 'https://virtserver.swaggerhub.com/react-demo/React-demo/1.0.2';

function get(uri) {
  return fetch(BASE_URL + uri)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.url + response.status);
      });
}


export default {
  get
}