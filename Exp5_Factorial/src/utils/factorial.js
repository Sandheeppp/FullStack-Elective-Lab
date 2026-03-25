export const calculateFactorial = (numStr) => {
  if (!numStr || numStr.trim() === '') return { isValid: false, message: 'Please enter a number.' };
  
  const n = Number(numStr);
  if (n < 0) return { isValid: true, number: numStr, result: 'Invalid (Negative Number)' };
  if (n === 0 || n === 1) return { isValid: true, number: numStr, result: 1 };
  
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  
  return { isValid: true, number: numStr, result: fact };
};
