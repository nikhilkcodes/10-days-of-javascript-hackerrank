function getCount(objects) {
    // Initialize a variable to keep track of the count of objects with equal attributes
    let countOfEqualAttributes = 0;
    
    // Iterate over each object in the 'objects' array using the forEach function
    objects.forEach(function (object) {
        // Check if the 'x' property of the current object is equal to the 'y' property
        if (object.x == object.y) {
            // If the condition is met, increment the count of objects with equal attributes
            countOfEqualAttributes++;
        }
    });
    
    // Return the final count of objects with equal 'x' and 'y' attributes
    return countOfEqualAttributes;
}