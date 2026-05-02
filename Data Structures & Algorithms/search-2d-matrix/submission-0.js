class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    const search = function(nums, target) {
        let left = 0, right = nums.length - 1;

        while (left <= right) {
            let pivotIndex = Math.trunc((right - left) / 2) + left;
            let pivot = nums[pivotIndex];

            if (pivot === target) return pivotIndex;
            else if (target < pivot) right = pivotIndex - 1;
            else left = pivotIndex + 1;
        }

        return -1;
    };

    let left = 0, right = matrix.length - 1;

    while (left <= right) {
        let pivotIndex = Math.trunc((right - left) / 2) + left;
        let pivot = matrix[pivotIndex][0];

        if (pivot === target) return true;
        else if (target > pivot) {
            if (pivotIndex + 1 < matrix.length && matrix[pivotIndex + 1][0] > target || pivotIndex === matrix.length - 1) return search(matrix[pivotIndex], target) !== -1;
            else left = pivotIndex + 1;
        }
        else {
            if (pivotIndex - 1 >= 0 && matrix[pivotIndex - 1][0] < target) return search(matrix[pivotIndex - 1], target) !== -1;
            else right = pivotIndex - 1;
        }
    }

    return false;
}
}
