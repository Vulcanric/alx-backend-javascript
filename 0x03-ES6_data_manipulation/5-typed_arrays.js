// Typed Arrays

function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  try {
    int8Array[position] = value;
  } catch (e) {
    throw new Error('Position outside range');
  }

  return new DataView(buffer);
}

export default createInt8TypedArray;
