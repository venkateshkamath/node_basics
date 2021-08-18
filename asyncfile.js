const { writeFile, readFile } = require("fs"); // async

readFile("./content/first.txt", "utf8", (err, result) => {
  //callback
  if (err) {
    console.log(err);
    return;
  }
  // save
  const first = result;
  // read the second file

  readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is the result-async : ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // here printing result wont give anything
        console.log("File is being written");
      }
    );
  });
});

console.log(data);
