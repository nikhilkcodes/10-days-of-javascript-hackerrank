function getMaxLessThanK(n, k) {
    // Initialize the variable to store the maximum value found.
    let maximumValue = 0;

    // Iterate through possible values of 'i' within the range [1, n).
    for (let i = 1; i < n; i++) {
        // Iterate through values of 'j' greater than 'i' within the range [i + 1, n].
        for (let j = i + 1; j <= n; j++) {
            // Calculate the bitwise AND value of 'i' and 'j'.
            let andValue = i & j;

            // Check if the calculated AND value is less than 'k'
            // and greater than the current maximum value.
            if (andValue < k && maximumValue < andValue) {
                // Update the maximum value if the conditions are met.
                maximumValue = andValue;
            }
        }
    }

    // Return the maximum AND value that satisfies the conditions.
    return maximumValue;
}
