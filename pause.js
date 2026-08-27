/*
==================================================
LITTLE PAUSE
==================================================
*/

const pageTitle = "Little Pause";

const pageIcon = "🌸";

const pageSubtitle =
    "For the days when your mind feels a little too full.";


const messages = [

    "You don't have to figure everything out today. Take a breath and give yourself a little time.",

    "It's okay to pause. Not everything needs to be solved right now.",

    "Take a deep breath. You are doing better than you think.",

    "You are allowed to rest without feeling guilty about it.",

    "Whatever is on your mind, you don't have to carry it all at once.",

    "Some days simply need a little patience and a little kindness.",

    "The world can wait for a moment. Take this moment for yourself.",

    "You don't always have to be strong. It's okay to simply be.",

    "One difficult moment doesn't define your whole day.",

    "Be as kind to yourself as you are to everyone else.",

    "Slow down. You don't have to be in a hurry to reach everything.",

    "Take a moment. Breathe. You are allowed to simply be.",

    "Not every thought deserves your attention. Let a few of them pass by.",

    "You have handled difficult days before. This one will pass too.",

    "Put everything down for a few minutes. You deserve a quiet moment.",

    "You don't need to have all the answers right now.",

    "Sometimes the best thing you can do is nothing for a little while.",

    "Give your mind the same break you would give someone you love.",

    "It's just a moment, not your whole story.",

    "Close your eyes for a second. Let today be a little lighter.",

    "You can take things one breath, one thought, and one moment at a time.",

    "Whatever happened today, you are still you—and you are still wonderful.",

    "Rest your mind. Tomorrow can handle tomorrow.",

    "You deserve moments where nothing is expected from you.",

    "For now, just breathe. Everything else can wait."

];


/*
==================================================
UPDATE PAGE
==================================================
*/

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