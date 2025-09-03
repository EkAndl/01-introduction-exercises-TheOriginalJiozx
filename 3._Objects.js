// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(greetings.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const me = {
    name: "Omar Al-Ali",
    age: "30"
}

console.log(me.name);
console.log(me.age);

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = { isAllowed: true };

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute."

console.log(thisSong.description);

console.log(thisSong.about);

// --------------------------------------


