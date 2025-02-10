
const jsonServre = require("json-server");

const server = jsonServre.create();
const router = jsonServre.router("./db.json");
const middleware = jsonServre.defaults({noCors:true});

server.use(router);
server.use(middleware);

server.listen(4000, () => {
  console.log("server listen to port 4000");
});
