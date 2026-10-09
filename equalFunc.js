function equalFunc(a, b, c) {
    if (a === b && b === c) return 3;
    if (a === b || a === c || b === c) return 2;
    return 0;
}

console.log(equalFunc(3, 4, 3));
console.log(equalFunc(1, 1, 1));
console.log(equalFunc(3, 4, 1));
