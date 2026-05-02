class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
    const areaCalc = (newLeft, newRight) => {
        return Math.min(height[newLeft], height[newRight]) * Math.abs(newLeft - newRight);
    }

    let left = 0;
    let right = height.length - 1;
    let area = areaCalc(left, right);

    while (left < right) {
        if (height[left] > height[right]) right--;
        else left++;
        area = Math.max(area, areaCalc(left, right));
    }

    return area;
};
}
