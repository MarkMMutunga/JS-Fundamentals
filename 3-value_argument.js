let chips = process . argv.slice(2);
if (!chips[0]) {
    console.log("No argument");
} else if (!chips[1]) {
    console.log("HBTN");
} else {
    console.log("HBTN cool");
}