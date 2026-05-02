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
        this.min.push(this.min.length > 0 ? Math.min(val, this.min.at(-1)) : val);
        this.array.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
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