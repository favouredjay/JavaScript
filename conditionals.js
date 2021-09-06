var userName = "Joy";
console.log ( "Hello " + userName);
if(userName.length > 7){
    console.log("You have a really long name!");
}else{
    console.log("Your name isn't longer than 7 characters");
}

prompt(message);
var lemonChicken = false;
var beefWithBlackBeans = true;
var sweetAndSourPork = true;

if(lemonChicken){
    console.log ("Great, I'm having lemon chicken")
}

var userName = "user"
if(userName == "Joy")
console.log("Hello me")

var animal = []
console.log(animal)
animal.push("dog");
animal.push("lion");
animal.push("cat");
animal.pop("lion")
console.log(animal)
console.log(animal.length)
animal.unshift("bull")
console.log(animal)
var firstAnimal = animal.shift()
console.log(firstAnimal)
console.log(animal)

var colors = ["red", "blue", "yellow"]
console.log(colors.indexOf("red"))
console.log(colors[2])
console.log(colors.indexOf("purple"))
console.log(colors.join("-"))

console.log(Math.floor(Math.random() * 10))

var words = ["yellow", "blue", "green", "pink"]
var random = Math.floor(Math.random() * 4)
console.log(words[random])

var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
   ];
// Should I have another milkshake?
console.log(phrases[Math.floor(Math.random() * 5)]);
"I'm not sure that's a great idea"
// Should I do my homework?
console.log(phrases[Math.floor(Math.random() * 5)]);
"Maybe not today?"

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

 var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

 var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]; 

 var randomWord = randomWords[Math.floor(Math.random() * 5)];

 var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);
var randomWord = randomWords[Math.floor(Math.random() * randomInsult.length)];
console.log(randomWord);
var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");
console.log(randomInsult);

var randomBodyParts = ["nose", "head", "body"]
var randomAdjectives = ["stingy", "annoying", "rubbish"]
var randomAnimals = ["goat", "rat", "skunk"]
var randomAnimalsParts = ["Intestine", "mouth", "tail"]
var randomBodyPart = randomBodyParts[Math.floor(Math.random()*3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
var randomAnimal = randomAnimals[Math.floor(Math.random()*3)];
var randomAnimalPart = randomAnimalsParts[Math.floor(Math.random()*3)]

var randomInsult = ["Your "+ randomBodyPart+ " is more "+ randomAdjective + " than a "+ randomAnimal+ "'s "+ randomAnimalPart ]
console.log(randomInsult)


var randomBodyParts = ["nose", "head", "body"]
var randomAdjectives = ["stingy", "annoying", "rubbish"]
var randomAnimals = ["goat", "rat", "skunk"]
var randomAnimalsParts = ["Intestine", "mouth", "tail"]
var randomBodyPart = randomBodyParts[Math.floor(Math.random()*3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
var randomAnimal = randomAnimals[Math.floor(Math.random()*3)];
var randomAnimalPart = randomAnimalsParts[Math.floor(Math.random()*3)]

var randomInsult = [randomBodyPart, randomAdjective, randomAnimal, randomAnimalPart]
console.log(randomInsult.join(""))
var randomInsult = ["Your "+ randomBodyPart+ " is more "+ randomAdjective + " than a "+ randomAnimal+ "'s "+ randomAnimalPart ]
console.log(randomInsult)



var bigger = [3, 2, 1]
console.log(bigger.join(" is bigger than "))






var sentence = "Sarah is a nice girl";
var word = "sarah";
var sentence1 = sentence.ignoreCase;

console.log(`The sentence above ${sentence.includes(word) ? 'inclues' : 'does not include'} the word "${word}"`);

