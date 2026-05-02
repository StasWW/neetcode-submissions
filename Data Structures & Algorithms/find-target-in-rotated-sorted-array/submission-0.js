class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const pivotIndex = Math.trunc((left + right) / 2);
        const prevIndex = pivotIndex - 1 >= left ? pivotIndex - 1 : left;
        const pivot = nums[pivotIndex];


        if (pivot === target) return pivotIndex;
        if (nums[left] <= nums[prevIndex]) {
            if (target >= nums[left] && target <= nums[prevIndex]) right = prevIndex;
            else left = pivotIndex + 1;
        } else {
            if (target >= nums[left] || target <= nums[prevIndex]) right = prevIndex;
            else left = pivotIndex + 1;
        }
    }

    return -1;
};
}
