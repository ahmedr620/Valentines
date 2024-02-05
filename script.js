var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var funnyMessages = [
    "Are you sure about that?",
    "Really, babe?",
    "Think again, love!",
    // ... (add more messages as needed)
];
var messageIndex = 0;
var shrinkFactor = 1;
var maxShrinkFactor = 0.7; // Adjust this value to control the maximum shrink factor

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

}