class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    const calculateTime = (rate) => {
        return piles.reduce((previousValue, currentValue) => previousValue + Math.ceil(currentValue / rate), 0);
    }

    let k = Math.max(...piles);

    let left = 1, right = k;
    while (left <= right) {
        const pivot = Math.trunc((right - left) / 2) + left;
        const timeToEat = calculateTime(pivot);

        if (timeToEat <= h) {
            right = pivot - 1;
            k = Math.min(k, pivot);
        } else left = pivot + 1;
    }

    return k;
};
}
