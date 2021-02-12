// count all the possible pairs in array -> i != j
var numIdenticalPairs = function(nums) {
    let map = {}
    let result = 0
    for(let i = 0; i < nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]] = map[nums[i]] +  1  
        }
       else{
        map[nums[i]] = 1  
        }
    }
    for (let key in map){
        result += (map[key] * (map[key] - 1)) / 2;
    }
    console.log(result)
    return result
};

let arr1 = [1,1,1,1]

numIdenticalPairs(arr1)