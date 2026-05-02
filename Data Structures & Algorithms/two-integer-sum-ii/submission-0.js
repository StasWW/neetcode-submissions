class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target){
    /**
     * @param {number[]} array
     * @param {number} target
     * @return {number | null}
     * */
    const binarySearch = (array, target) => {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let pivotIndex = left + Math.trunc((right - left) / 2);
            let pivot = array[pivotIndex];

            if (pivot === target) return pivotIndex;
            else if (target < pivot) right = pivotIndex - 1;
            else left = pivotIndex + 1;
        }

        return null;
    }

    for (let i = 0; i < numbers.length; i++) {
        let toSearch = target - numbers[i];
        let toSearchIndex = binarySearch(numbers, toSearch);

        if (toSearchIndex !== null && toSearchIndex !== i) return (i < toSearchIndex ? [i + 1, toSearchIndex + 1] : [toSearchIndex + 1, i + 1]);
    }
};
}
