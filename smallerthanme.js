/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let smallers = []
    let i = 0
    let j = nums.length - 1
    let counter = 0
    while(i <  nums.length){
        if(nums[i] > nums[j]){
            counter++
            j--
        }
        else{
            j--
        }
        if(j < 0){
            i++
            j = nums.length  - 1
            smallers.push(counter)
            counter = 0
        }
    }
    return smallers
};

let arr = [8,1,2,2,3]

console.log(smallerNumbersThanCurrent(arr))
