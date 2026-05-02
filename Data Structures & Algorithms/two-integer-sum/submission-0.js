class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let toSearch = target - n;
        let numIndex = nums.indexOf(toSearch, i+1)
        if (numIndex !== -1 && numIndex !== i) return [i, numIndex];
    }
    }
}
