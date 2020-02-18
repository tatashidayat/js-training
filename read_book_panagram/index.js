const fs = require('fs');
const file = fs.createWriteStream('data.txt');
const axios = require('axios').default;
const http = require('http');
const LineByLineReader = require('line-by-line');
// const isPanagram = require('./panagram.js');

const downloadFileAxios = function (url) {
  axios.get(url, { responseType: 'stream' })
    .then((response) => {
      response.data.pipe(file);
      const allResult = readByLine(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

const downloadFileAxiosSentence = function (url) {
  axios.get(url, { responseType: 'stream' })
    .then((response) => {
      response.data.pipe(file);
      const allResult = [];
      lr = new LineByLineReader(response.data);
      let spareText = '';
      lr.on('line', (line) => {
        const newList = checkNewLineNew(spareText, line);
        spareText = newList.pop();
        allResult.push(...newList);
      });
      lr.on('error', (err) => console.log('error lr ==> ', err));
      lr.on('end', () => console.log(allResult));
      return allResult;
    })
    .catch((error) => {
      console.log(error);
    });
}



const isPanagram = function (str) {
  str = str.toLowerCase();
  for (let i = 0; i < 26; i++) {
    if (!str.includes(String.fromCharCode(97 + i))) return false;
  }
  return true;
}

const splitWithDot = function (str) {
  return str.split('\.');
}

const checkNewLineNew = (temp, line) => {
  const result = [];
  if (line.includes('.')) {
    const lineWithDot = line.split('\.');

    for (let i = 0; i < lineWithDot.length; i++) {
      const element = lineWithDot[i];
      if (i === (lineWithDot.length - 1)) {
        temp += element;
      } else {
        temp += element;
        if (isPanagram(temp)) {
          result.push(temp);
          temp = '';
        }
      }
    }
  } else {
    temp += line;
  }
  result.push(temp);
  return result;
}

const checkNewLine = (temp, line) => {
  const result = [];
  if (line.includes('.')) {
    const lineWithDot = line.split('\.');

    for (let i = 0; i < lineWithDot.length; i++) {
      const element = lineWithDot[i];
      if (i === (lineWithDot.length - 1)) {
        temp = element;
      } else {
        temp += element;
        if (isPanagram(temp)) {
          result.push(temp);
          temp = '';
        }
      }
    }
  } else if (isEndWithChar(line)) {
    temp += line;
    if (isPanagram(temp)) {
      result.push(temp);
    }
    temp = '';
  } else {
    temp += line
    result.push(temp);
  }
  return result;
}

const isEndWithChar = (str) => str.endsWith('?') || str.endsWith('!');


// console.log(downloadFileAxios('http://www.gutenberg.org/cache/epub/1511/pg1511.txt'));

// const str = 'AbC';
// console.log(str.toLowerCase())

// downloadFileAxios('http://www.gutenberg.org/cache/epub/1511/pg1511.txt');
downloadFileAxios('http://www.gutenberg.org/files/1661/1661-0.txt');

const readByLine = function (response) {
  const allResult = [];
  lr = new LineByLineReader(response.data);
  let spareText = '';
  lr.on('line', (line) => {
    const newList = checkNewLine(spareText, line);
    spareText = newList.pop();
    allResult.push(...newList);
  });
  lr.on('error', (err) => console.log('error lr ==> ', err));
  lr.on('end', () => console.log(allResult));
  return allResult;
}

