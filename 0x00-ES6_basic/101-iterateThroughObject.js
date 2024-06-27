// Iterates through every employee names passed from `./100-createIteratorObject.js`
// And process them

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.toString().replace(/,/g, ' | '); // Global replacement (',')
}
