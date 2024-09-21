/*
TODO:
    Create a function to pick a random integer from a given arithmetic sequence.
*/

function randomPick(a, b, d) {
    if (d === 0 || a === b || (b < a && d > 0) || (a < b && d < 0)) {
       return null;
    }

    let nums = [];
    
    for (let x = a; Math.sign(d) * (x - b) < 0; x += d) {
       nums.push(x);
    }
    
    let randomIndex = Math.floor(Math.random() * nums.length);
    return nums[randomIndex];
}

