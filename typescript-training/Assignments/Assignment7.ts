let sentence: string = "Java programming is fun and challenging";

// Step 1: Split sentence into words
let words: string[] = sentence.split(" ");

// Task 1: Count total words
let wordCount = words.length;
console.log("Total number of words:", wordCount);

// Task 2: Print sentence words in reverse order
let reversedSentence = [...words].reverse().join(" "); // use spread to keep original array
console.log("Reversed sentence:", reversedSentence);

// Task 3: Convert first character of each word to uppercase
for (let i = 0; i < words.length; i++) {
    if (words[i]) { // check to avoid undefined
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}

// Join back to form the sentence
let capitalizedSentence = words.join(" ");
console.log("Capitalized sentence:", capitalizedSentence);