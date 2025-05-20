import { describe, it, expect } from "vitest";
// import { describe, test, it, expect } from "vitest";

import { myMax } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA - Arrange Act Assert
    // Arrange - setup test enviorenment and necessary data or configatuions
    // Act - peroform the action
    // Assert - ensure the output matches our expecatiosn
    // Arrange: turn on TV
    // Act: press the button
    // Assert: TV is now on

    // Arrange:
    const a = 2;
    const b = 1;

    // Act:
    const result = myMax(a, b);

    // Assert:
    expect(result).toBe(2);
  });
});
