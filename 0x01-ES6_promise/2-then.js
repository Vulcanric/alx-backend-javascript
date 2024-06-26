// Using .then as handlers
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => { // If promise is resolved!
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => console.error(Error())); // If the promise didn't get resolved
}
