class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
            this.onPause = callbacks.onPause;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }
    start = () => {
        if (this.onStart) {
            this.onStart();
        }

        this.interval = setInterval(this.tick, 1000);
    }
    pause = () => {
        clearInterval(this.interval);

    }

    tick = () => {
        if (this.durationInput.value <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }


    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(value) {
        this.durationInput.value = value;
    }
}

const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const timerTick = document.querySelector("#timer-tick")
const resetButton = document.querySelector("reset")
const timer = new Timer(durationInput, startButton, pauseButton, {
        onStart() {
            console.log("The Timer is started")
            console.log(durationInput.value)
        },
        onPause() {
            console.log("Time is paused")
        },
        onTick() {

            console.log(durationInput.value)
        },
        onComplete() {
            console.log("Timer is completed")
        }
    }



);