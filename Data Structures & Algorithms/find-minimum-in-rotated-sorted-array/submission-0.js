class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const pivotIndex = Math.trunc((right - left) / 2) + left;
        const pivot = nums[pivotIndex];

        if (pivot <= nums[(nums.length + pivotIndex - 1) % nums.length] &&
            pivot <= nums[(nums.length + pivotIndex + 1) % nums.length]
        ) return pivot;
        else if (pivot > nums[(nums.length + pivotIndex - 1) % nums.length] &&
                pivot > nums[(nums.length + pivotIndex + 1) % nums.length]
        ) return nums[(nums.length + pivotIndex + 1) % nums.length];
        else if (nums[pivotIndex + 1] > nums[right]) left = pivotIndex + 1;
        else right = pivotIndex - 1;
    }
};
}
