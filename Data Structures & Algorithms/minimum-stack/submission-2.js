class MinStack {
    constructor() {
        this.array = []; // array that will hold the stack
        this.min = []; // last element is the smallest
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.min.push(val);

        if (this.min.length > 1) {
            let i = this.min.length - 2;
            let j = this.min.length - 1;

            while (i >= 0 && this.min[i] <= this.min[j]) {
                [this.min[i], this.min[j]] = [this.min[j], this.min[i]];
                i--;
                j--;
            }
        }
        this.array.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.splice(this.min.indexOf(this.array.at(-1)), 1);
        this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.array.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min.at(-1);
    }
}
