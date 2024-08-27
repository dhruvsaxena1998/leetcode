// Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

// The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

// Input: expression = "-1/2+1/2"
// Output: "0/1"

// Input: expression = "-1/2+1/2+1/3"
// Output: "1/3"

// Input: expression = "1/3-1/2"
// Output: "-1/6"

const findGCD = (a, b) => {
  // findGCD(48, 64):
  // -> (64, 48 % 64 -> 48)
  // -> (48, 64 % 48 -> 16)
  // -> (16, 46 % 16 -> 0)
  // -> 16

  if (b === 0) {
    // b < 0 ? ~(b-1) : b  (alternative way to convert negative to positive)
    return Math.abs(a);
  }

  return findGCD(b, a % b);
};

const fractionAddition = (expression) => {
  let numerator = 0;
  let denominator = 1;

  const matches = expression.matchAll(/([+-]?\d+)\/(\d+)/g);

  for (const match of matches) {
    let currentNumerator = parseInt(match[1]);
    let currentDenominator = parseInt(match[2]);

    /**
     *   x       a
     *  ___  +  ___
     *   y       b
     *
     *  (x*b) + (y*a) / y * b
     */

    numerator = numerator * currentDenominator + denominator * currentNumerator;
    denominator = denominator * currentDenominator;
  }

  const gcd = findGCD(numerator, denominator);

  return `${numerator / gcd}/${denominator / gcd}`;
};

console.log(fractionAddition("-1/2+1/2"), "0/1");
console.log(fractionAddition("-1/2+1/2+1/3"), "1/3");
console.log(fractionAddition("1/3-1/2"), "1/6");
