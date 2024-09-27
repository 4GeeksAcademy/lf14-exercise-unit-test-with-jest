
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07;


    expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("Ten dollars should be 1565 JPY)", function () {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1565);
})

test("Ten Yens should be 8.7 GBP", function () {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(10)).toBe(8.7);
})