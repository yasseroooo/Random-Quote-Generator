var prev;

function getRandomNumber() {

    return Math.floor(Math.random() * 10) + 1;
}
//========================================

var button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", function () {
 
    
    prev = rand;
    console.log(prev)

    var rand = getRandomNumber();
    
    if (rand === prev) {
        console.log("done")
        rand = getRandomNumber();
    }
    document.getElementById("Quote").innerHTML = quote[rand];

    console.log(rand)
});

var quote = ["“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney",
    "“The secret of getting ahead is getting started.” —Mark Twain",
    "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” —Mary Kay Ash",
    "“The best time to plant a tree was 20 years ago. The second best time is now.” ―Chinese Proverb",
    "“I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’” —Leah Busque",
    "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz",
    "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.” ―Arianna Huffington",
    "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”―Neil Gaiman",
    "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ―Helen Keller",
    "“Do one thing every day that scares you.” ―Eleanor Roosevelt",
    "“It’s no use going back to yesterday, because I was a different person then.” ―Lewis Carroll"];


