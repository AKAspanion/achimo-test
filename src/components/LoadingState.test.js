import React from "react";
import { render } from "@testing-library/react";
import LoadingState from "./LoadingState";

describe("testing loading state", () => {
  it("should load loading spinner", () => {
    const { getByTestId } = render(<LoadingState />);

    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });
});
