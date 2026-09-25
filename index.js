function calculateTax(price, taxRate) {
  return price * (taxRate / 100);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(numbers) {
  return Math.max(...numbers);
}

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

function calculateDiscountedPrice(originalPrice, discountpercentage) {
  return originalPrice - (originalPrice / 100 * (discountpercentage / 20));
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };