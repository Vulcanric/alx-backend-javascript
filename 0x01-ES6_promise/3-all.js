/*
 * Defines a new function that resolve all promises made by functions: uploadPhoto() and
 * createUser()
 */

import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const listOfPromises = [ // List of promises
    uploadPhoto(), // Get resolved data
    createUser(),
  ];

  return Promise.all(listOfPromises)
    .then((listOfResolved) => { // [ uploadPhotoResolveData, createUserResolvedData ]
      const { body } = listOfResolved[0];
      const { firstName, lastName } = listOfResolved[1];

      console.log(body, firstName, lastName);
    })
    .catch(() => console.error('Signup system offline'));
}
