import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);
router.get("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], UserController.getOneById);
router.post("/", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);
router.patch("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], UserController.editUser);
router.delete("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], UserController.deleteUser);

export default router;
