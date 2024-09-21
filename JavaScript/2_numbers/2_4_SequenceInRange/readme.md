# Print Sequence Function

## Description 📝
The `printSequence` function generates and prints a sequence of numbers based on the specified start point, endpoint, and step size.
It handles both ascending and descending sequences depending on the parameters provided.

## Purpose 🎯
The purpose of this function is to provide an easy way to generate and display a series of numbers in a specified range, allowing for customizable increments or decrements.

## How It Works 🔍
1. **Parameters**:
   - `start`: The starting number of the sequence.
   - `end`: The ending number of the sequence.
   - `step`: The increment or decrement value for the sequence.
2. The function initializes an empty string to accumulate the sequence.
3. A loop iterates from the `start` to `end`, adjusting by `step`:
   - For positive `step`, it generates numbers from `start` to `end`.
   - For negative `step`, it generates numbers from `start` down to `end`.
4. Spaces are added between numbers, except after the last number.
5. The complete sequence is printed to the console.

## Output 📜
The function prints a string of numbers separated by spaces, depending on the defined sequence:
- Example Outputs:
  - `printSequence(1, 5, 1);`  // Output: `"1 2 3 4 5"`
  - `printSequence(5, 1, -1);` // Output: `"5 4 3 2 1"`

## Usage 📦
1. Include the `printSequence` function in your JavaScript code.
2. Call the function with the desired start, end, and step parameters:
   ```javascript
   printSequence(1, 5, 1);  // Output: "1 2 3 4 5"
   printSequence(5, 1, -1); // Output: "5 4 3 2 1"

## Conclusion 🚀
The printSequence function provides a simple and flexible way to generate and display sequences of numbers in JavaScript, making it useful for various applications where number series are needed.