// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

// Example usage:

const drivers = ["John", "Jane", "Michael", "Doe", "Mickey"];

console.log(findMatching(drivers, "john")); // Output: ["John"]
console.log(fuzzyMatch(drivers, "Mi")); // Output: ["Michael", "Mickey"]
console.log(matchName([{ name: "John", hometown: "New York" }, { name: "Jane", hometown: "Los Angeles" }], "John")); // Output: [{ name: "John", hometown: "New York" }]
