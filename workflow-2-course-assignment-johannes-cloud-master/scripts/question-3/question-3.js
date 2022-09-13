/**
 * Calculates the discount percentage from a normal price
 * and a discounted price.
 * @param normalPrice Regular price before discount
 * @param discountedPrice The discounted price
 * @returns The discount percentage
 * @example
 * // Expect 25
 * getDiscountPercentage(100, 75);
 */
export function getDiscountPercentage(normalPrice, discountedPrice) {
  return Math.round(100 - (discountedPrice / normalPrice) * 100);
}

/**
 * Converts a value to 2 decimal spaces
 * @param value The amount that will have the decimal places applied to
 * @param decimalSpaces How many decimal spaces to use, defaults to 2
 * @returns The value with decimal spaces and rounding applied to it
 * @example
 * // Expect 15.56
 * formatDecimalSpaces(15.5555555);
 */
export function formatDecimalSpaces(value, decimalSpaces = 2) {
  return +(Math.round(value + `e+${decimalSpaces}`) + `e-${decimalSpaces}`);
}

/**
 * Converts a value to or from Krone
 * @param amount The amount to be converted
 * @param kroneValue The value of Krone when converting e.g. 1 Euro = 10.18 Krone
 * @param toKrone Toggle whether to convert to or from Krone
 * @returns Amount converted
 * @example
 * // Expect 101.80
 * convertToKrone(10)
 */
export function convertKrone(amount, toKrone = true, kroneValue = 10.18) {
  if (toKrone) {
    return formatDecimalSpaces(amount * kroneValue);
  }
  return formatDecimalSpaces(amount / kroneValue);
}

/**
 * Calculates the tax for an amount given
 * @param amount Amount to be calculated
 * @param taxRate The tax rate being applied
 * @returns Amount with tax applied
 * // Expect 125
 * calculateTax(100)
 */
export function calculateTax(amount, taxRate = 25) {
  return formatDecimalSpaces(amount + amount * (taxRate / 100));
}
