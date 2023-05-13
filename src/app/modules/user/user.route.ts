import express from "express";
import {
  createUser,
  getAdminUsersController,
  getUserById,
  getUsers,
} from "./user.contrller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsersController);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
