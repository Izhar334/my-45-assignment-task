//Task (01)
// Install Node.js, TypeScript and VS Code on your computer.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Installed Node,js, Typesript, and VS.code
//Task (02)
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Brother";
var message = " Hello " + personName + " would you like to learn some Python today?";
console.log(message);
// Task (03)
// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// // uppercase, and titlecase.
var personName1 = "Izhar Ahmed";
// // Lowercase
var lowercaseName = personName1.toLowerCase();
console.log("Lowercase:", lowercaseName);
// // Uppercase
var uppercaseName = personName1.toUpperCase();
console.log("Uppercase:", uppercaseName);
// // Title case
var words = personName1.split(" ");
var titlecaseName = "Izhar Ahmed";
// // for (let word of words) {
// //     titlecaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
// // }
titlecaseName = titlecaseName.trim();
console.log("Title case:", titlecaseName);
// //Task (04)
// // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// // Your output should look something like the following, including the quotation marks:
// // Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var author = "Franklin D.Roosevelt";
var quote = " The only thing we have to fear is fear itself. ";
console.log(author + quote + " Once said,  Freedom from... Freedom from fear... Freedom of speech... Freedom of worship...and Freedom of ");
// Task (05)
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Marie Curie";
var message1;
message1 = ' once said, "One never notices what has been done; one only sees what remains to be done."';
console.log(famous_person + message1);
// Task (06)
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var name1 = "\t  Albert Einstein  \n";
console.log("Name with whitespace:\n" + name1);
var strippedName = name1.trim();
console.log("Name without whitespace:\n" + strippedName);
// Task (07)
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition:", 4 + 4);
console.log("Subtraction:", 16 - 8);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 64 / 8);
// Task (08)
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(2 * 4);
console.log(16 - 8);
console.log(64 / 8);
console.log(12 % 4);
// Task (09)
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 42;
var message2 = "My favorite number is ".concat(favoriteNumber);
console.log(message2);
// Task (10)
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Program 1: Stripping Names with comments.
// This program demonstrates how to remove leading and trailing whitespace from a string.
// Author: Izhar Ahmed (2024-03-01)
var name2 = "\t  Albert Einstein  \n";
console.log("Name with whitespace:\n" + name2);
var strippedName1 = name2.trim();
console.log("Name without whitespace:\n" + strippedName1);
//Program 2: Favorite Number with comments.
// This program stores a favorite number and creates a message revealing it.
// Author: Izhar Ahmed (2024-03-01)
var favoriteNumber1 = 42;
var message3 = "My favorite number is ".concat(favoriteNumber1);
console.log(message3);
// Task (11)
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time
var names = ["Mian Arman Arain", "Mr Yaqoob Malik", "Mr Faizan Malik", "Mr Irfan Pathan"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Task (12)
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names1 = ["Mian Arman Arain", "Mr Yaqoob Malik", "Mr Faizan Malik", "Mr Irfan Pathan"];
for (var i = 0; i < names.length; i++) {
    var greeting = "Hello, ".concat(names1[i], "! How are you doing today?");
    console.log(greeting);
}
// Task (13)
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteVehicles = ["Honda CD70", "Suzuki 150 Bike", "Kia Sportage Car"];
for (var i = 0; i < favoriteVehicles.length; i++) {
    var statement = "I would like to own a ".concat(favoriteVehicles[i], ".");
    console.log(statement);
}
// Task (14)
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Mian Arman Arain", "Mr Yaqoob Malik", "Mr Faizan Malik"];
for (var i = 0; i < guestList.length; i++) {
    var invitation = "Dear ".concat(guestList[i], ", I would be honored to have you join me for dinner. It would be a privilege to discuss your contributions to science and your unique perspectives on the world.");
    console.log(invitation);
}
// Task (15)
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestList1 = ["Mian Arman Arain", "Mr Yaqoob Malik", "Mr Faizan Malik"];
var guestWhoCantMakeIt = "Mr Faizan Malik";
var indexOfGuestWhoCantMakeIt = guestList1.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList1.splice(indexOfGuestWhoCantMakeIt, 1);
    console.log("".concat(guestWhoCantMakeIt, " unfortunately can't make it to the dinner."));
    var newGuest = "Ammaz Ahmed";
    guestList1.push(newGuest);
    console.log("I have invited ".concat(newGuest, " to join the dinner instead."));
}
else {
    console.log("".concat(guestWhoCantMakeIt, " is not on the guest list."));
}
for (var i = 0; i < guestList1.length; i++) {
    var invitation = "Dear ".concat(guestList1[i], ", I would be honored to have you join me for dinner. It would be a privilege to discuss your contributions to science and your unique perspectives on the world.");
    console.log(invitation);
}
// Task (16)
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList2 = ["Mr Adil Khan", "Mr Rehaan Khan"];
var guestWhoCantMakeIt1 = "Mr Faizan Malik";
// Find the index of the guest who can't make it (using indexOf)
var indexOfGuestWhoCantMakeIt1 = guestList2.indexOf(guestWhoCantMakeIt1);
// Check if the guest is found in the list (index !== -1)
if (indexOfGuestWhoCantMakeIt1 !== -1) {
    guestList2.splice(indexOfGuestWhoCantMakeIt1, 1);
    console.log("".concat(guestWhoCantMakeIt1, " unfortunately can't make it to the dinner."));
}
else {
    console.log("".concat(guestWhoCantMakeIt1, " is not on the guest list."));
}
var newGuests = ["Mr Adil Khan", "Mian Arman Malik", "Usama Khan", "Mr Yaqoob Malik", "Mr Rehaan Khan",];
guestList2.unshift(newGuests[0]); // Add to the beginning using unshift
guestList2.splice(Math.floor(guestList2.length / 2), 0, newGuests[1]); // Add to the middle using splice
guestList2.push(newGuests[2]); // Add to the end using push
console.log("I found a bigger dinner table, so I can invite more guests!");
for (var i = 0; i < guestList2.length; i++) {
    var invitation1 = "Dear ".concat(guestList2[i], ", I would be honored to have you join me for dinner. It would be a privilege to discuss your contributions to science and your unique perspectives on the world.");
    console.log(invitation1);
}
function updateGuestList(guests, maxGuests) {
    console.log("Unfortunately, there's only space for ".concat(maxGuests, " guests at the table tonight."));
    while (guests.length > maxGuests) {
        var removedGuest = guests.pop();
        if (removedGuest) {
            console.log("Sorry, ".concat(removedGuest.name, ", there won't be enough space for you tonight."));
        }
    }
    return guests;
}
// Example usage
var guestList3 = [
    { name: "Mian Arman Arain" },
    { name: "Mr Adil Khan" },
    { name: "Mr Yaqoob Malik" },
    { name: "Usama Amjad" },
];
var finalGuests = updateGuestList(guestList3, 2);
console.log("Here's the final guest list:");
finalGuests.forEach(function (guest) { return console.log(guest.name); });
// Task (18)
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var travelList = [
    "saudi arabia",
    "dubai",
    "finland",
    "united kingdum",
    "turkey"
];
function printList(list) {
    console.log("Travel List:");
    list.forEach(function (place) { return console.log(place); });
}
printList(travelList);
console.log("\nTravel List (Alphabetical - Copy):");
var sortedCopy = __spreadArray([], travelList, true).sort();
printList(sortedCopy);
console.log("\nOriginal List (Unmodified):");
printList(travelList);
console.log("\nTravel List (Reverse Alphabetical - Copy):");
sortedCopy.sort(function (a, b) { return b.localeCompare(a); });
printList(sortedCopy);
console.log("\nOriginal List (Unmodified):");
printList(travelList);
travelList.reverse();
console.log("\nTravel List (Reversed):");
printList(travelList);
travelList.reverse();
console.log("\nTravel List (Original Order Restored):");
printList(travelList);
travelList.sort();
console.log("\nTravel List (Sorted Alphabetically):");
printList(travelList);
travelList.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nTravel List (Sorted Reverse Alphabetically):");
printList(travelList);
function inviteToDinner(guests) {
    var guestCount = guests.length;
    if (guestCount > 0) {
        console.log("You are inviting ".concat(guestCount, " people to dinner:"));
        guests.forEach(function (guest) { return console.log("- ".concat(guest.name)); });
    }
    else {
        console.log("Looks like you're not inviting anyone to dinner tonight.");
    }
}
var guestList4 = [
    { name: "Mian arman Arain" },
    { name: "Mr Adil Khan" },
];
inviteToDinner(guestList4);
// Task (20)
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array of mountains
var mountains = ["Mount Everest", "K2", "Kilimanjaro"];
var rivers = ["Indus 2900", "Jehlum 725"];
// Array of countries
var countries = ["Pakistan", "Dubai", "Qater"];
// Array of cities
var cities = ["Karachi", "Faisal Abad", "Lahore"];
// Array of languages
var languages = ["English", "Urdu", "Panjabi"];
console.log("Mountains:");
printList(mountains);
console.log("\nRivers:");
printList(rivers);
console.log("\nCountries:");
printList(countries);
console.log("\nCities:");
printList(cities);
console.log("\nLanguages:");
printList(languages);
// Function to print the array elements (for reusability)
function printList1(list) {
    list.forEach(function (item) { return console.log(item); });
}
var book1 = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
};
var movie1 = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genre: "Drama",
};
var person1 = {
    name: "Izhar Ahmed",
    age: 37,
    occupation: "Business Man",
};
// Print object details
function printObject(obj) {
    for (var key in obj) {
        console.log("".concat(key, ": ").concat(obj[key]));
    }
}
console.log("Book Details:");
printObject(book1);
console.log("\nMovie Details:");
printObject(movie1);
console.log("\nPerson Details:");
printObject(person1);
function updateGuestList1(guests, maxGuests) {
    console.log("Unfortunately, there's only space for ".concat(maxGuests, " guests at the table tonight."));
    // Loop until only two guests remain (introduce intentional error)
    while (guests.length > maxGuests + 1) { // Changed from maxGuests to maxGuests + 1
        var removedGuest = guests.pop();
        // Inform the removed guest
        if (removedGuest) {
            console.log("Sorry, ".concat(removedGuest.name, ", there won't be enough space for you tonight."));
        }
    }
    return guests;
}
// Example usage
var myguestList = [
    { name: "MianArman Arain" },
    { name: "Mr Yaqoob Malik" },
    { name: "Mr Faizan Malik" },
    { name: "Mr adil Khan" },
];
var finalGuests1 = updateGuestList(myguestList, 2);
console.log("Here's the final guest list:");
finalGuests.forEach(function (guest) { return console.log(guest.name); });
// Task (23)
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False
var num3 = 10;
var num4 = 20;
var str3 = "apple";
var str4 = "banana";
var bool1 = true;
// Type Checks (True)
console.log("Is num1 a number? I predict True.");
console.log(typeof num3 === "number");
console.log("Is str1 a string? I predict True.");
console.log(typeof str3 === "string");
console.log("Is bool a boolean? I predict True.");
console.log(typeof bool1 === "boolean");
// Comparison Checks (True & False)
console.log("Is num1 equal to num2? I predict False.");
console.log(num3 === num4);
console.log("Is str1 equal to 'apple'? I predict True.");
console.log(str3 === "apple");
console.log("Is str1 strictly equal to str2 (case-sensitive)? I predict False.");
console.log(str3 === str4);
console.log("Is bool true? I predict True.");
console.log(bool1 === true);
// Falsy Checks (True & False)
console.log("Is num1 considered falsy (0)? I predict False.");
console.log(num3 === 0);
console.log("Is an empty string falsy? I predict True.");
console.log("King", false);
console.log("Is null considered falsy? I predict True.");
console.log(null === false);
// Task (24)
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var num1 = 10;
var num2 = 20;
var str1 = "apple";
var str2 = "Apple";
var arr1 = ["apple", "banana", "orange"];
var itemInArray = "orange";
var itemNotInArray = "grape";
var bool = true;
// String Tests (True & False)
console.log("Is str1 equal to 'apple'? I predict True.");
console.log(str1 === "apple");
console.log("Is str1 strictly equal to str2 (case-sensitive)? I predict False.");
console.log(str1 === str2);
console.log("Is str1 equal to lowercase of str2? I predict True.");
console.log(str1 === str2.toLowerCase());
// Numerical Tests (True & False)
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);
// Logical Operators (True & False)
console.log("Is num1 greater than 5 and less than 15 (True AND False)? I predict False.");
console.log(num1 > 5 && num1 < 15);
console.log("Is num1 greater than 5 or less than 15 (True OR False)? I predict True.");
console.log(num1 > 5 || num1 < 15);
// Array Tests (True & False)
console.log("Is 'orange' in the array arr1? I predict True.");
console.log(arr1);
console.log("Is 'grape' in the array arr1? I predict False.");
console.log(arr1);
// Task (25)
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green"; // Change to "yellow" or "red" for different outcomes
if (alien_color === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else {
    console.log("The alien was not green. No points awarded."); // Optional for explaining non-green cases
}
// Test case where alien is not green (no output)
alien_color = "yellow";
if (alien_color === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
// Task (26)
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color1 = "green"; // Change to a non-green color ("yellow" or "red") for else block
if (alien_color1 === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else {
    console.log("The player just earned 10 points for shooting a non-green alien!");
}
// Test case where alien is not green
alien_color1 = "yellow";
if (alien_color1 === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else {
    console.log("The player just earned 10 points for shooting a non-green alien!");
}
// Task (27)
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color2 = "green"; // Change to "yellow" or "red" for different outcomes
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else if (alien_color === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien!");
}
else if (alien_color2 === "red") {
    console.log("The player just earned 15 points for shooting the red alien!");
}
else {
    console.log("The alien was an unknown color. No points awarded."); // Optional for handling unexpected colors
}
// Test cases for yellow and red aliens
alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else if (alien_color2 === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien!");
}
else if (alien_color2 === "red") {
    console.log("The player just earned 15 points for shooting the red alien!");
}
else {
    console.log("The alien was an unknown color. No points awarded.");
}
alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the green alien!");
}
else if (alien_color2 === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien!");
}
else if (alien_color2 === "red") {
    console.log("The player just earned 15 points for shooting the red alien!");
}
else {
    console.log("The alien was an unknown color. No points awarded.");
}
// Task (28)
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 30; // Change the value to test different stages
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Task (29)
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "banana", "orange"];
// Independent if statements for each fruit
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "apple") {
        console.log("You really like apples!");
    }
    else if (favorite_fruits[i] === "banana") {
        console.log("You really like bananas!");
    }
    else if (favorite_fruits[i] === "orange") {
        console.log("You really like oranges!");
    }
}
// Testing Non-existent Fruits (no output)
if (favorite_fruits[0] === "mango") { // Check first element for a non-existent fruit
    console.log("You really like mangoes! (This is not in your favorite_fruits array)");
}
if (favorite_fruits[favorite_fruits.length - 1] === "grape") { // Check last element for another non-existent fruit
    console.log("You really like grapes! (This is not in your favorite_fruits array)");
}
// Task (30)
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ["Anas", "admin", "Usman", "umar", "Ezaan"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
// Task (31)
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames1 = []; // Empty array for testing
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === "admin") {
            console.log("Hello ".concat(usernames1[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
        }
    }
}
// Task (32)
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Arman", "Imran", "Kamran", "Umair", "Waqas"];
var new_users = ["Zubair", "Imran", "Ezaan", "Arman", "Faizan"];
function isUsernameAvailable(username) {
    for (var i = 0; i < current_users.length; i++) {
        if (username.toLowerCase() === current_users[i].toLowerCase()) {
            return false; // Username already exists
        }
    }
    return true; // Username is available
}
for (var i = 0; i < new_users.length; i++) {
    var username = new_users[i];
    if (isUsernameAvailable(username)) {
        console.log("Username '".concat(username, "' is available."));
    }
    else {
        console.log("Username '".concat(username, "' is already taken. Please choose another username."));
    }
}
// Task (33)
//  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper
//  ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var suffix = void 0;
    var lastDigit = number % 10; // Get the last digit of the number
    if (lastDigit === 1 && number !== 11) {
        suffix = "st";
    }
    else if (lastDigit === 2 && number !== 12) {
        suffix = "nd";
    }
    else if (lastDigit === 3 && number !== 13) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log("".concat(number).concat(suffix));
}
// Task (34)
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favoritePizzas = ["pepperoni", "margherita", "vegetarian"];
for (var i = 0; i < favoritePizzas.length; i++) {
    var pizzaName = favoritePizzas[i];
    console.log("I like ".concat(pizzaName, " pizza."));
}
console.log("I really love pizza!");
// Task (35)
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var furryFriends = ["dog", "cat", "rabbit"];
for (var i = 0; i < furryFriends.length; i++) {
    var animal = furryFriends[i];
    console.log("".concat(animal.charAt(0).toUpperCase()).concat(animal.slice(1), "s would make a great pet.")); // Capitalize first letter
}
console.log("Any of these animals would make a great furry friend!");
// Task (36)
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("You ordered a ".concat(size.toUpperCase(), " size t-shirt with the message: \"").concat(message, "\""));
}
// Call the function with different sizes and messages
make_shirt("medium", "I love TypeScript!");
make_shirt("large", "Coding is fun!");
// Task (37)
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("You ordered a ".concat(size.toUpperCase(), " size t-shirt with the message: \"").concat(message, "\""));
}
// Calls with different arguments
make_shirt1(); // Default size (large) and message
make_shirt1("medium"); // Medium size, default message
make_shirt1("small", "Python is cool too!"); // Small size, custom message
// Task (38)
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for different cities
describe_city("Karachi"); // Default country (Pakistan)
describe_city("Berlin", "Germany"); // Specify country
describe_city("New York", "USA"); // Specify country
// Task (39)
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country); // Use template literals for formatted string
}
// Call the function and print the returned values
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("London", "England"));
console.log(city_country("Toronto", "Canada"));
function make_album(artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks,
    };
}
// Create three albums
var album1 = make_album("Daft Punk", "Random Access Memories");
var album2 = make_album("The Beatles", "Abbey Road");
var album3 = make_album("Pink Floyd", "The Dark Side of the Moon", 9);
// Print album information
console.log(album1);
console.log(album2);
console.log(album3);
// Task (41)
// Magicians: Make a array of magician’s names. Pass the array to a function
//  called show_magicians(), which prints the name of each magician in the array.
var magicians = ["David Copperfield", "Criss Angel", "Dynamo"];
function showMagicians2(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
showMagicians(magicians);
// Task (42)
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.
var magicians1 = ["David Copperfield", "Criss Angel", "Dynamo"];
function makeGreat(magicians) {
    // Loop through each magician
    for (var i = 0; i < magicians.length; i++) {
        // Modify the element at the current index
        magicians[i] = magicians[i] + " the Great";
    }
}
function showMagicians1(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Make the magicians great
makeGreat(magicians);
// Show the modified list
showMagicians(magicians);
// Task (43)
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
// separate array. Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name
var magicians2 = ["David Copperfield", "Criss Angel", "Dynamo"];
function makeGreat1(originalMagicians) {
    // Create a new array to store modified names
    var greatMagicians = [];
    // Loop through each magician in the original array
    for (var _i = 0, originalMagicians_1 = originalMagicians; _i < originalMagicians_1.length; _i++) {
        var magician = originalMagicians_1[_i];
        // Add "the Great" to the new array
        greatMagicians.push(magician + " the Great");
    }
    // Return the new array with modified names
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
// Create a copy of the original array
var originalMagiciansCopy = __spreadArray([], magicians, true);
// Make the great magicians (returns a new array)
var greatMagicians = makeGreat(originalMagiciansCopy);
// Show the original magicians
showMagicians(magicians);
// Show the great magicians
showMagicians(magicians1);
// Task (44)
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one
//  parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
//  that is being ordered. Call the function three times, using a different number of arguments each time.
function buildSandwichSummary() {
    var sandwichItems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwichItems[_i] = arguments[_i];
    }
    // Check if any items were provided
    if (sandwichItems.length === 0) {
        console.log("You haven't ordered any sandwich items yet.");
        return;
    }
    // Build the summary string
    var summary = "Your sandwich includes: ";
    for (var i = 0; i < sandwichItems.length; i++) {
        if (i > 0) {
            summary += ", "; // Add comma for items after the first
        }
        summary += sandwichItems[i];
    }
    // Print the summary
    console.log(summary);
}
// Call buildSandwichSummary with different numbers of arguments
buildSandwichSummary(); // No arguments
buildSandwichSummary("bread", "cheese"); // Two arguments
buildSandwichSummary("turkey", "lettuce", "tomato"); // Three arguments
function createCar(manufacturer, model) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Check for optional properties using object destructuring
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var _b = rest_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Create a car object with optional properties
var myCar = createCar("Tesla", "Model S");
// Print car information
console.log(myCar);
