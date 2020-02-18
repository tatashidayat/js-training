function squares(n) {
    return n <= 0 ? n + ` isn't natural number` : (n * (n + 1) * ((2 * n) + 1)) / 6;
}

module.exports = squares;
