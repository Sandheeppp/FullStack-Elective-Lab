export const findGreatest = (num1, num2, num3) => {
  if (num1 === '' || num2 === '' || num3 === '') {
    return { isValid: false, message: 'Please enter all three numbers.' };
  }
  
  const n1 = Number(num1);
  const n2 = Number(num2);
  const n3 = Number(num3);
  
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return { isValid: false, message: 'Invalid input. Please enter valid numbers.' };
  }
  
  const greatest = Math.max(n1, n2, n3);
  return { isValid: true, result: greatest };
};
