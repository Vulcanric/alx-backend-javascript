import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user;
  try {
    const uploadPhotoData = await uploadPhoto();
    const createUserData = await createUser();
    user = { photo: uploadPhotoData, user: createUserData };
  } catch (e) {
    user = { photo: null, user: null };
  }

  return user;
}
