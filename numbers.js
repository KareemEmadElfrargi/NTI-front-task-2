function printNumbers() {
    const output = [];
    for (let i = 1; i <= 20; i++) {
        output.push(i % 2 === 0 ? "I'm even" : i);
    }
    console.log(...output);
}
