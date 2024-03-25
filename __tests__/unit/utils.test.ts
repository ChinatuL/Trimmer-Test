import { expect, expectTypeOf, describe, it } from "vitest";
import {
    makeUrlShort,
    generateRating,
    getHeadingFromPath,
} from "../../src/app/lib/utilities/utils";

describe("makeUrlShort", () => {
    it("returns a string of length equal to the number passed in", () => {
        const result = makeUrlShort(6);
        expectTypeOf(result).toBeString();
        expect(result.length).toBe(6);
        expect(result).toMatch(/[A-Za-z0-9_]+/);
    });
});

describe("generateRating", () => {
    it("returns an array of numbers up to the number passed in", () => {
        const result = generateRating(5);
        expectTypeOf(result).toBeArray();
        expect(result.length).toBe(5);
        expect(result).toEqual([0, 1, 2, 3, 4]);
    });
});

describe("getHeadingFromPath", () => {
    it("returns the correct heading based on the pathname", () => {
        const result = getHeadingFromPath("/dashboard");
        expectTypeOf(result).toBeString();
        expect(result).toBe("Overview");
        const result2 = getHeadingFromPath("/dashboard/analytics");
        expect(result2).toBe("Analytics");
        const result3 = getHeadingFromPath("/dashboard/links");
        expect(result3).toBe("Links");
    });
});
