class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const set = new Set(nums);
    let maxConsecutive = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;

        let currConsecutive = 1;
        while (set.has(++num)) currConsecutive++;

        maxConsecutive = Math.max(maxConsecutive, currConsecutive);
    }

    return maxConsecutive;
};
}
