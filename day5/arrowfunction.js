function modifyArray(nums) {
    // Declare nums as an array (this line is not needed since you're passing the array as an argument)
    // nums = [];

    // Loop through the array elements
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n % 2 === 0) {
            nums[i] = n * 2; // Update the array element
        } else {
            nums[i] = n * 3; // Update the array element
        }
    }
    
    return nums; // Return the modified array
}