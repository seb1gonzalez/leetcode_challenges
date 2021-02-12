/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    let midpoint = Math.floor(nums.length/2)
    let root = new TreeNode(nums[midpoint]);
    root.left = sortedArrayToBST(nums.slice(0,midpoint))
    root.right = sortedArrayToBST(nums.slice(midpoint+1))
    return root
};