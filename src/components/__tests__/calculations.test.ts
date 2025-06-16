import { ICalculateInterestTest, TInterestPaid } from "@/types/calculations";
import { describe, expect, it } from "@jest/globals";

import { calculateInterest } from "@/helpers/calculations";

const testCases: ICalculateInterestTest[] = [
  {
    name: "Monthly interest calculation",
    startingDeposit: 10000,
    interestRate: 5,
    investmentTermInMonths: 12,
    interestPaid: "monthly",
    expected: 511.62,
  },
  {
    name: "Quarterly interest calculation",
    startingDeposit: 10000,
    interestRate: 5,
    investmentTermInMonths: 12,
    interestPaid: "quarterly",
    expected: 509.45,
  },
  {
    name: "Annual interest calculation",
    startingDeposit: 10000,
    interestRate: 5,
    investmentTermInMonths: 12,
    interestPaid: "annually",
    expected: 500.0,
  },
  {
    name: "Maturity interest calculation",
    startingDeposit: 10000,
    interestRate: 5,
    investmentTermInMonths: 12,
    interestPaid: "maturity",
    expected: 500.0,
  },
  {
    name: "Long term calculation",
    startingDeposit: 10000,
    interestRate: 5,
    investmentTermInMonths: 60,
    interestPaid: "monthly",
    expected: 2833.59,
  },
  {
    name: "Higher interest calculation",
    startingDeposit: 10000,
    interestRate: 10,
    investmentTermInMonths: 12,
    interestPaid: "monthly",
    expected: 1047.13,
  },
];

describe("calculateInterest", () => {
  testCases.forEach(
    ({
      name,
      startingDeposit,
      interestRate,
      investmentTermInMonths,
      interestPaid,
      expected,
    }) => {
      it(`should calculate interest correctly for ${name}`, () => {
        const result = calculateInterest({
          startingDeposit,
          interestRate,
          investmentTermInMonths,
          interestPaid,
        });
        expect(result).toBeCloseTo(expected, 2);
      });
    }
  );

  it("should return 0 for invalid interest paid frequency", () => {
    const result = calculateInterest({
      startingDeposit: 10000,
      interestRate: 5,
      investmentTermInMonths: 12,
      interestPaid: "invalid" as TInterestPaid,
    });
    expect(result).toBe(0);
  });

  it("should handle zero starting deposit", () => {
    const result = calculateInterest({
      startingDeposit: 0,
      interestRate: 5,
      investmentTermInMonths: 12,
      interestPaid: "monthly",
    });
    expect(result).toBe(0);
  });

  it("should handle zero interest rate", () => {
    const result = calculateInterest({
      startingDeposit: 10000,
      interestRate: 0,
      investmentTermInMonths: 12,
      interestPaid: "monthly",
    });
    expect(result).toBe(0);
  });

  it("should handle zero investment term", () => {
    const result = calculateInterest({
      startingDeposit: 10000,
      interestRate: 5,
      investmentTermInMonths: 0,
      interestPaid: "monthly",
    });
    expect(result).toBe(0);
  });
});
