// Testing the different tiers of our pricing structure
import { calculateCost } from "../libs/billing-lib";

// User trying to store 10 notes
test("Lowest tier", () => {
    const storage = 10;

    const cost = 4000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

// User trying to store 100 notes
test("Middle tier", () => {
    const storage = 100;
    
    const cost = 20000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

// User trying to store 101 notes
test("Highest tier", () => {
    const storage = 101;

    const cost = 10100;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});