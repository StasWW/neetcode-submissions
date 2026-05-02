class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const frequencyOfLetters = (word) => {
        const output = new Map();

        for (let letter of word) {
            if (output.has(letter)) {
                output.set(letter, output.get(letter) + 1)
            } else {
                output.set(letter, 1);
            }
        }

        return output;
    }

    const equalityOfMaps = (map1, map2) => {
        for (let key of Array.from(map1.keys())) {
            if (map1.get(key) !== map2.get(key)) return false;
        }
        return true;
    }

    if (s.length !== t.length) return false;
    return equalityOfMaps(frequencyOfLetters(s), frequencyOfLetters(t));
    }
}
