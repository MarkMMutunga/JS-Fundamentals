const chair = "My number: <first argument converted in integer>";
const table = parseInt(chair);
if (isNaN(table)) {
  console.log("Not a number");
} else {
  console.log("My number is: " + table);
}