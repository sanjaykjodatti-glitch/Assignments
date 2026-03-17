let rows: number = 5;

for (let i = 1; i <= rows; i++) {
    // Print spaces
    let spaces = " ".repeat(rows - i);

    // Print stars
    let stars = "*".repeat(i);

    // Combine and print
    console.log(spaces + stars);
}