const fs = require('fs')
const peoples = require('./input.json')

const isOlderThan24 = function (element) {
    return element.age > 24;
}

const sumAgeInElement = function (sum, element) {
    return sum + element.age;
};

const isFemale = function (element) {
    return element.gender === 'f';
}

const isCoder = function (element) {
    return element.coder;
}

const isUS = function (element) {
    return element.us;
}

const sortNameAscending = function (a, b) {
    return b.name - a.name
};


const findOlderThan24Years = function () {
    return peoples.filter((el) => isOlderThan24(el));
}

const sumAllAge = function () {
    return peoples.reduce((t, e) => sumAgeInElement(t, e), 0);
}

const getAllFemaleCoder = function () {
    return peoples.filter((e) => isFemale(e) && isCoder(e));
}

const getUSPeopleAscending = function () {
    return peoples.filter((e) => isUS(e)).sort(sortNameAscending);
}

console.log(getUSPeopleAscending());


module.exports = { findOlderThan24Years, sumAllAge, getAllFemaleCoder }
