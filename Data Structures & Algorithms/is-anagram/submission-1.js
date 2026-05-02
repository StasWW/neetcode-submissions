class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        function getLettersFrequency(word) {
            const answer = new Map();

            for (const letter of word) {
                answer.set(letter, (answer.get(letter) || 0) + 1);
            }

            return answer;
        }

        /**
         * @param {Map} map1
         * @param {Map} map2
         * @return boolean
         * */
        function areMapsEqual(map1, map2) {
            if (map1.size !== map2.size) {
                return false;
            }
            
            for (const key of map1.keys()) {
                if (!map2.has(key)) {
                    return false;
                }
                
                if (map1.get(key) !== map2.get(key)) {
                    return false;
                }
            }
            
            return true;
        }
        
        return (areMapsEqual( getLettersFrequency(s), getLettersFrequency(t) ));
    }
}
