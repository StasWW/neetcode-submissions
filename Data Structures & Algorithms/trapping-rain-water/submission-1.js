class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let space = 0;
    let left = 0;
    let right = height.length - 1;
    let minHeight = 0;

    while (left < right) {
        if (height[left] <= minHeight) {
            left++;
            continue;
        } else if (height[right] <= minHeight) {
            right--;
            continue
        }

        let maxCapacity = Math.min(height[left], height[right]);
        minHeight = maxCapacity;
        for (let j = left + 1; j < right; j++) {
            if (height[j] < maxCapacity) {
                space += maxCapacity - height[j];
                height[j] = maxCapacity;
            }
        }

        if (height[left] < height[right]) left++;
        else right--;
    }

    return space;
};
}
