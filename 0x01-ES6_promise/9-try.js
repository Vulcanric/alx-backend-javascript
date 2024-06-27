// Try catch / throw

export default function guardrail(mathFunction) {
  let result;
  let queue;

  try {
    result = mathFunction();
  } catch (error) {
    result = error.toString();
  } finally {
    queue = [result, 'Guardrail was processed'];
  }

  return queue;
}
