class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    /**
     * @param {string} a
     * @param {string} b
     * @param {string} operand
     * */
    const calculate = (a, b, operand) => {
        return Math.trunc(eval(a + ' ' + operand + ' ' + b));
    }
    let i = 0;
    while (tokens.length > 1) {
        while (!('+-*/'.includes(tokens[i]))) i++;

        tokens = [...tokens.slice(0, i - 2), calculate(tokens[i - 2], tokens[i - 1], tokens[i]), ...tokens.slice(i + 1)];
        i -= 2;
    }

    return Number(tokens[0]);
}
}
