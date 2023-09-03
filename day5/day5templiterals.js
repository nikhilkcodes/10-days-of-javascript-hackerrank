function calculateSides(a, p) {
    // Create an empty array to store the results
    let results = [];

    // Calculate the term under the square root
    let term = Math.sqrt((p * p) - (16 * a));

    // Calculate and push one possible side length into the results array
    results.push((p + term) / 4.0);

    // Calculate and push the other possible side length into the results array
    results.push((p - term) / 4.0);

    // Sort the results array in ascending order
    results.sort(function (a, b) { return a - b; });

    // Return the sorted array containing the possible side lengths
    return results;
}

// This function is a tagged template literal function that takes literals and expressions
function sides(literals, ...expressions) {
    // Extract the area and perimeter from the expressions array
    let area = expressions[0];
    let perimeter = expressions[1];

    // Call the calculateSides function with the given area and perimeter
    // This will return an array of possible side lengths
    return calculateSides(area, perimeter);
}