import { renderHook } from "@testing-library/react-hooks";

import useGithubUserFetch from "./useGithubUserFetch";

it("should test user fetch hook", () => {
  const {
    result: { current },
    wa,
  } = renderHook(() => useGithubUserFetch(""));

  expect(current[0]).toBe(null);
  expect(current[1]).toBe("");
  expect(current[2]).toEqual(true);
  expect(current[3]).toEqual(false);
});
