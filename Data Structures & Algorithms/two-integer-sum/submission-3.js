class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /** @type{Map<number, number>} */
        const hashMap = new Map(
            nums.map((num, i) => [num, i])
        );

        for (let i = 0; i < nums.length; i++) {
            const j = hashMap.get(target - nums[i]);
            if (
                j !== undefined &&
                i !== j
            ) {
                return Array.from([i, j]);
            }
        }
    }
}
