# Better Precision Function

## Description 📝
The `betterPrecision` function extends JavaScript's `Number.prototype.toPrecision()` method by ensuring the result does not include scientific notation when the exponent is less than 5.
This improves the readability of numbers in common scenarios where scientific notation is not necessary.

## Purpose 🎯
The purpose of this function is to provide a more user-friendly output for numbers by avoiding scientific notation when the exponent is small, making it easier to understand numbers like `1000` instead of `1e+3`.

## How It Works 🔍
1. The function uses `toPrecision()` to initially format the number according to the specified precision.
2. It checks if the resulting string contains scientific notation (using the `e` character).
3. If the exponent part is less than 5, the number is converted back to a normal string representation to avoid scientific notation.
4. Otherwise, the scientific notation is preserved.

## Output 📜
The function returns a stringified version of the number based on the specified precision:
- Avoids scientific notation if the exponent is less than 5.
- Returns the string representation of the number in scientific notation when appropriate.

## Usage 📦
1. Import or include the `betterPrecision` function in your JavaScript file.
2. Call the function with two arguments: the number you want to format and the desired precision.
   ```javascript
   console.log(betterPrecision(124, 1));   // '100'
   console.log(betterPrecision(17000, 1)); // '20000'
   console.log(betterPrecision(389520, 4));// '3.895e+5'

## Conclusion 🚀
This function enhances the default toPrecision() method by avoiding unnecessary scientific notation for numbers with exponents less than 5, making the output more readable and intuitive.