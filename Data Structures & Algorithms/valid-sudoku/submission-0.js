class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    /**
     * @param {string[]} array
     * @return boolean
     * */
    const isValidArea = (array) => {
        const count = new Map();

        for (let i of array) {
            if (i === '.') continue;
            if (count.has(i)) return false;
            count.set(i, 1);
        }

        return true;
    }

    // Check rows
    for (let row of board) {
        if (!isValidArea(row)) return false;
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        let column = [];
        for (let j = 0; j < 9; j++) {
            column.push(board[j][i]);
        }
        if (!(isValidArea(column))) return false;
    }

    // Check sub-boxes
    for (let i = 0; i < 9; i++) {
        let startRow = Math.floor(i / 3) * 3;
        let startColumn = (i % 3) * 3;

        let subBox = [];
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                subBox.push(board[startRow + row][startColumn + column]);
            }
        }
        if (!isValidArea(subBox)) return false;
    }

    return true;
};
}
