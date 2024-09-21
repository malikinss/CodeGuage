/*
TODO:
    Create a program to ask the user to enter an integer and then validate it.

    Suppose you're making a summation program in JavaScript, computing the sum of all the positive integers up to and including an integer n.

    The program that you're developing obtains this input via a browser prompt (prompt()).

    Now there's an issue that you have to deal with. There is a whole variety of different inputs that a user can possibly provide which might not represent an integer.

    For example, the user could enter 'Hi'. Clearly, this ain't an integer — it ain't even a number. You need to deal with such cases appropriately, making sure that the entered value is a perfectly valid integer.

    Some other instances of invalid inputs follow: '10x', '10.1', 'NaN', 'Infinity', '' (an empty input).

    In this exercise, you have to implement a program asking the user to enter a valid integer via a browser prompt.

    The prompt message should simply read 'Enter an integer:', clearly asking the user to enter an integer value.

    In case the entered value is invalid, make an alert message signalling about the invalid input and then lay out the prompt again. This chain of alert-then-prompt actions should keep on happening so long as the input is not valid.

    But the moment the input is a valid integer, your program must write the integer to the document and exit.

    Note that preceding or succeeding whitespace characters don't matter. That is, the following inputs, '50  ' (two succeeding spaces), '   50' (three preceding spaces), are both just as good as '50'.
*/
var int = prompt('Enter an integer:');

while (Number(int) !== parseInt(int)) {
   alert('Invalid input');
   int = prompt('Enter an integer:');
}

document.write(int);
