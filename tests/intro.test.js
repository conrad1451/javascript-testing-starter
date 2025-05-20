import { describe, it, expect } from "vitest";
// import { describe, test, it, expect } from "vitest";

import { myMax } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // Arrange:
    const a = 2;
    const b = 1;

    // Act:
    const result = myMax(a, b);

    // Assert:
    expect(result).toBe(2);
  });
});
