// More classes
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Returns an array with three ClassRoom objects with different sizes
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
