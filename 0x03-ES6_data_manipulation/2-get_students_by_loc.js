// Implements filter
/*
 * getStudentsByLocation - returns an array of objects who are located in a specific city
 * @listOfStudents: list of student objects
 * @city: the city to target
 */
export default function getStudentsByLocation(listOfStudents, city) {
  // Used obj destructuring to retrieve location of each student obj
  return listOfStudents.filter(({ location }) => location === city);
}
