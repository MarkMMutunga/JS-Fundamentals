#!/usr/bin/node

const chair = process.argv[2]; // get the first command-line argument
const table = parseInt(chair); // try to convert it to an integer

if (isNaN(table)) {
  console.log("Not a number");
} else {
  console.log("My number: " + table);
}
