/*
==================================================
JUST BECAUSE
==================================================
*/

const pageTitle = "Just Because";

const pageIcon = "❤️";

const pageSubtitle =
    "No special reason. You can scan this anytime.";


const messages = [

    "No reason. No occasion. Just a little reminder that you are loved. ❤️",

    "Just because you're you—and that's more than enough.",

    "You are appreciated more than you probably realise.",

    "Life is a little better because you're in it.",

    "You have a beautiful way of making people feel cared for.",

    "Just in case nobody told you today: you are special.",

    "Some people make life brighter simply by being around. You're one of them.",

    "You are loved on the good days, the bad days, and all the ordinary ones in between.",

    "Thank you for being the kind of person you are.",

    "You may not realise it, but the little things you do mean a lot to people.",

    "You have no idea how many lives you've made a little better just by being there.",

    "This is your random reminder that you're wonderful. That's it. ❤️",

    "You deserve to know that you're valued—not because of what you do, but because of who you are.",

    "Some people are simply irreplaceable. You are one of them.",

    "If this message could give you a hug, it would. 🤗",

    "There are people who silently admire the person you are. I'm one of them.",

    "Thank you for all the love you give without expecting anything in return.",

    "You make caring look effortless, even when it isn't.",

    "Just because I wanted you to know: you matter to me.",

    "Keep being the beautiful soul that you are—but remember to be kind to yourself too.",

    "You don't need a special day to be reminded how loved you are.",

    "Some people leave memories wherever they go. You leave warmth.",

    "This little message found you because you deserve a little appreciation today.",

    "You are one of those people whose presence simply feels comforting.",

    "Nothing to fix. Nothing to achieve. Just know that you are loved. ❤️"

];


document.title = pageTitle + " ❤️";

document.getElementById("icon").textContent =
    pageIcon;

document.getElementById("title").textContent =
    pageTitle;

document.getElementById("subtitle").textContent =
    pageSubtitle;


/*
==================================================
SHOW ONE RANDOM MESSAGE
==================================================
*/

const randomIndex =
    Math.floor(
        Math.random() * messages.length
    );


document.getElementById("message").textContent =
    messages[randomIndex];