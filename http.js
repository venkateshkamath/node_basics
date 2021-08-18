const http = require("http");
// creating a server to req and res
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to NODE</h1>"); //we write something
    res.end(); //End the request with a end response
  } else if (req.url === "/about") {
    res.end("This is our history");
  } else
    res.end(`
  <h1>OOPS</h1>
  <p>The page you are looking for ${req.url} is not present</p>
  <a href="/">Back to HOME</a>
  `);
});
server.listen(5000);
