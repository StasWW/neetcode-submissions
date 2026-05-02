class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const stack = [];

    for (let character of s) {
        if (openingBrackets.includes(character)) stack.push(character);
        else if (closingBrackets.includes(character)) {
            if (openingBrackets[closingBrackets.indexOf(character)] === stack.at(-1)) stack.pop();
            else return false;
        }
    }

    return stack.length === 0;
};
}
