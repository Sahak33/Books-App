import { formatCurrency } from "helpers/currency";

describe("formatCurrency", () => {
  it("formats the price as a currency string", () => {
    const price = 9.99;
    const currency = "USD";
    const formattedPrice = formatCurrency(price, currency);

    expect(formattedPrice).toBe("$9.99");
  });

  it("formats the price with the correct currency symbol", () => {
    const price = 9.99;
    const currency = "EUR";
    const formattedPrice = formatCurrency(price, currency);

    expect(formattedPrice).toBe("€9.99");
  });

  it("formats the price with the correct number of decimal places", () => {
    const price = 9.9999;
    const currency = "USD";
    const formattedPrice = formatCurrency(price, currency);

    expect(formattedPrice).toBe("$10.00");
  });
});
