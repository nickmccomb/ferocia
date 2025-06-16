export type TInterestPaid = "monthly" | "quarterly" | "annually" | "maturity";

export interface ICalculateInterestEarned {
  startingDeposit: number;
  interestRate: number;
  investmentTerm: number;
  interestPaid: TInterestPaid;
}
