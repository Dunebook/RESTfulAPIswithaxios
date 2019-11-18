var http = require("http");
const axios = require("axios").default;

//create a server object:
http
  .createServer(function(req, res) {
    res.write(users.join("\n \n")); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

let users = [];

(async function getNames() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = data.map(user => user.name);
  } catch (error) {
    console.log(error);
  }
})();
