// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedParens(str) {
  let openPar = 0
  let closedPar = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1
    } else if (str[i] === ")") {
      closedPar += 1
    }
  }
  return openPar === closedPar
}