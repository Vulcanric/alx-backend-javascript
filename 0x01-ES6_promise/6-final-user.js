// Defined function that handles multiple promises

import signUpUser from './4-user-promise'; // Promise 1
import uploadPhoto from './5-photo-reject'; // Promise 2

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((result) => {
    result.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.error,
    }));
  });
}
