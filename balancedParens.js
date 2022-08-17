/*

Given a string, return true or false depending on whether that string has balanced parentheses. For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets. For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true

*/



// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function has_balanced_parens(str) {
    // set up a counter
    let counter = 0;

    // loop through the string we're given (str)
    for (let i = 0; i < str.length; i++) {

        // using multiple if statements (without if else/else) allows us to meet multiple conditions, which is what we want. Using if statements with else ifs will only allow us to check against one condition (not appropriate here)
        if (str[i] === "(") {
            // add 1 to counter
            counter++;
        }
        if (str[i] === ")") {
            // substract 1 from counter
            counter--;
        }
        if (counter < 0) {
            console.log(false);

            // break out of function
            return false;
        }
    }

    if (counter > 0) {
        console.log(false);

        // break out of function
        return false;
    }

    console.log(true);
    return true;
}


// test
console.log(sample1);
has_balanced_parens(sample1);

console.log(sample2);
has_balanced_parens(sample2);

console.log(sample3);
has_balanced_parens(sample3);

console.log(sample4);
has_balanced_parens(sample4);
