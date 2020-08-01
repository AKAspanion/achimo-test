import React from "react";
import { render } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("testing empty state", () => {
  it("renders empty state", () => {
    const { getByAltText } = render(<EmptyState />);

    expect(getByAltText(/search/i)).toBeInTheDocument();
  });

  it("renders empty state on mount", () => {
    const { getByAltText } = render(<EmptyState mount />);

    expect(getByAltText(/search/i)).toBeInTheDocument();
  });

  it("renders empty state with message", () => {
    const { getByText } = render(
      <EmptyState message="This message is for testing" />
    );

    expect(getByText(/This message is for testing/i)).toBeInTheDocument();
  });

  it("renders empty state with error image", () => {
    const { getByAltText } = render(
      <EmptyState search="Ankit" message="This message is for testing" />
    );

    expect(getByAltText(/error/i)).toBeInTheDocument();
  });
});
