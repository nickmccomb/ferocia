import { fireEvent, render, screen } from "@testing-library/react";

import { Calculator } from "../calculator";

describe("Calculator", () => {
  const inputLabelText = /starting deposit/i;
  const depositErrorId = "deposit-error";

  it("shows error message when starting deposit is 0", () => {
    render(<Calculator />);

    const input = screen.getByLabelText(inputLabelText);
    fireEvent.change(input, { target: { value: "0" } });

    expect(screen.queryByTestId(depositErrorId)).toBeInTheDocument();
  });

  it("shows error message when starting deposit is negative", () => {
    render(<Calculator />);

    const input = screen.getByLabelText(inputLabelText);
    fireEvent.change(input, { target: { value: "-100" } });

    expect(screen.queryByTestId(depositErrorId)).toBeInTheDocument();
  });

  it("does not show error message when starting deposit is positive", () => {
    render(<Calculator />);

    const input = screen.getByLabelText(inputLabelText);
    fireEvent.change(input, { target: { value: "1000" } });

    expect(screen.queryByTestId(depositErrorId)).not.toBeInTheDocument();
  });
});
