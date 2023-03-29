const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = 0
rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let num = Number(input);
    for(let i = 1; i <= num; i++) console.log("*".repeat(i));
});