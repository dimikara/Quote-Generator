window.onload=function(){
    const newQuoteButton = document.getElementById('js-new-quote');
    newQuoteButton.addEventListener('click', getQuote);
}

const myQuotes = [
    {   
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
    },
    {   
        "quote": "Doubt kills more dreams than failure ever will.",
        "author": "Unknown"
    },
    {   
        "quote": "Every day is a new beginning. Take a deep breath, smile and start again.",
        "author": "Unknown"
    },
    {   
        "quote": "You only fail when you stop trying.",
        "author": "Unknown"
    },
    {   
        "quote": "Good things are coming. Just keep believing.",
        "author": "Unknown"
    },
    {   
        "quote": "You will never always be motivated, so you must learn to be disciplined.",
        "author": "Unknown"
    },
    {   
        "quote": "Success takes time. Stay focused, be patient.",
        "author": "Unknown"
    },
    {   
        "quote": "Failure is success in progress.",
        "author": "Albert Einstein"
    },
    {   
        "quote": "Success doesn't come from what you do occasionally, but from what you do consistently.",
        "author": "Unknown"
    },
    {   
        "quote": "Every accomplishment starts with the decision to try.",
        "author": "John F. Kennedy"
    },
    {   
        "quote": "Push yourself because no one else is going to do it for you.",
        "author": "Unknown"
    },
    {   
        "quote": "When you feel like quitting, think about why you started.",
        "author": "Unknown"
    },
    {   
        "quote": "Impossible is just an opinion.",
        "author": "Paulo Coelho"
    },
    {   
        "quote": "Look in the mirror. That's your competition.",
        "author": "Unknown"
    },
    {   
        "quote": "Strive for progress, not perfection.",
        "author": "Unknown"
    },
    {   
        "quote": "You can't expect to succeed if you only put in work on the days you feel like it.",
        "author": "Unknown"
    },
    {   
        "quote": "Success is nothing more than a few simple disciplines, practiced every day.",
        "author": "Unknown"
    },
    {   
        "quote": "Small steps are better than no steps.",
        "author": "Unknown"
    },
    {   
        "quote": "It's a slow process, but quitting won't speed it up.",
        "author": "Unknown"
    },
    {   
        "quote": "The habit of persistence is the habit of victory.",
        "author": "Herbert Kaufman"
    },
    {   
        "quote": "The moment you want to quit is the moment you need to keep pushing.",
        "author": "Unknown"
    },
    {   
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {   
        "quote": "The ultimate inspiration is the deadline.",
        "author": "Nolan Bushnell"
    },
    {   
        "quote": "Will it be easy? No. Will it be worth it? Absolutely.",
        "author": "Unknown"
    },
    {   
        "quote": "The road to success is always under construction.",
        "author": "Lily Tomlin"
    },
    {   
        "quote": "There is no substitute for hard work.",
        "author": "Thomas Edison"
    },
    {   
        "quote": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser"
    },
    {   
        "quote": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock"
    },
    {   
        "quote": "Learning is a treasure that will follow its owner everywhere.",
        "author": "Chinese proverb"
    },
    {   
        "quote": "Anticipate the difficult by managing the easy.",
        "author": "Lao Tzu"
    },
    {   
        "quote": "The shortest answer is doing.",
        "author": "Lord Herbert"
    },
    {   
        "quote": "There is no failure except in no longer trying.",
        "author": "Elbert Hubbard"
    },
    {   
        "quote": "Mountains cannot be surmounted except by winding paths.",
        "author": "Johann Wolfgang von Goethe"
    },
    {   
        "quote": "If you wish to be a writer, write.",
        "author": "Epictetus"
    },
    {   
        "quote": "The journey of a thousand miles begins with one step.",
        "author": "Lao Tzu"
    },
    {
        "quote": "If there is no struggle, there is no progress.",
        "author": "Frederick Douglass"
    },
    {
        "quote": "The beginning of knowledge is the discovery of something we do not understand.",
        "author": "Frank Herbert"
    },
    {
        "quote": "Be thankful when you don't know something for it gives you the opportunity to learn.",
        "author": "Unknown"
    },
    {
        "quote": "I never see what has been done; I only see what remains to be done.",
        "author": "Marie Curie"
    },
    {
        "quote": "You didn't come this far to only come this far.",
        "author": "Unknown"
    },
    {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now!",
        "author": "Chinese proverb"
    },
    {
        "quote": "Be willing to walk alone. Many who started with you, won't finish with you.",
        "author": "Unknown"
    },
    {
        "quote": "Best way to get something done is to begin.",
        "author": "Unknown"
    },
    {
        "quote": "Some people want it to happen, some wish it would happen, others make it happen.",
        "author": "Michael Jordan"
    },
    {
        "quote": "Don't limit your challenges. Challenge your limits.",
        "author": "Unknown"
    },
    {   
        "quote": "The key to success is to focus on goals, not obstacles.",
        "author": "Unknown"
    },
    {   
        "quote": "You are only confined by the walls you build yourself.",
        "author": "Unknown"
    },
    {   
        "quote": "If you never failed, you never tried anything new.",
        "author": "Unknown"
    },
    {   
        "quote": "Whether you think you can or you think you can't, you're right.",
        "author": "Henry Ford"
    },
    {   
        "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "author": "Robert Louis Stevenson"
    },
    {   
        "quote": "If it doesn't challenge you, it won't change you.",
        "author": "Fred Devito"
    },
    {   
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas Edison"
    },
    {   
        "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "author": "Zig Ziglar"
    },
    {   
        "quote": "You don't need to see the whole staircase, just take the first step.",
        "author": "Martin Luther King Jr."
    },
    {   
        "quote": "A lot of people have gone further than they thought they could because someone else thought they could.",
        "author": "Zig Ziglar"
    },
    {   
        "quote": "You are never too old to set another goal or to dream a new dream.",
        "author": "C. S. Lewis"
    },
    {
        "quote": "Every problem is a gift — without problems we would not grow.",
        "author": "Tony Robbins"
    },
    {
        "quote": "You can never cross the ocean until you have the courage to lose sight of the shore",
        "author": "Christopher Columbus"
    },
    {
        "quote": "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
        "author": "Samuel Beckett"
    },
    {
        "quote": "When the winds of change blow, some people build walls and others build windmills",
        "author": "Chinese proverb"
    }
];

/*
At first I wanted to use the free API below but unfortunately does not allow 
any parameters in order to fetch only one quote at a time; so using 
the endpoint below results in getting an array with all the quotes.
NOT what I was looking for.
const endpoint = 'https://type.fit/api/quotes';
*/


function displayQuote(quote) {
    const quoteText = document.getElementById('js-quote-text') 
    quoteText.textContent = quote;
    const twitterButton = document.getElementById('js-tweet');
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

function getQuote() {
    let x = myQuotes.length;
    let y = Math.floor((Math.random() * x));
    if (myQuotes[y].author === "Unknown") {
        displayQuote(myQuotes[y].quote);
    } else {
        displayQuote(myQuotes[y].quote + ' (' + myQuotes[y].author + ')');
    }
}

/*
This is done in order to make a quote display when a user visits
the page for the first time or reloads it.
Check more here: 
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
*/
document.addEventListener('DOMContentLoaded', () => {
    getQuote(displayQuote);
  }
)

/*
Inspiration from:
https://freshman.tech/random-quote-machine/
https://inspiredwebdev.com/create-random-quote-machine
*/

/*
I want to check more thoroughly the Template Literals:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
And this from Twitter:
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/hashtag-button
*/


