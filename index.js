
const jsonServre = require("json-server");
const cors = require("cors");

const server = jsonServre.create();
const router = jsonServre.router("./db.json");
const middleware = jsonServre.defaults({noCors:true});

server.use(cors())
server.use(middleware);
server.use(jsonServre.bodyParser);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.options("*", (req, res) => {
  res.status(200).end();
});

server.use(router);

server.listen(4000, () => {
  console.log("server listen to port 4000");
});
