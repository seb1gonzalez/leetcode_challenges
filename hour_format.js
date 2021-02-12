
function solution(T) {
    // Split into hours and minutes
    let time = T.split(':')
    hours = time[0]
  
    console.log( "hours: " + hours)
    let minutes = time[1]
    console.log( "minutes: ", minutes)
    
    let missing_number_found = false
    for (let index = 0; index < hours.length; index++) {
        if (hours[index] == '?' || minutes[index] == '?') {
            missing_number_found = true
        }

    }
    // no '?' found
    if (!missing_number_found) {
        return T
    }
    //found '?' 
    //fix hours or minutes if needed
    if (hours[0] == '?') {
      
        // find if there are more '?' to replace
        hours = hours.replace(/[?]/g, '2')
        minutes = minutes.replace(/[?]/g, '2')
        return hours + ':' + minutes


    }
    else if (hours[1] == '?') {
        if (hours[0] == '2') {
            hours = hours.replace('?', '3')
            minutes = minutes.replace('?', '3')
            return hours + ':' + minutes
        }
        if (minutes[0] == '?') {
            hours = hours.replace('?', '5')
            minutes = minutes.replace('?', '5')
            return hours + ':' + minutes
        }
        if (minutes[1] == '?') {
            hours = hours.replace('?', '9')
            minutes = minutes.replace('?', '9')
            return hours + ':' + minutes
        }

    }
    //if hours[0] == 1
    else if (minutes[0] == '?') {
     
        //possible value = 5
        hours = hours.replace('?', '5')
        minutes = minutes.replace('?', '5')
        return hours + ':' + minutes
    }
    else if (minutes[1] == "?") {
      
        //possible value is 9
        hours = hours.replace('?', '9')
        minutes = minutes.replace('?', '9')

        return hours + ':' + minutes

    }
        
    return false

}

let arr1 = "11:11"
let arr2 = "12:1?"
let arr3 = "?1:1?"
let arr4 = "1?:1?"
let arr5 = "??:??"

console.log("Result:" + solution(arr1))
console.log( "Expecting: 11:11")
console.log("---------------------------------")

console.log("Result:" + solution(arr2))
console.log( "Expecting: 12:19")
console.log("---------------------------------")

console.log("Result:" + solution(arr3))
console.log( "Expecting: 21:12")
console.log("---------------------------------")

console.log("Result:" + solution(arr4))
console.log( "Expecting: 19:19")
console.log("----------------------------------")
console.log("Result:" + solution(arr5))
console.log( "Expecting: 22:22")
console.log("----------------------------------")



