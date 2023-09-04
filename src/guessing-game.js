class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.number = Math.ceil(this.min + (this.max - this.min) / 2);
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;
