// controllers/taskController.ts
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const completedParam = req.query.completed;
    const filter = typeof completedParam === "string" ? { completed: completedParam === "true" } : {};
    const tasks = await prisma.task.findMany({ where: filter });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    next(error);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ error: "Task text is required" });
      return;
    }
    const newTask = await prisma.task.create({ data: { text } });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    next(error);
  }
};

export const toggleTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) {
      res.status(404).json({ error: "Task not found" });
      return;
    }
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error toggling task:", error);
    next(error);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const deletedTask = await prisma.task.delete({ where: { id } });
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error("Error deleting task:", error);
    next(error);
  }
};
