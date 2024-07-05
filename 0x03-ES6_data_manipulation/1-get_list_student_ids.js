// Implement array mapping
/*
 * Array.prototype.map - An iterative method that calls a function on every element
 * of the array it's being called on, returning a new array with the computed elements
 */
export default function getListStudentIds(listOfStudents) {
  // List of students is an array of student objects
  if (!(listOfStudents instanceof Array)) {
    return [];
  }
  return listOfStudents.map(({ id }) => id); // Using obj destructuring to obtain obj id
}
