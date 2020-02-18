const fibonacci = function (n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const total = function (n) {
    if (n <= 1) return fibonacci(n);
    return total(n - 2) + total(n - 1);
}

module.exports = { fibonacci, total }