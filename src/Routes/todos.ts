import { Router } from "express";
const router = Router();

// POST /api/
router.post("/");
// Get /api/
router.get("/");
// PUT /api/users/
router.put("/:id");
// DELETE /api/users
router.delete("/:id");

export default router;
