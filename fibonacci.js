function fibs(n) {
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    }

    let arr = [0, 1];

    for (let i = 0; i < n - 2; i++) {
        let term = arr[i] + arr[i + 1];
        arr.push(term);
    }

    return arr;
}

function fibsRec(n) {
    if (n == 2) {
        return [0, 1];
    } else if (n == 1) {
        return [0];
    } else if (n == 0) {
        return [];
    }

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}
console.log(fibs(4));
console.log(fibs(8));

console.log();

console.log(fibsRec(4));
console.log(fibsRec(8));
