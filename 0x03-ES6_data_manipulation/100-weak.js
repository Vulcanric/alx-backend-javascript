// Weak link (weak map) data structure

/*
 * Exports a const instance of WeakMap, `weakMap`.
 *
 * Exports a new function named queryAPI. It accepts an endpoint argument like so:
 *
 * {
 *   protocol: 'http',
 *   name: 'getUsers',
 * }
 *
 * Tracks within the weakMap the number of times queryAPI is called for each endpoint.
 *
 * When the number of queries is >= 5 it throw an error with the message `Endpoint load is high`
 */

export const weakMap = new WeakMap();

// Create a tracker that computes the number of calls on an endpoint
function* trackCalls() {
  let calls = 1;
  while (true) {
    yield calls;
    calls += 1;
  }
}

// Create an instance of my generator function
const tracker = trackCalls();

export function queryAPI(endpoint) {
  // Get the number of calls on an endpoint
  weakMap.set(endpoint, tracker.next().value);

  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
