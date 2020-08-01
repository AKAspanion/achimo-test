import { renderHook } from "@testing-library/react-hooks";

import useDebounce from "./useDebounce";

it("should test debounce hook", () => {
  const {
    result: { current },
    wa,
  } = renderHook(() => useDebounce("ankit"));

  expect(current).toBe("ankit");
});
