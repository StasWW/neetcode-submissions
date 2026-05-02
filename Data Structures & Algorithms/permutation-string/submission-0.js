class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
   const buildMap = (word) => {
       const map = new Map();
       for (let char of word) {
           if (map.has(char)) map.set(char, map.get(char) + 1);
           else map.set(char, 1);
       }
       return map;
   }
   const areMapsEqual = (map1, map2) => {
       for (let [key, value] of map1) {
           if (map2.get(key) === undefined || map2.get(key) !== value) return false;
       }
       return true;
   }

    const s1Map = buildMap(s1);
    let currMap = buildMap(s2.slice(0, s1.length));
    if (areMapsEqual(s1Map, currMap)) return true;

    let left = 1;
    for (let right = s1.length; right < s2.length; right++, left++) {
        //remove left - 1
        if (currMap.get(s2[left - 1]) === 1) currMap.delete(s2[left - 1]);
        else currMap.set(s2[left - 1], currMap.get(s2[left - 1]) - 1);
        //add right
        if (currMap.has(s2[right])) currMap.set(s2[right], currMap.get(s2[right]) + 1);
        else currMap.set(s2[right], 1);

        if (areMapsEqual(s1Map, currMap)) return true;
    }

    return false;
};
}
