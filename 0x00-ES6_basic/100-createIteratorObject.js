// This function returns an iterator to go through every employee in every department
// Takes into argument a report Object created with the previous function `createReportObject`.

export default function createIteratorObject(report) {
  const { allEmployees } = report; // => {engr: ['empName1, empName2'], ...}
  const arrays = Object.values(allEmployees); // => [ [empName1, empName2], ... ]

  // Iterate through 2D array
  const iterator = [];
  for (const array of arrays) {
    iterator.push(...array); // Extract and add names from array to the iterator, respectively
  }

  return iterator;
}
