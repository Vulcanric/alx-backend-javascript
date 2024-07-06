// Implements filter and map
/*
 * updateStudentGradeByCity - returns an array of students objects from a specific city with
 * their new updated grade.
 * @listOfStudents: array of student objects
 * @city: city of students (String)
 * @newGrades: array of objs with the following format:
 * {
 *   studentId: 31,
 *   grade: 78,
 * }
 */
function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter(({ location }) => location === city) // Filter students by location.
    .map((obj) => { // Perform grade updation on the result.
      const student = obj;
      for (const studentGrade of newGrades) {
        if (student.id === studentGrade.studentId) {
          student.grade = studentGrade.grade;
          break;
        } else {
          student.grade = 'N/A';
        }
      }
      return student;
    });
}

export default updateStudentGradeByCity;
