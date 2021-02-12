/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
//from submissions
var GetImportance = function(employees, id) {
    let score = 0;
    const map = {}

    employees.forEach(({id, importance, subordinates}) => {
        map[id] = { importance, subordinates }
    })
    
    const queue = [id]
    
    while(queue.length) {
        let current = map[queue.shift()]
        score += current.importance
        queue.push(...current.subordinates)
    }
    
    return score;  
};