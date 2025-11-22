
const left = document.getElementById("left");
const right = document.getElementById("right");
const leftKnee = document.getElementById("leftKnee");
const rightKnee = document.getElementById("rightKnee");
const leftKick = document.getElementById("leftKick");
const rightKick = document.getElementById("rightKick");
const hop = document.getElementById("hop");
const squat = document.getElementById("squat");

const startBtn = document.getElementById("startBtn");

const indicators = [hop, squat, left, right, rightKnee, leftKnee, rightKick, leftKick];

let intervalId = null;

let timeBetweenSteps = 1500;

function runWorkout() {
    if (intervalId !== null) {
        resetColors();
        clearInterval(intervalId);
        startBtn.innerText = "Start Workout";
        startBtn.style.backgroundColor = "rgb(218, 218, 218)";
        intervalId = null;
        return;
    }

    startBtn.innerText = "End Workout";
    startBtn.style.backgroundColor = "lightGreen";

    let indictorsToHighlight = [];

    intervalId = setInterval(() => {
        let previouslyChosen = null;
        if (indictorsToHighlight.length > 0) {
            previouslyChosen = indictorsToHighlight[0];
        }
        indictorsToHighlight = [];
        resetColors();

        let x = chooseRandomIndicator();
        // Make sure x isn't the same as last highlighted
        while (true) {
            if (x !== previouslyChosen) {
                break;
            } 
            x = chooseRandomIndicator();
        }
        indictorsToHighlight.push(x);

        indictorsToHighlight.forEach((el) => {
            el.style.backgroundColor = "green";
        })
    }, timeBetweenSteps);
}

function chooseRandomIndicator() {
    return indicators[getRandomInt(indicators.length)];
}

function resetColors() {
    indicators.forEach((el) => {
        el.style.backgroundColor = "rgb(218, 218, 218)";
    })
}


// Max not inclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}