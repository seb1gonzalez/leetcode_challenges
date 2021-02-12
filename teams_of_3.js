/**
 * @param {number[]} rating
 * @return {number}
 */

var checkIfTeamValid = function(arr){
    if(arr.length  != 3){
        return false
    }
     let i,j,k;
     i=0
     j=1
     k=2
     if(arr[i] < arr[j] && arr[j]<arr[k]){
         return true
     }
     else if(arr[i] > arr[j] && arr[j] > arr[k]){
        return true
    }
    return false
 }
 //from description -> tried for hours a O(n) JS solution
 const numTeams = (rating) => {
    let count = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
                    count++;
                }
            }
        }
    }
    return count;
};

// var numTeams = function(rating) {
//     if(rating.length < 3){
//         return 0
//     }
//     let map = {}
//     let i,j,k
//     i = 0
//     j = 1
//     k = 2
//     let index = 0
//     let team = []
//     let key = ""
//     while(index < rating.length){
//         // checking 3 indexes at a time
//         // make all possible 3 combos
//         // check if they are valid
//         // if so, add to map, else ignore
//         i = index
       

//         if(index == 0){
//             team =  [rating[i],rating[j],rating[k]]
//             key = [i,j,k].toString()
//             map[key] = team
        
//         }
//         if( j + 1 != rating.length -1){
//             if(k+1 < rating.length){
//                 k++
//                 team =  [rating[i],rating[j],rating[k]]
//                 key = [i,j,k].toString()
//                 map[key] = team
              
//             }
//             j++
//             team =  [rating[i],rating[j],rating[k]]
//             key = [i,j,k].toString()
//             map[key] = team

//         }
//         else{    
//             index++
//             j= i + 1
//             k= i + 2
//         }
        
//     }
//     console.log(map)
//     let good_count = 0
//     for(let key in map){
//         if(checkIfTeamValid(map[key])){
//             good_count++
//         }
//     }
//     return good_count
// };

console.log(numTeams([2,5,3,4,1]))
console.log(numTeams([1,2,3,4]))
console.log(numTeams([4,7,9,5,10,8,2,1,6]))

