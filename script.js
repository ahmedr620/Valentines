var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
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
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function (element) {
        element.style.display = 'none';
    });
dd
}