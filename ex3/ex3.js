function isFibonacci(num) {
    let a = 0;
    let b = 1;
    if (num === a || num === b) {
        return true;
    }
    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

let testnum = isFibonacci(9);
document.write(testnum);
