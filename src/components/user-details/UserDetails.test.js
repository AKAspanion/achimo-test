import React from "react";
import { render } from "@testing-library/react";
import UserDetails from "./UserDetails";

describe("testing user details", () => {
  it("should load user with no details", () => {
    const { getByTestId } = render(<UserDetails />);

    expect(getByTestId(/user/i)).toBeInTheDocument();
  });

  it("should load user with details", () => {
    const user = {
      followers: 12,
      following: 23,
      blog: "abc.xyz",
      name: "Ankit Kumar",
      login: "AKAspanion",
      email: "email@exmaple.com",
    };
    const { getByText, getByAltText } = render(<UserDetails user={user} />);

    expect(getByText(/12/i)).toBeInTheDocument();
    expect(getByText(/23/i)).toBeInTheDocument();
    expect(getByText(/abc.xyz/i)).toBeInTheDocument();
    expect(getByText(/AKAspanion/i)).toBeInTheDocument();
    expect(getByText(/Ankit Kumar/i)).toBeInTheDocument();
    expect(getByText(/email@exmaple.com/i)).toBeInTheDocument();
    expect(getByAltText(/Ankit Kumar/i)).toBeInTheDocument();
  });
});
