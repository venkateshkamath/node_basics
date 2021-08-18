// os module gives the info about os

const os = require('os');
console.log(os.userInfo());

// uptime, for how many hours computer was on
 const uptime = os.uptime();
 console.log(`The PC was on for ${uptime} seconds`);

 // some more os
 const currentOS = {
     name:os.type(),
     freeMem : os.freemem(),
     release : os.release(),
     totalMem :os.totalmem()
 }
 console.table(currentOS);
