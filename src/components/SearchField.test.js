import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchField from "./SearchField";

describe("testing search field", () => {
  it("should load search field", () => {
    const { getByTestId } = render(<SearchField />);

    expect(getByTestId(/search-input/i)).toBeInTheDocument();
  });

  it("should load search placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchField placeholder="test placeholder" />
    );

    expect(getByPlaceholderText(/test placeholder/i)).toBeInTheDocument();
  });

  it("should change field on type", () => {
    const { getByTestId } = render(<SearchField />);

    const input = getByTestId(/search-field/i);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
