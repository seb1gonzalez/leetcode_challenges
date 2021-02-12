// How many steps from n to 0 if we divide by 2 each time
// can't divide odd numbers by 2
// from odd to even -> subtract 1 , that counts as a step
var numberOfSteps = function (num) {
    let steps = 0
    while (num != 0) {
        if (num % 2 == 0) {
            num = num / 2
            steps++
        }
        else {
            num = num - 1
            steps++
        }
    }
    return steps
};

console.log(numberOfSteps(1))