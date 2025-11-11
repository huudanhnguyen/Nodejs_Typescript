import express, { Express } from "express";
import {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  deleteUser,
  getEditUserPage,
  postEditUserPage,
} from "controllers/user.controller";
const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUserPage);
  router.post("/users/delete/:id", deleteUser);
  router.get("/users/edit/:id", getEditUserPage);
  router.post("/users/edit/:id", postEditUserPage);

  app.use("/", router);
};
export default webRoutes;
