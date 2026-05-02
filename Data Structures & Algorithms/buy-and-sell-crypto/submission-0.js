class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let left = 0, right = 1, bestProfit = 0;

    while (right < prices.length) {
        bestProfit = Math.max(prices[right] - prices[left], bestProfit);
        if (prices[right] < prices[left]) left = right;
        right++;
    }

    return bestProfit;
};
}
