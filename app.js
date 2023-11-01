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

const dollars = 2;
console.log(`${dollars} USD is equivalent to ${fromDollarToYen(dollars)} JPY`);

const euros = 2;
console.log(`${euros} EUR is equivalent to ${fromEuroToDollar(euros)} USD`);

const yen = 2;
console.log(`${yen} JPY is equivalent to ${fromYenToPound(yen)} GBP`);

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };