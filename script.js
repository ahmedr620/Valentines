var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var valentineVideo = document.getElementById("valentineVideo");
var kermitvideo = document.getElementById("kermit-video");
var content = document.querySelector('.content');
var funnyMessages = [
    "bffr",
    "why",
    "ok fine",
    "CLEARLY no is not an option nimra.",
    "ok just press yes already",
    "fine wtvr"
    // ... (add more messages as needed)
];
var messageIndex = 0;
var shrinkFactor = 1;
var maxShrinkFactor = 0.8; // Adjust this value to control the maximum shrink factor
var noButtonClickCount = 0; // Counter to track the number of times "No" button is clicked

function noPressed() {
    // Increment the button click count
    noButtonClickCount++;

    if (noButtonClickCount <= 6) {
        // Display the next funny message on the "No" button
        noButton.innerHTML = funnyMessages[messageIndex];
        
        // Shrink the size of the "No" button
        if (shrinkFactor >= maxShrinkFactor) {
            noButton.style.transform = `scale(${1 / shrinkFactor})`;
            shrinkFactor++;
        }
        
        // Cycle through the funny messages array
        messageIndex = (messageIndex + 1) % funnyMessages.length;
    } else {
        // After 9 clicks, show the second video
        if (content) {
            content.style.display = 'none';
        }

        if (kermitvideo) {
            kermitvideo.style.display = 'block';
            kermitvideo.play();

            // Add an event listener for the end of the video
            kermitvideo.addEventListener('ended', function () {
                // Replay the video when it ends
                kermitvideo.currentTime = 0;
                kermitvideo.play();
            });
        }
    }
}
document.addEventListener('click', function (event) {
    if (event.target !== kermitvideo && event.target !== yesButton && event.target !== noButton) {
        if (kermitvideo) {
            kermitvideo.pause();
            kermitvideo.style.display = 'none';
        }

        if (content) {
            content.style.display = 'block';
        }
    }
})

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