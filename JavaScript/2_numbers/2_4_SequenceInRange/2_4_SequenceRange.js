/*
TODO:
    Create a function printSequence() to print a sequence, given three parameters defining it.
*/

function printSequence(start, end, step) {
    let sequence = '';

    for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
        sequence += i.toString();

        // Add space between numbers except the last one
        if ((step > 0 && i < end) || (step < 0 && i > end)) {
            sequence += ' ';
        }
    }

    console.log(sequence);
}

printSequence(1, 5, 1);  // Output: "1 2 3 4 5"
printSequence(5, 1, -1); // Output: "5 4 3 2 1"
