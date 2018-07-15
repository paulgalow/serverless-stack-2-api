// Business logic
export function calculateCost(storage) {
    const rate = storage <= 10
        // If a user wants to store 10 or fewer notes, we'll charge 4$ per note
        ? 4
        : storage <= 100
            // For 100 or fewer we'll charge 2$
            ? 2
            // Anything more than 100 is 1$ per note
            : 1;
    
    return rate * storage * 100;
}