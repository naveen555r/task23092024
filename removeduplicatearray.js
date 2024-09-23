function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
