/*
Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

given: [1,2,3,4]
return 1 ^ 2 ^ 3 ^ 4  = 8
*/
var xorOperation = function(n, start) {
    let result = 0
    for(let index = 0; index < n; index++){
        let two_times_index = 2 * index
        let val = start + two_times_index
        result = result ^ val
    }
    return result
};
let n = 5, start = 0
console.log(xorOperation(n,start))