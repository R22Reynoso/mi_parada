import { Router } from "express";
import { getUsers, createUser } from "../controllers/controller.user";
import { verifyToken } from "../middlewares/middleware.auth";

const router = Router();

router.get("/", getUsers);
router.post("/", verifyToken, createUser);

export default router;
