// Iteration 1: Names and Input
    // 1.1 Create a variable hacker1 with the driver's name.
    // 1.2 Print "The driver's name is XXXX".
    // 1.3 Create a variable hacker2 with the navigator's name.
    // 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Cheech";
let hacker2 = "Chong";

console.log(`The driver's name is: ${hacker1}`);
console.log(`The navigator's name is: ${hacker2}`);



// Iteration 2: Conditionals
    // 2.1. Depending on which name is longer, print:
    // - The driver has the longest name, it has XX characters. or
    // - It seems that the navigator has the longest name, it has XX characters. or
    // - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equaly long names, ${hacker1.length} characters!`);
}



// Iteration 3: Loops
    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let capitalSpacedName = "";

for(let i = 0; i < hacker1.length; i++){
    capitalSpacedName += hacker1.charAt(i) + " ";
}
console.log(capitalSpacedName.toUpperCase());



    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseName = "";    

for(let i = hacker2.length; i >= 0; i--){    
    reverseName += hacker2.charAt(i);
}
console.log(reverseName);



    // 3.3 Depending on the lexicographic order of the strings, print:
    // - The driver's name goes first.
    // - Yo, the navigator goes first definitely.
    // - What?! You both have the same name?

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, the navigators goes first, definitely.`);
} else{
    console.log(`What?! You both have the same name?`);
}



//Bonus 1:
// Go to lorem ipsum generator (http://www.lipsum.com/) and:
// Generate 3 paragraphs. Store the text in a variable type of string.

let wordsToCount = `Pellentesque hendrerit mauris in ligula euismod ornare. Pellentesque purus sapien, mollis at nibh ut, luctus dapibus magna. Proin vel felis aliquet, ultrices libero sit amet, congue dui. Duis luctus augue id eros sollicitudin luctus. Nulla tempus iaculis augue, et commodo velit scelerisque at. Donec metus nibh, dignissim et congue vel, vulputate at ligula. Sed ante libero, semper ut imperdiet ut, maximus et turpis. Donec vel dolor mollis, gravida tellus vitae, efficitur ante. Integer ac posuere mauris, vel vulputate sapien. Curabitur elementum finibus rutrum. Nam lobortis, tellus in auctor varius, neque felis mollis dolor, a porttitor tortor turpis vel enim. Vivamus eleifend elit ut felis bibendum ullamcorper. Pellentesque eros ante, mollis at felis ac, euismod porta dolor. Sed gravida semper tempor. Aliquam erat volutpat. Vivamus maximus id neque at iaculis.
 Proin semper semper rutrum. Suspendisse sit amet augue mattis, dapibus sem at, porta arcu. Maecenas mattis vulputate dui, id fringilla lacus bibendum quis. In commodo ex fringilla bibendum hendrerit. Ut placerat, nunc in viverra ultricies, ante lorem vestibulum neque, in rutrum leo ligula cursus lectus. Fusce convallis, velit ut sagittis accumsan, mi lorem dictum ante, quis tincidunt arcu odio sed libero. Nullam lacus dolor, mollis nec erat vitae, tempus vulputate lacus. Fusce fringilla porta magna, nec bibendum ex cursus in. Nam rhoncus dolor sagittis, cursus libero quis, molestie massa.
 Integer id semper ipsum. Maecenas eget est quis erat ornare sollicitudin a et nulla. Donec porta, leo ut porta pretium, erat metus viverra felis, in vestibulum justo purus vel neque. Morbi turpis lacus, varius ac lectus ac, tincidunt viverra sapien. Donec in sollicitudin sapien. Vestibulum varius dolor at lacus varius convallis. Mauris convallis, lorem id ornare laoreet, purus risus rutrum sapien, a feugiat augue est vel ligula. Sed viverra cursus ligula vitae ornare. Ut risus velit, placerat ut elit a, laoreet porttitor arcu. Phasellus eu lorem molestie diam sagittis congue rhoncus nec eros. Proin non convallis augue, id hendrerit magna. Aenean ut dignissim nisl. Morbi ac auctor ante.`;
//Generated 3 paragraphs, 326 words, 2160 bytes of Lorem Ipsum

// Make your program count the number of words in the string.

let numWords = 0
for (let i = 0; i < wordsToCount.length; i++){
    if (wordsToCount.charAt(i) === " ") {     
        numWords ++;
    }        
}
numWords ++;
console.log(numWords);



// Make your program count the number of times the Latin word et appears.

let etsCounter = 0;
for (let i = 0; i < wordsToCount.length; i++){
    let etsFinder = wordsToCount.charAt(i) + wordsToCount.charAt(i + 1);    
    if ((etsFinder === "et") || (etsFinder === "Et") && (wordsToCount.charAt(i + 2) == " "))  {
        etsCounter ++;
    }
}
console.log(etsCounter);


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon"

let phraseToCheck = "A man, a plan, a canal, Panama!"
let cleanedPhrase = phraseToCheck.replace(/[^a-z]/gi, '');

let reversePhrase = "";
for(let i = cleanedPhrase.length; i >= 0; i--){
    reversePhrase += cleanedPhrase.charAt(i);
}
if (cleanedPhrase.toLowerCase() == reversePhrase.toLowerCase()) {
    console.log(`Yes, the string "${phraseToCheck}" is a Palindrome!`);
} else {
    console.log(`No, try again.`);
}
