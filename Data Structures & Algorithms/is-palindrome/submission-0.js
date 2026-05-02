class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const ascii_uppercase = [...Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)), ...Array.from('0123456789')];

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!(ascii_uppercase.includes(s[left].toLowerCase()))) left++;
            else if (!(ascii_uppercase.includes(s[right].toLowerCase()))) right--;
            else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            else {
                left++; right--;
            }
        }

        return true;
    }
}
