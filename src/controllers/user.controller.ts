import { Request, Response } from "express";
import {
  getAllUsers,
  handleCreateUser,
  deleteUserById,
  getUserById,
  handleUpdateUser,
} from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  const users= await getAllUsers();
  const message = req.query.message || null;
 return res.render("home", { users, message });
};
const getCreateUserPage = async (req: Request, res: Response) => {
  return res.render("create-user");
};
const postCreateUserPage = async (req: Request, res: Response) => {
  const { name, email, address } = req.body;
  await handleCreateUser(name, email, address);
  return res.redirect("/?message=User+created+successfully");
};
const deleteUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  await deleteUserById(userId);
  return res.redirect("/?message=User+deleted+successfully");
}
const getEditUserPage = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await getUserById(userId);
  if (!user) {
    return res.status(404).send("User not found");
  }
  return res.render("edit-user", { user });
};

const postEditUserPage = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const { name, email, address } = req.body;
  await handleUpdateUser(userId, name, email, address);
  return res.redirect("/?message=User+updated+successfully");
};
export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  deleteUser,
  getEditUserPage,
  postEditUserPage};
