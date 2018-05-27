var quotes = [
    "It's not who I am underneath, but what I do that defines me. -Batman",
    "Life doesn't give us purpose. We give life purpose. -The Flash (Barry Allen)",
    "Dreams save us. Dreams lift us up and transform us. And on my soul I swear... I'll never stop fighting. Ever. -Superman",
    "We have a saying, my people. Don't kill if you can wound, don't wound if you can subdue, don't subdue if you can pacify, and don't raise your hand at all until you've first extended it. -Wonder Woman",
    "The future is worth it. All the pain. All the tears. The future is worth the fight. -Martian Manhunter",
    "The greatest power on earth is the magnificent power we all of us posess... the power of the human brain. -Charles Xavier",
    'When the mob and the press and the whole world tell you to move, your job is to plant yourself like a tree beside the river of truth and tell the whole world, "No, YOU move!" -Captain America (Steve Rogers)',
    "That's half of heroing, noticing things. Noticing and not being afraid. You can find friends in super-unexpected places. -Ms. Marvel (Kamala Kahn)",
    "It's not dying that you need to be afraid of. It's never having lived in the first place. -The Green Hornet (Britt Reid)",
    "Why do we fall? So that we can learn to pick ourselves up. -Alfred Pennyworth",
    "If there is nothing but what we make in this world, brothers... let us make good. -Beta Ray Bill",
    "I have no idea where I\'m going to be tomorrow. But I accept the fact that tomorrow will come. And I\'m going to rise to meet it. -Wonder Girl (Donna Troy)",
    "True happiness is found along a middle road. There lies the balance and the harmony - with reason and emotion not at war but hand in hand. -Aquaman",
    "Just because someone stumbles and loses their way, it doesn't mean they're lost forever. -Charles Xavier",
    'Someone must have ripped the "Q" page out of the dictionary, \'cause I don\'t know the meaning of the word "quit." -Mr. Furious',
    "Wise man say forgiveness is divine, but never pay full price for late pizza. -Michelangelo"
  ];
  
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
    var currentQuote = quotes[randomNumber];
    var quoteLink = 'https://twitter.com/intent/tweet?text=' + currentQuote;
    document.getElementById('tweet-me').setAttribute("href", quoteLink);
  }  