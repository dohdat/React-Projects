/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        //if nums[i] and nums[i-1] is the same, then skip
        if (nums[i] === nums[i - 1]) {
            continue; //skip same
        }
        let l = i + 1; //second index after i
        let r = nums.length - 1; //last index

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
            }
        }
    }
    return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
