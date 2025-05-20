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

  it("should return the second argument if it is greater", () => {
    // Arrange:
    const a = 2;
    const b = 11;

    // Act:
    const result = myMax(a, b);

    // Assert:
    expect(result).toBe(11);
  });

  it("should return the first argument if arguments are equal", () => {
    // Arrange:
    const a = 2;
    const b = 2;

    // Act:
    const result = myMax(a, b);

    // Assert:
    expect(result).toBe(2);
  });
});
