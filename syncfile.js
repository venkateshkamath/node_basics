//destructuring
const {writeFileSync,readFileSync, write} = require('fs');


const first =readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// put it in a new file, it will create if not there
writeFileSync('./content/result.txt',`This is the result: ${first} and ${second}`,{flag:'a'});

