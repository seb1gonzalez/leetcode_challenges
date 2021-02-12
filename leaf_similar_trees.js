/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    //go in order
    // store leafs
    //compare leafs if equal
    return leafList(root1) == leafList(root2)
};
let leafList = function(root){
    let leaves = [];
    inorder(root,leaves)
    return leaves.join(',')  
}

let inorder = function(root,leaves){
    if(!root){return;}
    //check if leaf
    if(!root.left && !root.right){
        leaves.push(root.val);
    }
    inorder(root.left,leaves);
    inorder(root.right,leaves);
}
