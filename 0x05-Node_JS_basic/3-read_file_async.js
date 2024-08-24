// Reading a csv file asynchronously, extracting and processing its data with NodeJS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve) => {
    resolve(fs.readFileSync(path));
  })

    .then((data) => {
      // Extract students rows
      let allStudents = data.toString().split('\n').slice(1); // start at line 2 to skip column names
      allStudents = allStudents.filter((val) => val !== '');

      // Get the total number of students
      const numberOfStudents = allStudents.length;

      // Extracting all students and placing them in their respective fields
      const fields = {};
      allStudents.forEach((studentRow) => { // studentRow = "Rick,Ivy,34,CS"
        const studentFieldOfStudy = studentRow.slice(studentRow.lastIndexOf(',') + 1); // get 'CS'
        const studentFirstName = studentRow.slice(0, studentRow.indexOf(','));

        if (!fields[studentFieldOfStudy]) {
          fields[studentFieldOfStudy] = [studentFirstName]; // field -> { 'CS': ['Rick'],'SWE': [] }
        } else { // field -> { 'CS': [].push('Rick'), 'SWE': [] }
          fields[studentFieldOfStudy].push(studentFirstName);
        }
      });

      // Logging processed db information to stdout
      console.log(`Number of students: ${numberOfStudents}`);
      for (const field of Object.keys(fields)) {
        console.log(
          `Number of students in ${field}: ${fields[field].length}.`,
          `List: ${fields[field].join(', ')}`,
        );
      }
    })

    .catch((err) => {
      console.error(err);
      throw Error('Cannot load the database');
    });
}

module.exports = countStudents;
