
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(2);

    const expected = 2 * 1.07; 
    
    expect(fromEuroToDollar(2)).toBe(2.14);
})

test("One dollar should be 146.26168224299064 yens", function() {

    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(2);

    const expected = 2 * 156.5 / 1.07; 
    
     expect(fromDollarToYen(2)).toBe(292.5233644859813);
})

test("One yen should be 0.005559105431309904 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(2);

    const expected = 2 * 0.87 / 156.6; 
    
     expect(fromYenToPound(2)).toBe(0.011118210862619809);
})
