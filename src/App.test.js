import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("renders app", () => {
  it("should render app", () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId(/search-field/i);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "a" } });
  });
});
