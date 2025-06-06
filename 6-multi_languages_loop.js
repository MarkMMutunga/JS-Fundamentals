#!/usr/bin/node

const messages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let output = '';
let i = 0;

while (i < messages.length) {
  output += messages[i];
  if (i < messages.length - 1) {
    output += '\n';
  }
  i++;
}

console.log(output);
