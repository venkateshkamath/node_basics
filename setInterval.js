//setInterval->This is async function runs after every stipulated time mentioned

console.log("Set Interval");
setInterval(() => {
  console.log("I am setInterval");
}, 2000); /* never ending, this is async triggered after every interval */

console.log("I am the last line in this file");
