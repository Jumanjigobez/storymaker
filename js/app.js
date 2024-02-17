//function to ease retrieval of DOM elements
elem = x => {
  return document.querySelector(x);
};

/* Variables
-------------------------------------------------- */
//Arrays of the text lists
var nouns_1 = [
    "The turkey",
    "Mom",
    "Dad",
    "The dog",
    "My teacher",
    "The elephant",
    "The cat"
  ],
  verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
  adjectives = [
    "a funny",
    "a scary",
    "a goofy",
    "a slimy",
    "a barking",
    "a fat"
  ],
  nouns_2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
  nouns_3 = [
    "on the moon",
    "on the chair",
    "in my spaghetti",
    "in my soup",
    "on the grass",
    "in my shoes"
  ];

//The buttons for each array variables
var nouns1_btn = elem(".nouns1_btn"),
  verbs_btn = elem(".verbs_btn"),
  adjectives_btn = elem(".adjectives_btn"),
  nouns2_btn = elem(".nouns2_btn"),
  nouns3_btn = elem(".nouns3_btn"),
  suprises_btn = elem(".suprises_btn"),
  playback_btn = elem(".playback_btn"),
  random_Index = 0, //The random integer value that will choose a random index of an array
  joinedText = [], //the random texts will be Placed together make a story
  random_joinedText = []; //Hold random generated sentence

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = "";

/* Functions
-------------------------------------------------- */

//The speak function
speakNow = string => {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
};

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text
//For the nouns subject
nouns1_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);
  textToSpeak = nouns_1[randIndex]; //assign the nouns 1 random text to textToSpeak

  joinedText[0] = textToSpeak; //Store the text to index 0 column for nouns 1

  speakNow(textToSpeak);

  console.log(randIndex);
};

//for the verbs
verbs_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);
  textToSpeak = verbs[randIndex]; //assign the verbs random text to textToSpeak

  joinedText[1] = textToSpeak; //Store the text to index 0 column for nouns 1

  speakNow(textToSpeak);

  console.log(randIndex);
};

//for the adjectives
adjectives_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);
  textToSpeak = adjectives[randIndex]; //assign the adjectives random text to textToSpeak

  joinedText[2] = textToSpeak; //Store the text to index 0 column for nouns 1

  speakNow(textToSpeak);

  console.log(randIndex);
};

//for the second nouns
nouns2_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);
  textToSpeak = nouns_2[randIndex]; //assign the nouns_2 random text to textToSpeak

  joinedText[3] = textToSpeak; //Store the text to index 0 column for nouns 1
  speakNow(textToSpeak);

  console.log(randIndex);
};

//for the place nouns
nouns3_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);
  textToSpeak = nouns_3[randIndex]; //assign the nouns_3 random text to textToSpeak

  joinedText[4] = textToSpeak; //Store the text to index 0 column for nouns 1

  speakNow(textToSpeak);

  console.log(randIndex);
};

//for the suprises which will read out random joined texts
suprises_btn.onclick = () => {
  randIndex = Math.floor(Math.random() * 7);

  random_joinedText[0] = nouns_1[randIndex];
  random_joinedText[1] = verbs[randIndex];
  random_joinedText[2] = adjectives[randIndex];
  random_joinedText[3] = nouns_2[randIndex];
  random_joinedText[4] = nouns_3[randIndex];

  random_joinedText.forEach(text => {
    //Read out the random generated sentence
    speakNow(text);
  });
};

//for the playback which will repeat the joined texts
playback_btn.onclick = () => {
  if (joinedText.length == 0) {
    //If there is no Items in joined Text then playback the random generated sentence
    random_joinedText.forEach(text => {
      speakNow(text);
    });
  }
  joinedText.forEach(text => {
    speakNow(text);
  });
};

//For the Loading Screen
var loading_screen = elem("#loading_screen");

setTimeout(() => {
  //Timeout of 5 seconds for the speech api to be loaded
  loading_screen.classList.add("loaded");
}, 5000);
