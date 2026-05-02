class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const frequency = new Map();

    for (let i of nums) {
        frequency.set(i, (frequency.get(i) ?? 0) + 1)
    }

    const frequencyArr = Array.from(frequency);
    frequencyArr.sort((a, b) => b[1] - a[1]);

    const answer = []
    for (let i = 0; i < k; i++) {
        answer.push(frequencyArr[i][0]);
    }

    return answer;
};
}
