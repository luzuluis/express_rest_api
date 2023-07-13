import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";
const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

//actualizar todos los datos del usuario
//router.put("/users", updateUser);
//actualizar solo los datos que quiero del usuario
router.patch("/users", updateUser);

router.delete("/users", deleteUser);

export default router;
