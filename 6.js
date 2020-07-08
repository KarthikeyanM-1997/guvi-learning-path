//Given 2 numbers N,K and an array of N integers, find if the element K exists in the array.


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var dat = []
inp.on("line", (data) => {
  dat.push(data);
});

inp.on("close", () => {
    var One = dat[0].split(" ");
    var Two = dat[1].split(" ");
    
    var ar = [];
    
    let K = parseInt(One[1]);
    
    for(let i = 0; i < Two.length; i++){
        ar[i] = parseInt(Two[i]);
    }
    if(BS(ar, K) > -1){
        console.log("yes");    
    }
    else{
        console.log("no");
    }
    
    
});

function BS(array, key) {
    var min = 0;
    var max = array.length - 1;
    var guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (array[guess] === key) {
            return guess;
        }
        else if (array[guess] < key) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }
    return -1;
}