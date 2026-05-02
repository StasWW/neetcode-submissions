class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxCount = 0;
        let left = 0, best = 0;
        const frequency = new Map();
        for (let right = 0; right < s.length; right++) {
            frequency.set(s[right], (frequency.get(s[right]) || 0) + 1 );
            maxCount = Math.max(maxCount, frequency.get(s[right]));
            if (right - left + 1 - maxCount > k) {
                (frequency.get(s[left]) - 1 <= 0) ? frequency.delete(s[left]) : frequency.set(s[left], frequency.get(s[left]) - 1);
                left++;
            }
            best = Math.max(right - left + 1, best);
        }

        return best;
    };
}
