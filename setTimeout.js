//Event Loop Examples
//setTimeout

console.log("SET TIMEOUT");
setTimeout(() => {
  console.log("Set Timeout block is running");
}, 0); ///Async function so this went offLoad and did not work. later after immediate Line this worked

console.log("This is the immediate line after setTimeout");
