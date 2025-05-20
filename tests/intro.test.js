import { describe, it, expect } from "vitest";
// import { describe, test, it, expect } from "vitest";

import { myMax, fizzBuzz, calculateAverage } from "../src/intro";

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

describe("fizzbuzz", () => {
  it("should return Fizzbuzz if the number is divisible at 15", () => {
    // Arrange:
    const theNum = 30;

    // Act:
    const result = fizzBuzz(theNum);

    // Assert:
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if the number is only divisible at 3", () => {
    // Arrange:
    const theNum = 6;

    // Act:
    const result = fizzBuzz(theNum);

    // Assert:
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if the number is only divisible at 5", () => {
    // Arrange:
    const theNum = 10;

    // Act:
    const result = fizzBuzz(theNum);

    // Assert:
    expect(result).toBe("Buzz");
  });

  it("should return the number as a string if the number is not divisible by 3 or 5", () => {
    // Arrange:
    const theNum = 26;

    // Act:
    const result = fizzBuzz(theNum);

    // Assert:
    expect(result).toBe("26");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([2])).toBe(2);
  });
  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([2, 3])).toBe(2.5);
  });

  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([9, 5, 34])).toBe(16);
  });
});
