// Creating an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 46,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 36,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

const table = document.getElementById('studentsTable');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
