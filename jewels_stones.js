/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * You're given strings J representing the types of stones that are jewels, 
 * and S representing the stones you have.  Each character in S is a type 
 * of stone you have.  You want to know how many of the stones you have are 
 * also jewels.The letters in J are guaranteed distinct, and all characters 
 * in J and S are letters. Letters are case sensitive, so "a" is considered 
 * a different type of stone from "A".
 */
var numJewelsInStones = function (J, S) {
    let map = {}
    for (let i = 0; i < J.length; i++) {
        map[J[i]] = 0
    }
    for (let i = 0; i < S.length; i++) {
        if (map[S[i]] >= 0) {
            map[S[i]] = map[S[i]] + 1
        }
    }
    let result = 0
    for (key in map) {
        result += map[key]
    }

    return result
};
let J = 'ab'
let S = 'aAbbbB'
console.log(numJewelsInStones(J, S))