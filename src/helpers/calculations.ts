import { ICalculateInterest } from "@/types/calculations";

export const calculateInterest = ({
  startingDeposit,
  interestRate,
  investmentTermInMonths,
  interestPaid,
}: ICalculateInterest) => {
  // NOTE: renamed the following for readability
  const rate = interestRate / 100; // converts percentage to decimal
  const termInMonths = investmentTermInMonths;
  const termInYears = termInMonths / 12; // convert months to years for calculations

  switch (interestPaid) {
    case "monthly":
      return startingDeposit * (Math.pow(1 + rate / 12, termInMonths) - 1);
    case "quarterly":
      return startingDeposit * (Math.pow(1 + rate / 4, termInMonths / 3) - 1);
    case "annually":
      return startingDeposit * (Math.pow(1 + rate, termInYears) - 1);
    case "maturity":
      return startingDeposit * rate * termInYears;
    default:
      return 0;
  }
};
