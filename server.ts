import express, { Express } from "express";
import { PrismaClient } from "@prisma/client";
import rootRouter from "./src/routes/root";
import cors from "cors";

// import rootRouter from "./src/routes";
// import { errorMiddleware } from "./src/middlewares/errors";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/tasks", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});


app.listen(port, () => {
  console.log("app listen to port " + port);
});
