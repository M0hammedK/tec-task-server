import * as jsonServer from "json-server";
import * as cors from "cors";
import { Request, Response, NextFunction } from "express";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 4000;

// Apply cors middleware directly to the server
server.use(cors({ origin: "https://tec-task.vercel.app", credentials: true }));

// Explicitly set up CORS headers manually for added flexibility

server.use((req: Request, res: Response, next: NextFunction):any => {

  res.setHeader("Access-Control-Allow-Origin", "https://tec-task.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();  console.log(req.headers.origin); // Log the request origin
  next();
});

server.use(middleware); // Add default middleware (json-server)
server.use(router); // Add routes from db.json

server.listen(port, () => {
  console.log("server running on port " + port);
});
