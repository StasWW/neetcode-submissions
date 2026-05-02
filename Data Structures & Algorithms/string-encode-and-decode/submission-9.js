class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    let output = '';

    for (let word of strs) {
        const chars = [...word];
        output += `${chars.length}#`;
        for (let letter of [...word]) {
            const code = (letter.codePointAt(0) + 65) % 0x110000;
            output += String.fromCodePoint(code);
        }
    }

    return output;
}
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const output = [];

    let i = 0;
    const chars = [...str];

    while (i < chars.length) {
        // Parse word length
        let wordLength = '';
        while (chars[i] !== '#') {
            wordLength += chars[i++];
        }
        i++;

        // End index of the word in the coded message
        const wordEndPoint = parseInt(wordLength) + i;

        // Decode the word
        let word = '';
        while (i < wordEndPoint) {
            word += String.fromCodePoint(((chars[i].codePointAt(0) - 65) + 0x110000) % 0x110000);
            i++;
        }
        output.push(word);
    }

    return output;
}
}
