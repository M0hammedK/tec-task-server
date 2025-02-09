import * as jsonServer from "json-server";
import * as cors from "cors";
import { Request, Response, NextFunction } from "express";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults({noCors:true});
const port = process.env.PORT || 4000;

// Apply cors middleware directly to the server
server.use(cors({ origin: true, credentials: true }));


server.use(middleware); // Add default middleware (json-server)
server.use(router); // Add routes from db.json

server.listen(port, () => {
  console.log("server running on port " + port);
});
