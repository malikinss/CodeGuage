/*
TODO:
    Given an array of numbers, find the minimum.
    
    In a list of numbers, the smallest number is often referred to as the minimum.
    
    In this exercise, you have to create a function min() to find and return the minimum element of a given array of numbers.

    If the given array is empty, return the special number Infinity; otherwise return the minimum value.
*/
function min(arr) {
    if (arr.length === 0) {
        return Infinity;
    };

    let minimum = arr[0];

    for (let element of arr) {
        if (element < minimum) {
            minimum = element;
        };
    };

    return minimum
};


console.log(min([-5, 1, 0, 5, 6]))
// -5

console.log(min([0, 0, 0]))
// 0

console.log(min([1, 9, 10, 100]))
// 1

console.log(min([]))
// Infinity
