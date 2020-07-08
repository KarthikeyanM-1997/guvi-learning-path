//Cities are represented as nodes in a graph. A link between two cities exist if there exists a road or railway line such that one city can be reached from another. Represent the map of the city in an adjacency matrix by denoting a link between two particular cities as the number 1 in the matrix. If there is no link between cities, denote it by a 0 in the matrix.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var data = [];

inp.on("line", (dat) => {
  data.push(dat);
});

inp.on("close", () => {
    var index = [];
    for(let i = 0; i < parseInt(data[0]); i++){
        index.push(data[1 + i]);
    }
    
    var mat = [];
    
    for(let i = 0; i < index.length; i++){
        mat[i] = [];
        for(let j = 0; j < index.length; j++){
            mat[i].push(0);
        }
        mat[i][i] = 1;
    }
    
    
    for(let i = 0; i < parseInt(data[parseInt(data[0]) + 1]); i++){
        let A = data[parseInt(data[0]) + 2 + i].split(" ")[0];
        let B = data[parseInt(data[0]) + 2 + i].split(" ")[1];
        mat[index.indexOf(A)][index.indexOf(B)] = 1;
        mat[index.indexOf(B)][index.indexOf(A)] = 1;
    }
    
    console.log(" " + index.join(" "));
    for(let i = 0; i < index.length; i++){
        console.log(index[i] + " " + mat[i].join(" "));
    }
})