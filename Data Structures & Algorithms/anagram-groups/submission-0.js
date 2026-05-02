class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const anagrams = new Map();

    for (let word of strs) {
        const wordArr = Array.from(word);
        wordArr.sort();
        const key = wordArr.join('');

        if (anagrams.has(key)) {
            anagrams.set(key, [...anagrams.get(key), word]);
        } else {
            anagrams.set(key, [word]);
        }
    }

    const answer = []
    anagrams.forEach((value, key) => {
        answer.push(value);
    })

    return answer;
};
}
