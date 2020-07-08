 //Joseph was going through topic of strings. He learnt about anagrams. But due to some circumstances he forget ,now he hired you to help him in completing the work.Your task is to tell whether the two given strings are anagrams

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var data = [];

inp.on("line", (dat) => {
  data.push(dat);
});

inp.on("close", () => {
    //let stringA = data[0].replace(/[^\w]/g, '').toLowerCase();
    //let stringB = data[1].replace(/[^\w]/g, '').toLowerCase();
    
    if(data[0].split('').sort().join('') === data[1].split('').sort().join('')){
        console.log(1);
    }
    else{
        console.log(0);
    }
});