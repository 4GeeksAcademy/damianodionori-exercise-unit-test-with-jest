// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollarAmount) {
    return dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

function fromYenToPound(yenAmount) {
    return yenAmount * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

module.exports = { sum, fromEuroToDollar };