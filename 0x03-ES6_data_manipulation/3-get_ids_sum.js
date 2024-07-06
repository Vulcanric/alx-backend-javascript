// Implements reduce
/*
 * getStudentIdsSum - returns the sum of all studenets ids
 * @listOfStudents: Array of student objs returned from fnc `0-get_list_students.js:getListStudents`
 */
export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((sum, { id }) => {
    const newSum = sum + id;
    return newSum;
  }, 0);
}
