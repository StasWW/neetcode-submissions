class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) cars.push([position[i], speed[i]]);

        cars.sort( (a, b) => b[0] - a[0] );
        const fleets = [];

        for (let [pos, spd] of cars) {
            const time = (target - pos) / spd;
            if (fleets.length === 0 || time > fleets[fleets.length - 1]) fleets.push(time);
        }

        return fleets.length;
    };
}
