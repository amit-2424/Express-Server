import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRouter } from "./modules/user/user.routes";
import { todoRouter } from "./modules/todo/todo.routes";
import { authRouters } from "./modules/auth/auth.routes";
const app = express();

// initial db
initDB();

// parser
app.use(express.json());
// app.use(express.urlencoded())

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Developers");
});

// Users CRUD operation
app.use("/users", userRouter);

// TODO CRUD
app.use("/todos", todoRouter);

// Auth routes
app.use("/auth", authRouters);

// Not found page
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    path: req.path,
  });
});

export default app;
