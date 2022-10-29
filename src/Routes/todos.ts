import { createTodo, deleteTodo, getTodo, updateTodo } from "./../Controllers/todos";
import { Router } from "express";
const router = Router();

// POST /api/
router.post("/", createTodo);
// Get /api/
router.get("/", getTodo);
// PUT /api/users/
router.put("/:id", updateTodo);
// DELETE /api/users
router.delete("/:id", deleteTodo);

export default router;
