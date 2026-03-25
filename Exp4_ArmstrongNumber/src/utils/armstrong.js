export const checkArmstrong = (numStr) => {
  if (!numStr || numStr.trim() === '') return null;
  
  let sum = 0;
  const digits = numStr.split('');
  const pow = digits.length;
  
  digits.forEach(digit => {
    sum += Math.pow(Number(digit), pow);
  });

  const isArmstrong = (sum === Number(numStr));
  return {
    number: numStr,
    isArmstrong
  };
};
