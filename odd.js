function isOdd (num) {
  if (num % 2 !== 0)
    return true;
  else return false;
}

/*An odd number is an integer which is not a multiple of two.
If it is divided by two the result is a fraction. One is the f
irst odd positive number. */

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));