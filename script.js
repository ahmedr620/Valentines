var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var valentineVideo = document.getElementById("valentineVideo");
var content = document.querySelector('.content');
var funnyMessages = [
    "bffr",
    "why",
    "ok fine",
    "b like that",
    "rlly"
    // ... (add more messages as needed)
];
var messageIndex = 0;
var shrinkFactor = 1;
var maxShrinkFactor = 0.5; // Adjust this value to control the maximum shrink factor

function noPressed() {
    if (shrinkFactor >= maxShrinkFactor) {
        noButton.innerHTML = funnyMessages[messageIndex];
        noButton.style.transform = `scale(${1 / shrinkFactor})`;
        shrinkFactor++;
    }

    messageIndex = (messageIndex + 1) % funnyMessages.length;
}

function yesPressed() {
    if (content) {
        content.style.display = 'none';
    }

    if (valentineVideo) {
        valentineVideo.style.display = 'block';
        valentineVideo.play();

        // Add an event listener for the end of the video
        valentineVideo.addEventListener('ended', function () {
            // Replay the video when it ends
            valentineVideo.currentTime = 0;
            valentineVideo.play();
        });
    }
}

// Add a click event listener on the document to exit the video
document.addEventListener('click', function (event) {
    if (event.target !== valentineVideo && event.target !== yesButton && event.target !== noButton) {
        if (valentineVideo) {
            valentineVideo.pause();
            valentineVideo.style.display = 'none';
        }

        if (content) {
            content.style.display = 'block';
        }
    }
});