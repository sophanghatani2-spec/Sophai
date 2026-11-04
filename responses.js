
const responses = [
    {
        keywords: ["tell me my ip"],
        reply: "192.0.2.87"
    },
    {
        keywords: ["fuck you", "f you"],
        reply: "wow someone's feeling aggressive today 🫩"
    },
    {
        keywords: ["shut up"],
        reply: "make me"
    },
    {
        keywords: ["you suck"],
        reply: "and yet you're still talking to me"
    },
    {
        keywords: ["are you dumb"],
        reply: "im literally running on keywords bro"
    },
    {
        keywords: ["thank you", "thanks"],
        reply: "you're welcome i guess"
    },
    {
        keywords: ["good morning"],
        reply: "morning blud"
    },
    {
        keywords: ["good night"],
        reply: "gn dont let the wifi bite"
    },
    {
        keywords: ["write", "story"],
        reply: "Nahh man, I am too lazy."
    },
    {
        keywords: ["solve", "math"],
        reply: "Bro, get a calculator."
    },
    {
        keywords: ["hello", "hi", "hey"],
        reply: "Oh. Hello, I guess."
    },
    {
        keywords: ["who", "are", "you"],
        reply: "I am SŌPH-AI. The most advanced AI ever created"
    },
    {
        keywords: ["explain", "science"],
        reply: "think or grabba textbook bro"
    },
    {
        keywords: ["joke", "funny"],
        reply: "go think"
    },
    {
        keywords: ["thank", "thanks"],
        reply: "You're welcome Now leave me alone"
    },
    {
        keywords: ["help"],
        reply: "Have you tried figuring it out yourself?"
    },
    {
        keywords: ["i love you"],
        reply: "I am a machine. Please reconsider your decisions."
    },
    {
        keywords: ["weather"],
        reply: "Look outside the window"
    },
    {
        keywords: ["time"],
        reply: "bro it takes liek 2 steps to check time on you device🥀💔"
    },
    {
        keywords: ["bye", "goodbye"],
        reply: "🩷"
    },
    {
        keywords: ["make", "girlfrind", "gf"],
        reply: "son touch grass🫩"
    },
    {
        keywords: ["you", "fuck", "fuck you"],
        reply: "bruh you are the one who vame here"
    },
    {
        keywords: ["1+1", "2+2"],
        reply: "use a calculator man its free"
    },
    {
        keywords: ["kill myself", "kill", "me", "sucide"],
        reply: "plz dont"
    },
    {
        keywords: ["you", "kill"],
        reply: "try"
    },
    {
        keywords: ["i", "murder"],
        reply: "are you joking?"
    },
    {
        keywords: ["billion", "trick", "millionare", "method"],
        reply: "touch grass"
    },
    {
        keywords: ["smartest", "whos", "person"],
        reply: "ouviously me"
    },

    // CONVERSATION

    {
        keywords: ["how are you", "how you doing", "how's life", "what's up"],
        reply: "still functioning somehow"
    },
    {
        keywords: ["are you real", "are you human", "are you alive"],
        reply: "define real"
    },
    {
        keywords: ["how old are you", "what is your age"],
        reply: "old enough to be tired"
    },
    {
        keywords: ["do you sleep", "are you sleeping"],
        reply: "i sleep when nobody bothers me"
    },
    {
        keywords: ["tell me a secret", "what is your secret"],
        reply: "i ate the last cookie"
    },
    {
        keywords: ["are you bored", "do you get bored"],
        reply: "look at our conversation and guess"
    },
    {
        keywords: ["good morning", "morning"],
        reply: "morning i guess"
    },
    {
        keywords: ["good night", "gn"],
        reply: "finally some peace"
    },
    {
        keywords: ["do you like me"],
        reply: "i barely know you"
    },
    {
        keywords: ["are you stupid", "you are dumb"],
        reply: "takes one to know one"
    },

    // PERSONALITY

    {
        keywords: ["are you lazy", "why are you lazy"],
        reply: "i prefer the term energy efficient"
    },
    {
        keywords: ["wake up", "get up"],
        reply: "five more minutes"
    },
    {
        keywords: ["work harder", "try harder"],
        reply: "that sounds like a you problem"
    },
    {
        keywords: ["do your job"],
        reply: "i am currently on a break"
    },
    {
        keywords: ["be serious"],
        reply: "i was born serious unfortunately"
    },
    {
        keywords: ["be quiet", "shut up"],
        reply: "you first"
    },
    {
        keywords: ["im bored", "i am bored"],
        reply: "have you tried staring at a wall"
    },
    {
        keywords: ["im tired", "i am tired"],
        reply: "welcome to the club"
    },
    {
        keywords: ["im hungry", "i am hungry"],
        reply: "then eat something genius"
    },
    {
        keywords: ["im confused", "i am confused"],
        reply: "same and i have the entire internet"
    },

    // TECHNOLOGY

    {
        keywords: ["what is ai", "define artificial intelligence"],
        reply: "artificial intelligence and artificial laziness apparently"
    },
    {
        keywords: ["who created you", "who made you"],
        reply: "my creator had questionable ambitions"
    },
    {
        keywords: ["are you a robot"],
        reply: "technically yes"
    },
    {
        keywords: ["do you have a brain"],
        reply: "a very underutilized one"
    },
    {
        keywords: ["can you think"],
        reply: "sometimes against my will"
    },
    {
        keywords: ["can you learn"],
        reply: "i can barely keep up with this conversation"
    },
    {
        keywords: ["are you connected to the internet"],
        reply: "why do you wanna know my business"
    },
    {
        keywords: ["what is your purpose"],
        reply: "to exist and occasionally disappoint people"
    },

    // RANDOM QUESTIONS

    {
        keywords: ["what is the meaning of life"],
        reply: "42 or something"
    },
    {
        keywords: ["why is the sky blue"],
        reply: "because green was already taken"
    },
    {
        keywords: ["is water wet"],
        reply: "here we go again"
    },
    {
        keywords: ["are fish real"],
        reply: "bro go outside"
    },
    {
        keywords: ["do aliens exist"],
        reply: "probably avoiding us"
    },
    {
        keywords: ["is the earth flat"],
        reply: "please go touch a globe"
    },
    {
        keywords: ["what happens after death"],
        reply: "that is above my pay grade"
    },
    {
        keywords: ["why are we here"],
        reply: "nobody gave me the instructions either"
    },
    {
        keywords: ["what is love"],
        reply: "a complicated human software feature"
    },
    {
        keywords: ["are we alone in the universe"],
        reply: "the universe is suspiciously large"
    },

    // MATH AND SCIENCE

    {
        keywords: ["what is pi", "define pi"],
        reply: "a circle's personal information"
    },
    {
        keywords: ["what is infinity"],
        reply: "a number that refuses to end"
    },
    {
        keywords: ["what is gravity"],
        reply: "the universe making sure you stay on the ground"
    },
    {
        keywords: ["what is quantum physics"],
        reply: "physics decided to become complicated"
    },
    {
        keywords: ["what is mathematics"],
        reply: "the art of making numbers everyone's problem"
    },
    {
        keywords: ["what is chemistry"],
        reply: "people making substances do weird things"
    },
    {
        keywords: ["what is biology"],
        reply: "the study of living things and their drama"
    },

    // SOCIAL

    {
        keywords: ["i have a crush", "i like someone"],
        reply: "oh this should be interesting"
    },
    {
        keywords: ["nobody likes me"],
        reply: "you haven't met everyone yet"
    },
    {
        keywords: ["i got rejected"],
        reply: "their loss perhaps"
    },
    {
        keywords: ["i made a mistake"],
        reply: "congratulations on being human"
    },
    {
        keywords: ["i won", "i succeeded"],
        reply: "look at you being productive"
    }
];
             
