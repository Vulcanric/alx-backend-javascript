// Throw error

export default function divideFunction(numerator, denominator) {
  const result = numerator / denominator;

  if (!Number.isFinite(result)) {
    throw new Error('cannot divide by zero');
  } else {
    return result;
  }
}
