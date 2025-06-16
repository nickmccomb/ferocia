export type TInterestPaid = "monthly" | "quarterly" | "annually" | "maturity";

export interface ICalculateInterest {
  startingDeposit: number;
  interestRate: number;
  investmentTermInMonths: number;
  interestPaid: TInterestPaid;
}

export interface ICalculateInterestTest extends ICalculateInterest {
  name: string;
  expected: number;
}
