import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middlewares/validation.middleware";
import { Request, Response } from "express";

const router = Router();
const authController = new AuthController();

router.post("/register", validateRegisterInput, (req: Request, res: Response) =>
  authController.register(req, res)
);

router.post("/login", validateLoginInput, (req: Request, res: Response) =>
  authController.login(req, res)
);

router.get("/users", (req: Request, res: Response) =>
  authController.getUsers(req, res)
);

export default router;
