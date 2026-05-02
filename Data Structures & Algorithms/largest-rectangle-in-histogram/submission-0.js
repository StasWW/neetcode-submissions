class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights)  {
    /**
     * @param {number} left
     * @param {number} right
     * @param {number} height
     * @return {number}
     * */
    const computeArea = (left, right, height) => {
        return (right - left + 1) * height;
    }

    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        if (i > 0 && heights[i - 1] === heights[i]) continue;
        let left = i, right = i;

        while (left - 1 >= 0 && heights[left - 1] >= heights[i] ||
            right + 1 < heights.length && heights[right + 1] >= heights[i]
            ) {
            if (left - 1 >= 0 && heights[left - 1] >= heights[i]) left--;
            if (right + 1 < heights.length && heights[right + 1] >= heights[i]) right++;
        }

        let area = computeArea(left, right, heights[i]);
        maxArea = Math.max(area, maxArea);
    }

    return maxArea;
};
}
