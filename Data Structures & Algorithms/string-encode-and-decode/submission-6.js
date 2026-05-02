class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    if (strs === [""]) return '';
    else if (strs.length === 0) return 'SCOOBYDOO';
    let output = '';

    for (let word of strs) {
        for (let letter of [...word]) {
            const code = (letter.codePointAt(0) + 65) % 0x110000;
            output += String.fromCodePoint(code);
        }
        output += '&&';
    }

    return output.slice(0, -2);
}
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode (str) {
    if (str === 'SCOOBYDOO') return [];

    let temp = '';
    const output = [];

    for (let word of str.split('&&')) {
        for (let letter of [...word]) {
            const code = ((letter.codePointAt(0) - 65) + 0x110000) % 0x110000;
            temp += String.fromCodePoint(code);
        }
        output.push(temp);
        temp = '';
    }

    return output;
}
}
