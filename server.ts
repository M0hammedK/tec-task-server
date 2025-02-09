import * as jsonserver from "json-server";
import * as cors from'cors'


const server =  jsonserver.create();
const router = jsonserver.router("db.json");
const middleware = jsonserver.defaults();
const port = process.env.PORT || 4000;

server.use(cors({origin: 'https://tec-task.vercel.app', credentials:true}))
server.use(middleware);
server.use(router);
server.listen(port, () => {
  console.log("server run on port " + port);
});
