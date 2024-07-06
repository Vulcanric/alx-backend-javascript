/*
 * Defined a function, `updateUniqueItems` that returns an updated map for all items
 * with initial quantity at 1.
 *
 * It accepts a map as an argument. The map it accepts for argument is similar to the map created
 * in the file `9-groceries_list.js`.
 *
 * For each entry of the map where the quantity is 1, it updates the quantity to 100.
 * If updating the quantity isn't possible (argument is not a map) the error
 * `Cannot process` is thrown.
 */
function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((value, key) => {
    if (value === 1) { // Update mapping where value is 1
      map.set(key, 100);
    }
  });
}

export default updateUniqueItems;
