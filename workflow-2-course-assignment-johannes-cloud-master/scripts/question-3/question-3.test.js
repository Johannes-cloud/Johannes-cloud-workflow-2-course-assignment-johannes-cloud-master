import { getDiscountPercentage } from "./question-3";
import { formatDecimalSpaces } from "./question-3";
import { convertKrone } from "./question-3";
import { calculateTax } from "./question-3";

test("Calculates the discount percentage from a normal price", ()=> {
    expect(getDiscountPercentage(100, 75)).toBe(25);
})

test("Converts a value to 2 decimal spaces", ()=> {
    expect(formatDecimalSpaces(15.555555)).toBe(15.56)
})

test("Converts a value to or from Krone", ()=> {
    expect(convertKrone(10)).toBe(101.80)
})

test("Calculates the tax for an amount given", ()=> {
    expect(calculateTax(100)).toBe(125)
})