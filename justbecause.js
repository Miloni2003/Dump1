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

    "Just because you exist, today is a little better.",
    "Just because you deserve to be reminded how special you are. ❤️",

"No reason today. I just wanted you to know you're appreciated.",

"Just a little reminder that your presence means more than you know.",

"Because some people deserve appreciation even when there's no occasion.",

"Just because you make life a little warmer for everyone around you.",

"No occasion, no reason—just a little love sent your way.",

"Just because someone was thinking about you and smiled. ❤️",

"You don't need a reason to be reminded that you matter.",

"Just because you are one of the people I am genuinely grateful to have.",

"A small message for someone who gives so much without asking for anything back.",

"Just because the world needs more people like you.",

"You make being kind look so natural. Just thought you should know.",

"Just because I hope you never forget how valued you are.",

"Some people are gifts in themselves. You're one of them.",

"Just because your kindness doesn't go unnoticed.",

"No big message today. Just… thank you for being you. ❤️",

"Just because you deserve a little happiness today.",

"A tiny reminder from someone who admires you more than they probably say.",

"Just because your heart deserves some of the love it gives away.",

"You make ordinary days feel a little more special.",

"Just because I wanted to leave a little smile on your day.",

"No special occasion needed when someone is this special.",

"Just because you're worth celebrating on an ordinary day too.",

"A little note for a person who makes people feel cared for.",

"Just because I hope today is kind to you.",

"You may not always notice what you do for others, but I do.",

"Just because there are some people you never want to take for granted.",

"You are appreciated in ways you may never get to hear.",

"Just because I wanted you to have one more reason to smile today.",

"Nothing you need to do. Nothing you need to prove. Just know you're loved. ❤️",

"Just because having you around is something worth being grateful for.",

"You give so much goodness to others. Here's a little coming back to you.",

"Just because sometimes the nicest things are the ones with no reason.",

"You are someone I will always be grateful for.",

"Just because you deserve to hear something good about yourself today. 🌷"


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
