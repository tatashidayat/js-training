const calculate = function (n) {
  // return n < 1 || n == 65 ? n + ` not a valid square` : BigInt(Math.pow(2, (parseInt(n) - 1)));
  return n < 1 || n == 65 ? n + ` not a valid square` : 1n << (BigInt(n) - 1n);
}

const total = function () {
  // return BigInt(Math.pow(2, 64)) - BigInt(1);
  return (1n << 64n) - 1n;
}

module.exports = { calculate, total }
