/*
Idea: Spiral out 2D array
[ 7 8 9 10 ]
[ 6 1 2 11 ]
[ 5 4 3 12 ]
[ 16 15 14 13 ]
*/
let make_2D = function(n,m)  {
    let A = []
    for (var i = 0; i < n; i++) {
        A[i] = [];
        for (var j = 0; j < m; j++) {
            A[i][j] = 0;
        }
    }
    return A
}
let limit_reached = function(limit,count){
    if(count == limit){
        console.log("limit reached: " + count)
        return true
    }
    return false
}
let print_2D = function(array)  {
    
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
let spiral_out = function(midpoint,n,m)  {
    // mid point [1,1] -> 4*4 array
    let arr_2d = make_2D(n,m)
    console.log(arr_2d)
    let limit = n*m
    let directions = 
    {
        "rd":'rd',  // right - > down
        "lu":'lu'  // left -> up
    }
    let go_to = directions.rd
    let row = midpoint[0]
    let col = midpoint[1]
    let count = 1
    arr_2d[row][col] = count
    for(let i = 1; i < n + 1; i ++){
        let times = 0
        switch(go_to){
            case 'rd':
                while(times < i){
                    if(limit_reached(limit,count)){
                        return arr_2d
                    }
                    //go rigth
                    col++
                    count ++
                    times++
                    arr_2d[row][col] = count
                }
                times = 0
                while(times < i){ 
                    if(limit_reached(limit,count)){
                        return arr_2d
                    }
                    //go down
                    row++
                    count++
                    times++
                    arr_2d[row][col] = count     
                }
                go_to = directions.lu
                break
            case 'lu':
                while(times < i){
                    if(limit_reached(limit,count)){
                        return arr_2d
                    }
                    //go left
                    col--
                    count ++
                    arr_2d[row][col] = count
                    times++
                }
                times = 0
                while(times < i){
                    if(limit_reached(limit,count)){
                        return arr_2d
                    }
                    //go up
                    row--
                    count ++
                    arr_2d[row][col] = count
                    times++
                }
                go_to = directions.rd
                break
        }
    }
}
print_2D(spiral_out([3,3],7,7))