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
        "quote": "When the winds of change blow, some people build walls and others build windmills.",
        "author": "Chinese proverb"
    },
    {
        "quote": "Always walk through life as you if you have something new to learn and you will.",
        "author": "Vernon Howard"
    },
    {
        "quote": "Sometimes you don't realize your own strength until you come face to face with your greatest weakness.",
        "author": "Susan Gale"
    },
    {
        "quote": "The only difference between ordinary and extraordinary is that little extra.",
        "author": "Jimmy Johnson"
    },
    {
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
    },
    {
        "quote": "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
        "author": "Antoine de Saint-Exypery"
    },
    {
        "quote": "Take action! An inch of movement will bring you closer to your goals than a mile of intention.",
        "author": "Dr. Steve Maraboli"
    },
    {
        "quote": "However difficult life may seem, there is always something you can do and succeed at.",
        "author": "Stephen Hawking"
    },
    {
        "quote": "It’s not the load that breaks you down, it’s the way you carry it.",
        "author": "Unknown"
    },
    {
        "quote": "Go the extra mile. It's never crowded there.",
        "author": "Dr. Wayne D. Dyer"
    },
    {
        "quote": "The day that you plant the seed is not the day you eat the fruit.",
        "author": "Fabienne Fredrickson"
    },
    {
        "quote": "A pessimist sees the difficulty in every opportunity: an optimist sees the opportunity in every difficulty.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Challenges are what makes life interesting. Overcoming them is what makes life meaningful.",
        "author": "Joshua J. Marine"
    },
    {
        "quote": "Never give up on something you really want. It's difficult to wait, but it's more difficult to regret.",
        "author": "Unknown"
    },
    {
        "quote": "There will come a time when you believe everything is finished; that will be the beginning.",
        "author": "Louis L'Amour"
    },
    {
        "quote": "The important thing in life is to have a great aim, and the determination to attain it.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "The miracle isn't that I finished. It's that I had the courage to start.",
        "author": "John Bingham"
    },
    {
        "quote": "What's done is done. What's gone is gone. One of life's lessons is always moving on. It's okay to look back to see how far you've come but keep moving forward.",
        "author": "Roy T. Bennett"
    },
    {
        "quote": "When you doubt your power, you give power to your doubt.",
        "author": "Unknown"
    },
    {
        "quote": "Pause if you're tired, but don't stop.",
        "author": "Unknown"
    },
    {
        "quote": "As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being redirected to something better.",
        "author": "Unknown"
    },
    {
        "quote": "Breathe, darling. This is just a chapter, not your whole story.",
        "author": "S. C. Lourie"
    },
    {
        "quote": "A smooth sea never made a skilled sailor.",
        "author": "Franklin Roosvelt"
    },
    {
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
    },
    {
        "quote": "More is lost by indecision than wrong decision. Indecision is the thief of opportunity. It will steal you blind.",
        "author": "Marcus Tullius Cicero"
    },
    {
        "quote": "The greatest pleasure in life is doing what people say you cannot do.",
        "author": "Walter Bagehot"
    },
    {
        "quote": "We know what we are, but not what we may be.",
        "author": "William Shakespeare"
    },
    {
        "quote": "A river cuts through rock, not because of its power, but because of its persistence.",
        "author": "Jim Watkins"
    },
    {
        "quote": "If it is important to you, you will find a way. If not, you will find an excuse.",
        "author": "Ryan Blair"
    },
    {
        "quote": "Excuses don't get results.",
        "author": "Unknown"
    },
    {
        "quote": "You many never know what results come of your actions, but if you do nothing, there will be no results.",
        "author": "Mahatma Ghandi"
    },
    {
        "quote": "Look for the answer inside your question.",
        "author": "Rumi"
    },
    {
        "quote": "Knowledge is the treasure of a wise man.",
        "author": "William Penn"
    },
    {
        "quote": "Learning without thought is labor lost; thought without learning is perilous.",
        "author": "Confucius"
    },
    {
        "quote": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
        "author": "Naguib Mahfouz"
    },
    {
        "quote": "Neither a wise man nor a brave man lies down on the tracks of history to wait for the train of the future to run over him.",
        "author": "Dwight D. Eisenhower"
    },
    {
        "quote": "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
        "author": "Dr. David M. Burns"
    },
    {
        "quote": "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
        "author": "Booker Washington"
    },
    {
        "quote": "Don't let what you can't do stop you from doing what you can do.",
        "author": "Unknown"
    },
    {
        "quote": "Complaining doesn't change a thing only taking action does.",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "Everything in the universe goes by indirection. There are no straight lines.",
        "author": "Ralph Emerson"
    },
    {
        "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
        "author": "Henri-Frederic Amiel"
    },
    {
        "quote": "An obstacle may be either a stepping stone or a stumbling block.",
        "author": "Unknown"
    },
    {
        "quote": "All is flux; nothing stays still.",
        "author": "Heraclitus"
    },
    {
        "quote": "The eye sees only what the mind is prepared to comprehend.",
        "author": "Henri Bergson"
    },
    {
        "quote": "The only time you should look back, is to see how far you've come.",
        "author": "Unknown"
    },
    {
        "quote": "There is nothing in a caterpillar that tells you it’s going to be a butterfly.",
        "author": "Buckminster Fuller"
    },
    {
        "quote": "All the world is a laboratory to the inquiring mind.",
        "author": "Dr. Martin H. Fischer"
    },
    {
        "quote": "No road is long with good company.",
        "author": "Turkish proverb"
    },
    {
        "quote": "Climate is what we expect, weather is what we get.",
        "author": "Mark Twain"
    },
    {
        "quote": "Opportunity dances with those already on the dance floor.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "Don’t waste time waiting for inspiration. Begin, and inspiration will find you.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "Nothing is more expensive than a missed opportunity.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.",
        "author": "Martin Luther King Jr."
    },
    {
        "quote": "When you get to the end of your rope, tie a knot and hang on.",
        "author": "Franklin D. Roosvelt"
    },
    {
        "quote": "The best preparation for tomorrow is doing your best today.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "Remember that what's right isn't always popular, and what's popular isn't always right.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "When you have exhausted all possibilities, remember this - you haven't.",
        "author": "Thomas Edison"
    },
    {
        "quote": "Kites rise highest against the wind, not with it.",
        "author": "Winston Churchill"
    },
    {
        "quote": "It is impossible for a man to learn what he thinks he already knows.",
        "author": "Epictetus"
    },
    {
        "quote": "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "I walk slowly, but I never walk backward.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
        "author": "Michelangelo"
    },
    {
        "quote": "Don't be afraid to start over. This time you're not starting from scratch, you're starting from experience.",
        "author": "Unknown"
    },
    {
        "quote": "What is not started today is never finished tomorrow.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "If you are going through hell, keep going.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Hire character. Train skill.",
        "author": "Peter Schutz"
    },
    {
        "quote": "We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Sometimes when you're in a dark place you think you've been buried, but actually you've been planted.",
        "author": "Christine Caine"
    },
    {
        "quote": "Two things define you. Your patience when you have nothing, and your attitude when you have everything.",
        "author": "Unknown"
    },
    {
        "quote": "Fortune knocks but once, but misfortune has much more patience.",
        "author": "Unknown"
    },
    {
        "quote": "When the world says 'Give up,' hope whispers 'Try it one more time'.",
        "author": "Unknown"
    },
    {
        "quote": "All good things arrive unto them that wait--and don't die in the meantime.",
        "author": "Mark Twain"
    },
    {
        "quote": "If you don't like something, change it. If you can't change it, change your attitude.",
        "author": "Maya Angelou"
    },
    {
        "quote": "Courage is not having the strength to go on... It's going on when you don't have the strength.",
        "author": "Unknown"
    },
    {
        "quote": "A diamond is a chunk of coal that did well under pressure.",
        "author": "Unknown"
    },
    {
        "quote": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "author": "Benjamin Franklin"
    },
    {
        "quote": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle"
    },
    {
        "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "The size of your dreams must always exceed your current capacity to achieve them.",
        "author": "Ellen Johnson Sirleaf"
    },
    {
        "quote": "Sometimes the place you are used to is not the place you belong. You belong where you believe you belong.",
        "author": "Unknown"
    },
    {
        "quote": "Name the greatest of all inventors. Accident.",
        "author": "Mark Twain"
    },
    {   
        "quote": "In the middle of difficulty lies opportunity.",
        "author": "Albert Einstein"
    },
    {   
        "quote": "Any fool can know. The point is to understand.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Don't judge me by my successes, judge me by how many times I fell down and got back up again.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        "author": "Stephen Hawking"
    },
    {
        "quote": "You are the books you read, the films you watch, the music you listen to, the people you spend time with the conversation you engage in. Choose wisely what you feed your mind.",
        "author": "Jac Vanek"
    },
    {
        "quote": "Ability is nothing without opportunity.",
        "author": "Napoleon Bonaparte"
    },
    {
        "quote": "Sometimes you face difficulties not because you're doing something wrong, but because you're doing something right.",
        "author": "Unknown"
    },
    {
        "quote": "Don't close the book when bad things happen in your life, just turn the page and begin a new chapter.",
        "author": "Unknown"
    },
    {
        "quote": "Judge a person by their questions, rather than their answers.",
        "author": "Voltaire"
    },
    {
        "quote": "Falling down is not a failure. Failure comes when you stay where you have fallen.",
        "author": "Socrates"
    },
    {
        "quote": "Stop being afraid of what could go wrong, and start being excited of what could go right.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosvelt"
    },
    {
        "quote": "Paths are made by walking.",
        "author": "Franz Kafka"
    },
    {
        "quote": "Certain things catch your eye, but pursue only those that catch your heart.",
        "author": "Indian Proverb"
    },
    {
        "quote": "Inspiration exists, but it must find you working.",
        "author": "Pablo Picasso"
    },
    {
        "quote": "The two more powerful warriors are patience and time.",
        "author": "Leo Tolstoy"
    },
    {
        "quote": "Sweat more during peace; bleed less during war.",
        "author": "Sun Tzu"
    },
    {
        "quote": "Once we accept our limits, we go beyond them.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you won, and all the fears you have overcome.",
        "author": "Unknown"
    },
    {
        "quote": "Be more concerned with your character than with your reputation. Your character is what you really are while your reputation is merely what others think you are.",
        "author": "John Wooden"
    },
    {
        "quote": "We don't grow when things are easy, we grow when we face challenges.",
        "author": "Joyce Meyer"
    },
    {
        "quote": "You never fail until you stop trying.",
        "author": "Albert Einstein"
    }
];

/*
At first I wanted to use the free API below but unfortunately does not allow 
any parameters:
const endpoint = 'https://type.fit/api/quotes';
and I wanted to have control over the quotes and make appear only selected 
quotes of my preference.
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
For more, check here: 
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
*/
document.addEventListener('DOMContentLoaded', () => {
    getQuote(displayQuote);
  }
)


/*
I want to check more thoroughly the Template Literals:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
And this from Twitter:
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/hashtag-button
*/


