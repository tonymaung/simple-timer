class Timer {
    constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.resetButton = resetButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
            this.onPause = callbacks.onPause;
            this.onReset = callbacks.onReset;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.resetButton.addEventListener('click', this.reset)

    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }

        this.interval = setInterval(this.tick, 20);
    }
    pause = () => {
        circle.setAttribute("stroke", "red")
        clearInterval(this.interval);
        if (this.onPause) {
            this.onPause(this.timeRemaining);
        }
    }
    reset = () => {
        if (this.onReset) {
            this.onReset();
        }
        clearInterval(this.interval);
        this.durationInput.value = 0
    }
    tick = () => {
        if (this.durationInput.value <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }


    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(value) {
        this.durationInput.value = value.toFixed(2);
    }
}