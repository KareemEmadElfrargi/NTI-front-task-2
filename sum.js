let sum = 0;

while (sum <= 50) {
    const input = prompt("Enter a number OR (0 to stop) :");

    if (input === null) break;

    if (input.trim() === "" || isNaN(input)) {
        alert("Please enter a numeric value.");
        continue;
    }

    const value = Number(input);
    if (value === 0) break;

    sum += value;
}

alert("Total sum: " + sum);
