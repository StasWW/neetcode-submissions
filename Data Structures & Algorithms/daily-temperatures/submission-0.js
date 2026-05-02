class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    const answer = [];
    const stack = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack.at(-1)[0] <= temperatures[i]) stack.pop();
        answer.push(stack.length > 0 ? stack.at(- 1)[1] - i : 0);
        stack.push([temperatures[i], i]);
    }
    answer.reverse()
    return answer;
};
}
