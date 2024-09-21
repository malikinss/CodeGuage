# Find Minimum Function

## Description 📝
The `findMinimum` function takes an array of numbers as input and returns the minimum value. If the array is empty, it returns `Infinity`.

## Purpose 🎯
This function is useful for quickly finding the smallest number in a list, which can be essential for various mathematical calculations and data analysis tasks.

## How It Works 🔍
1. Check if the input array is empty.
2. If empty, return `Infinity`.
3. Initialize the minimum value with the first element of the array.
4. Iterate through each number in the array and update the minimum value if a smaller number is found.
5. Return the minimum value.

## Output 📜
- Returns the minimum number in the array or `Infinity` if the array is empty.

## Usage 📦
1. Call the function `findMinimum` with an array of numbers.
   ```javascript
   console.log(findMinimum([-5, 1, 0, 5, 6])); // Outputs: -5
   console.log(findMinimum([0, 0, 0])); // Outputs: 0
   console.log(findMinimum([1, 9, 10, 100])); // Outputs: 1
   console.log(findMinimum([])); // Outputs: Infinity

## Conclusion 🚀
The findMinimum function provides an efficient way to determine the smallest number in an array, contributing to effective data handling and analysis in programming tasks.