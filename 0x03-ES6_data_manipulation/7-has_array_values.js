// Function that checks if all the values of an array exist with in a set
export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) return false;
  }
  return true;
}
