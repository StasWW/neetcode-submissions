class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const hashT = new Map();
        for (let char of t) {
            if (hashT.has(char)) hashT.set(char, hashT.get(char) + 1);
            else hashT.set(char, 1);
        }

        const hashWindow = new Map();

        let left = 0,
            have = 0,
            answer = [0, Infinity];

        for (let right = 0; right < s.length; right++) {
            hashWindow.set(s[right], (hashWindow.get(s[right]) || 0) + 1);

            if (hashT.has(s[right]) && hashT.get(s[right]) === hashWindow.get(s[right])) have++;
            while (have === hashT.size) {
                if (answer[1] - answer[0] > right - left) answer = [left, right];

                hashWindow.set(s[left], hashWindow.get(s[left]) - 1);

                if (hashT.has(s[left]) && hashWindow.get(s[left]) < hashT.get(s[left])) have--;
                left++;
            }
        }
        return answer[1] === Infinity ? '' : s.slice(answer[0], answer[1] + 1);
    }
}
