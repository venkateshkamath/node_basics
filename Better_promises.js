//Promises -> takes in 2 args resolve and reject and both are functions
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile); //utilities

//ASYNC and AWAIT

const start = async () => {
  //returns a promise
  try {
    const firstFile = await readFile("./content/first.txt", "utf8"); //wait until it returns
    const secFile = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/mind-grenade.txt", `${firstFile}\n ${secFile}`, {
      flag: "a",
    });
  } catch (e) {
    console.log(e);
  }
};
start();

/* Below does not look clean, it is nested */
// getText("./content/first.txt")
//   .then((res) => console.log(res)) //solves the resolving if success
//   .catch((err) => console.log(err)); //here it is rejection

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     //async function
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err); //this is taken care by catch
//       }
//       resolve(data);
//     });
//   });
// };
