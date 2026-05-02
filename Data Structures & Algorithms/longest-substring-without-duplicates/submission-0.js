class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let left = 0, right = 0, best = 0;
    const substring = new Set();

    while (right < s.length) {
        while (substring.has(s[right])) substring.delete(s[left++]);
        substring.add(s[right]);
        best = Math.max(right - left + 1, best);
        right++;
    }
    return best;
};
}
