// routes/taskRoutes.ts

import { Router } from "express";
import { getTasks, createTask, toggleTask, deleteTask } from "../controllers/taskController";

const router = Router();

// GET /tasks?completed=true|false
router.get("/", getTasks);

// POST /tasks
router.post("/", createTask);

// PUT /tasks/:id/toggle  - toggles the completed status
router.put("/:id/toggle", toggleTask);

// DELETE /tasks/:id
router.delete("/:id", deleteTask);

export default router;
