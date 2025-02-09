const jsonServer = require('json-server')
const cors = require('cors')


const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults({noCors:true});
const port = process.env.PORT || 4000;

server.use(cors({origin:"*", credentials:true}))
server.use(middleware); // Add default middleware (json-server)
server.use(router); // Add routes from db.json

server.listen(port, () => {
  console.log("server running on port " + port);
});
