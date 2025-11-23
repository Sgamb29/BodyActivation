
const left = document.getElementById("left");
const right = document.getElementById("right");
const leftKnee = document.getElementById("leftKnee");
const rightKnee = document.getElementById("rightKnee");
const leftKick = document.getElementById("leftKick");
const rightKick = document.getElementById("rightKick");
const hop = document.getElementById("hop");
const squat = document.getElementById("squat");

const startBtn = document.getElementById("startBtn");
const elbowBtn = document.getElementById("elbowBtn");
const slowerBtn = document.getElementById("slowerBtn");

const whiteShade = "rgb(218, 218, 218)";

const indicators = [hop, squat, left, right, rightKnee, leftKnee, rightKick, leftKick];

let intervalId = null;

let timeBetweenSteps = 1500;

function runWorkout() {
    if (intervalId !== null) {
        resetColors();
        clearInterval(intervalId);
        startBtn.innerText = "Start Workout";
        startBtn.style.backgroundColor = whiteShade;
        intervalId = null;
        slowerBtn.disabled = false;
        return;
    }

    startBtn.innerText = "End Workout";
    startBtn.style.backgroundColor = "lightGreen";
    slowerBtn.disabled = true;

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
        el.style.backgroundColor = whiteShade;
    })
}

function toggleElbows() {
    const extrasOutput = document.getElementById("extrasOutput");
    const hopStr = "Hop!";
    const squatStr = "Squat!";
    if (hop.innerText === hopStr) {
        extrasOutput.innerText = "Elbows";
        hop.innerText = "L";
        squat.innerText = "R";
        elbowBtn.style.background = whiteShade;
    } else {
        hop.innerText = hopStr;
        squat.innerText = squatStr;
        extrasOutput.innerText = "Hop - Squat";
        elbowBtn.style.backgroundColor = "lightGreen"; 
    }
}

function toggleSlower() {
    if (timeBetweenSteps === 1500) {
        timeBetweenSteps = 2000;
        slowerBtn.style.backgroundColor = "lightGreen";
    } else {
        timeBetweenSteps = 1500;
        slowerBtn.style.backgroundColor = whiteShade;
    }
}


// Max not inclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}