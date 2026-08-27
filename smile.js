/*
==================================================
LITTLE REMINDER
==================================================
*/

const pageTitle = "Little Reminder";

const pageIcon = "🌷";

const pageSubtitle =
    "A little reminder for the person who often forgets herself.";


const messages = [

    "You spend so much time taking care of everyone else. Please remember to take care of yourself too.",

    "Your happiness matters just as much as everyone else's.",

    "You don't have to earn rest. You deserve it simply because you are you.",

    "Please don't forget the person who is always at the bottom of your priority list—you.",

    "Taking care of yourself isn't selfish. It's necessary.",

    "Your dreams matter. Don't keep putting them on hold for everyone else.",

    "You deserve the same kindness you so freely give to others.",

    "You are allowed to say no without feeling guilty.",

    "You don't always have to be the one who holds everything together.",

    "Someone needs to take care of you too. Let them.",

    "Please remember that being there for yourself is also a form of strength.",

    "You are more than the things you do for everyone else.",

    "Your worth isn't measured by how much you do for other people.",

    "It's okay to choose yourself sometimes. Actually, please do.",

    "Don't wait until you're exhausted to give yourself a break.",

    "You deserve beautiful things, peaceful days, and time that belongs only to you.",

    "The world doesn't need you to be perfect. It just needs you to be you.",

    "You are important even on the days when you don't accomplish anything.",

    "Please make space for the things that make your heart happy.",

    "Being caring doesn't mean you have to forget yourself.",

    "You are someone's favourite person too. Remember that.",

    "Your needs are not less important just because someone else's needs came first.",

    "It's okay if today you choose yourself first.",

    "You give so much love away. Save a little of it for yourself.",

    "Please remember: you matter, even when nobody is asking you for anything."

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
