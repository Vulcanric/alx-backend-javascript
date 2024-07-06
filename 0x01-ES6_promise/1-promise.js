/*
 * A function that returns a promise as in "0-promise.js", but this time
 * the function resolves or rejects the promise depending on whether the
 * boolean passed to the function is true or false, respectively.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = { status: 200, body: 'Success' }; // Set response object
      resolve(response);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
