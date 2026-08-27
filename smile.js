/*
==================================================
SMILE PLEASE
==================================================
*/

const pageTitle = "Smile Please";

const pageIcon = "😊";

const pageSubtitle =
    "Because sometimes you just need a little smile.";


const messages = [

    "Okay, enough seriousness for now. Here's your official permission to smile. 😊",

    "Just checking... did you smile today? If not, consider this your reminder.",

    "Your smile looks good on you. Please use it more often. ❤️",

    "No reason needed. Smile anyway. 😄",

    "Someone out there is probably smiling because you're part of their life.",

    "Today's tiny mission: find one silly thing and enjoy it completely.",

    "You are allowed to have a completely unnecessary happy moment. Go ahead. 😄",

    "If life is being dramatic today, don't join the drama. Just smile and walk away. 😂",

    "Here's a little reminder that happiness doesn't always need a big reason.",

    "Smile. Not because everything is perfect, but because you deserve a little happiness anyway.",

    "Sending you one invisible hug and one very visible reason to smile. ❤️",

    "If nobody has told you today—you are pretty amazing.",

    "Go make yourself your favourite drink. Consider that today's tiny celebration. ☕",

    "A smile costs nothing and somehow makes everything feel a little lighter.",

    "This message has one job: make you smile. Did it work? 😜",

    "Forget the to-do list for five minutes. You're allowed to enjoy yourself.",

    "You make ordinary moments feel special without even trying.",

    "Today could use a little more of your smile.",

    "Reminder: laughing at your own jokes is completely acceptable. 😂",

    "Here's your excuse to stop whatever you're doing and do something you enjoy.",

    "Somewhere in this world, someone is very lucky to know you.",

    "You deserve random happiness—not just happiness after everything is done.",

    "Your smile has probably made someone's difficult day better without you knowing.",

    "Take this as a tiny digital nudge: smile, breathe, and enjoy your day.",

    "And if nothing else worked... chocolate is always an option. 🍫❤️"

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