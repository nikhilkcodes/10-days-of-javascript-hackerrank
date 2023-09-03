function getSecondLargest(nums) {
    let largest = nums[0]; // Initialize the largest number with the first number in the array
    let secondLargest = nums[0]; // Initialize the second largest number with the first number
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest; // Update second largest to the previous largest
            largest = nums[i]; // Update largest to the current number
        } else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i]; // Update second largest to the current number
        }
    }
    
    return secondLargest; // Return the second largest number after the loop
}