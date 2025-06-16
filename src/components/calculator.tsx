"use client";

import { INTEREST_PAID_OPTIONS, TInterestPaid } from "@/types/calculations";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { calculateInterest, getInvestmentTerm } from "@/helpers/calculations";
import { useCallback, useState } from "react";

import { Button } from "@/ui/button";
import { CURRENCY } from "@/helpers/currency";
import { Card } from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/ui/slider";

export const Calculator = () => {
  const [startingDeposit, setStartingDeposit] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.25);
  const [investmentTerm, setInvestmentTerm] = useState(1);
  const [interestPaid, setInterestPaid] = useState<TInterestPaid>("monthly");

  const interestEarned = calculateInterest({
    startingDeposit,
    interestRate,
    investmentTermInMonths: investmentTerm,
    interestPaid,
  });

  const investmentTermDisplay = getInvestmentTerm(investmentTerm);

  const onResetClick = useCallback(() => {
    setStartingDeposit(1000);
    setInterestRate(0.25);
    setInvestmentTerm(1);
    setInterestPaid("monthly");
  }, []);

  return (
    <div className="flex gap-4 flex-row">
      <Card className="p-4 min-w-[350px]">
        <Label htmlFor="email">Starting Deposit ($)</Label>
        <Input
          type="number"
          prefix="$"
          id="email"
          value={startingDeposit}
          onChange={(e) => setStartingDeposit(Number(e.target.value))}
          aria-invalid={startingDeposit === 0}
          className={startingDeposit === 0 ? "border-red-500" : ""}
        />

        {startingDeposit <= 0 && (
          <span
            data-testid="deposit-error"
            className="text-red-500 text-sm mt-1"
          >
            Deposit must be greater than $0
          </span>
        )}

        <Label>
          Interest Rate: <b>{interestRate}%</b>
        </Label>
        <Slider
          id="interest-rate"
          min={0.25}
          max={8}
          step={0.05}
          value={[interestRate]}
          onValueChange={(value) => setInterestRate(value[0])}
        />

        <Label>
          Investment Term: <b>{investmentTermDisplay}</b>
        </Label>
        <Slider
          id="investment-term"
          min={1} // 1 month min
          max={60} // 5 years max
          step={1}
          value={[investmentTerm]}
          onValueChange={(value) => setInvestmentTerm(value[0])}
        />

        <Label>Interest Paid</Label>
        <Select
          value={interestPaid}
          onValueChange={(value) => setInterestPaid(value as TInterestPaid)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="No time selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {INTEREST_PAID_OPTIONS.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Card>

      <Card className="p-4 min-w-[270px]">
        <Label>
          Final Balance:{" "}
          <b>
            {Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: CURRENCY.AUD,
              maximumFractionDigits: 0,
              roundingMode: "floor",
            }).format(startingDeposit + interestEarned)}
          </b>
        </Label>

        <Label>
          Total Interest Earned:{" "}
          <b>
            {Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: CURRENCY.AUD,
              maximumFractionDigits: 0,
              roundingMode: "floor",
            }).format(interestEarned)}
          </b>
        </Label>
      </Card>

      <Button onClick={onResetClick}>Reset</Button>
    </div>
  );
};
