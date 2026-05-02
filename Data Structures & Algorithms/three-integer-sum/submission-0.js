class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    /**
     * @param {number} start
     * @param {number} end
     * @param {number} target
     * @return {number[][]}
     * */
    const twoSum = (start, end, target) => {
        let left = start;
        let right = end;

        const answer = [];

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                answer.push([-1 * target, nums[left], nums[right]])
                right--;
                left++;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
            else if (sum > target) right--;
            else left++;
        }
        return answer;
    }

    nums = nums.sort((a, b) => a - b);
    const answer = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;

        const twoSumRes = twoSum(i + 1, nums.length - 1, -nums[i]);
        if (twoSumRes.length > 0) {
            for (let j of twoSumRes) answer.push(j);
        }
    }

    return answer;
}
}
 