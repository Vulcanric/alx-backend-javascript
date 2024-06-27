// This function returns an iterator to go through every employee in every department
// Takes into argument a report Object created with the previous function `createReportObject`.

export default function createIteratorObject(report) {
  const { allEmployees } = report; // => {engr: ['empName1, empName2'], ui: ['empName3']}
  const listOfNames = Object.values(allEmployees); // => [ [empName1, empName2], [empName3] ]

  return [...listOfNames[0], ...listOfNames[1]]; // Separate names from array
}
