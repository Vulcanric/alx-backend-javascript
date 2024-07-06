export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(departmentList) {
      return Object.keys(departmentList).length;
    },
  };
}
