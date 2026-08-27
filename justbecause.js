/*
==================================================
JUST BECAUSE
==================================================
*/

const pageTitle = "Just Because";

const pageIcon = "💌";

const pageSubtitle =
    "No special reason. Just because you deserve something lovely.";


const messages = [

    "You are loved, appreciated, and worth celebrating just because you are you.",

    "No occasion is needed to remind you how special you are.",

    "You make the world softer and brighter simply by being in it.",

    "This is your reminder that someone is thinking of you with a smile.",

    "You deserve kindness, joy, and little surprises on ordinary days too.",

    "There is no reason needed. You matter every single day.",

    "A small note for a wonderful person: you are more appreciated than you know.",

    "I hope something unexpectedly lovely finds you today.",

    "You bring something to this world that nobody else can.",

    "Just because you exist, today is a little better."

];


document.title = pageTitle + " ❤️";

document.getElementById("icon").textContent =
    pageIcon;

document.getElementById("title").textContent =
    pageTitle;

document.getElementById("subtitle").textContent =
    pageSubtitle;


const randomIndex =
    Math.floor(
        Math.random() * messages.length
    );


document.getElementById("message").textContent =
    messages[randomIndex];
