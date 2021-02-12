/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let map = {}
  let all_arrs = []

    for (let i = 0; i < groupSizes.length; i++) {
        if (!map[groupSizes[i]]) {
            map[groupSizes[i]] = [i]
            console.log(map)
        }
        else {
            map[groupSizes[i]].push(i)
            console.log(map)
        }
        // if the length  == the key -> save array at  [i], make new one at [i]
         if(map[groupSizes[i]].length == groupSizes[i]){
            all_arrs.push(map[groupSizes[i]])
            map[groupSizes[i]] = []
            console.log(map)
        }
        
    }


  
    
    return all_arrs
};


/*
Input: arr = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
*/
let arr = [2,2,1,1,1,1,1,1]
console.log(groupThePeople(arr))