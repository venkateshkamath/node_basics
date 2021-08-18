const path = require('path');
// path.sep, it says what is the sep factor
console.log(path.sep);//'\'

// join object, it joins the seps

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//we want the base file
const base = path.basename(filePath)
console.log(base);

// we want the absolute path
const absolute  = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);