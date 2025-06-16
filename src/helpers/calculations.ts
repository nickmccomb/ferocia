import { ICalculateInterestEarned } from "@/types/calculations";

export const calculateInterest = ({
  startingDeposit,
  interestRate,
  investmentTerm,
  interestPaid,
}: ICalculateInterestEarned) => {
  // NOTE: renamed the following for readability
  const rate = interestRate;
  const term = investmentTerm;

  switch (interestPaid) {
    case "monthly":
      return startingDeposit * (Math.pow(1 + rate / 12, 12 * term) - 1);
    case "quarterly":
      return startingDeposit * (Math.pow(1 + rate / 4, 4 * term) - 1);
    case "annually":
      return startingDeposit * (Math.pow(1 + rate, term) - 1);
    case "maturity":
      return startingDeposit * rate * term;
    default:
      return 0;
  }
};
