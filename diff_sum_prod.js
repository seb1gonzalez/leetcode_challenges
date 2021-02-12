/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    console.log(" In: ", n)
    let str = ""
    str = n.toString().split("")
    let sum = 0
    let prod = 1
    for (let i = 0; i < str.length; i++){
        sum += parseInt(str[i])
        prod = prod * parseInt(str[i])
    }
    console.log(prod , " - ", sum)
    return prod - sum
    
};

console.log(subtractProductAndSum(223))