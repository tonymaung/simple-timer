const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const timerTick = document.querySelector("#timer-tick")
const resetButton = document.querySelector("#reset")
const circle = document.querySelector("circle")
const heading = document.querySelector(".heading")
const parameter = 2 * Math.PI * circle.getAttribute("r")
const animateText = baffle(".heading");
animateText.set({
    characters: '░░█ ▒▓░▒░ ▓<▓<░ ░░▓ ▓▒▓░▒ ▒░█░ █▓> ▒▒▓▓ █<▓█',
    speed: 120
});
animateText.start();
animateText.reveal(1000);
circle.setAttribute('stroke-dasharray', parameter)
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log("The Timer is started")
        console.log(durationInput.value)
        heading.style.color = "blue"

    },
    onPause() {
        heading.style.color = "red"
        animateText.reveal(300)
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke", "blue")
        circle.setAttribute("stroke-dashoffset",
            parameter * timeRemaining / duration - parameter
        )
        console.log(durationInput.value)
        animateText.once()
    },
    onReset() {
        circle.setAttribute('stroke-dasharray', parameter)
        circle.setAttribute("stroke", "currentcolor")
        circle.setAttribute("stroke-dashoffset", 0)
        heading.style.color = "#f5f5dc";
        animateText.reveal(100)
    },
    onComplete() {
        circle.setAttribute('stroke-dasharray', parameter)
        circle.setAttribute("stroke", "green")
        circle.setAttribute("stroke-dashoffset", 0)
        console.log("Timer is completed")
        console.log("Timer is stopped")
        heading.style.color = "green"
        animateText.reveal(100)
    }
});