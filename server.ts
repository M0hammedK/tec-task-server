import * as jsonserver from "json-server";
import cors from "cors";

const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middleware = jsonserver.defaults();
const port = process.env.PORT;

server.use(middleware);
server.use(router);
server.use(cors({ origin: "tec-task.vercel.app", credentials: true }));
server.listen(port, () => {
  console.log("server run on port " + port);
});
