class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n)  {
    let answer = [];
    /**
     * @param {string} parenthesis
     * @param {number} open
     * @param {number} closed
     * @return void
     * */
    const generatePr = (parenthesis, open, closed) => {
        if (closed === open && open === n) {
            answer.push(parenthesis);
            return;
        }

        if (open === n) generatePr(parenthesis + ')', open, closed + 1);
        else {
            if (open < n) generatePr(parenthesis + '(', open + 1, closed);
            if (closed + 1 <= open) generatePr(parenthesis + ')', open, closed + 1);
        }}
    generatePr('', 0, 0);
    return answer;
};
}
