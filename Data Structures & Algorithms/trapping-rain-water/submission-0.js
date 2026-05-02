class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let space = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        if (height[left] === 0) {
            left++;
            continue;
        } else if (height[right] === 0) {
            right--;
            continue
        }

        let maxCapacity = Math.min(height[left], height[right]);
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
