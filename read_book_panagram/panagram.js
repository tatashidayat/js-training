const isPanagram = function (str) {
    str = str.toLowerCase();
    for (let i = 0; i < 26; i++) {
        if (!str.includes(String.fromCharCode(97 + i))) return false;
    }
    return true;
}

module.exports = {
    isPanagram,
}