let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

// Word to search
let searchWord = "Java";

// Step 1: Split paragraph into words
let words: string[] = paragraph.split(" ");

// Step 2: Find indexes of all occurrences
let indexes: number[] = [];

for (let i = 0; i < words.length; i++) {
    // Remove punctuation (like . ,) from word before comparing
    let cleanWord = words[i].replace(/[.,!?]/g, "");
    if (cleanWord === searchWord) {
        indexes.push(i);
    }
}

// Step 3: Print results
console.log("Total occurrences of '" + searchWord + "':", indexes.length);
console.log("Indexes of occurrences:", indexes);