function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage
let sortedArray = [1, 2, 3, 4, 5];
let unsortedArray = [1, 3, 2, 4, 5];

console.log(isSorted(sortedArray));  // Output: true
console.log(isSorted(unsortedArray));  // Output: false