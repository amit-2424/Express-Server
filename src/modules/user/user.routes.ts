import { Router } from "express";
import { userController } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", userController.createUser);

router.get("/", logger, auth("admin"), userController.getUser);

router.get("/:id", auth("admin", "user"), userController.getSingleUser);

router.put("/:id", userController.updatedUser);

router.delete("/:id", userController.deleteUser);

export const userRouter = router;
