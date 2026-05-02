class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let pivotIndex = Math.trunc((right - left) / 2) + left;
        let pivot = nums[pivotIndex];

        if (pivot === target) return pivotIndex;
        else if (target < pivot) right = pivotIndex - 1;
        else left = pivotIndex + 1;
    }

    return -1;
}
}
