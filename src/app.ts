const express = require("express");
import "dotenv/config";
import webRoutes from "./routes/web";
import getConnection from "./config/database";
const app = express();
const PORT = process.env.PORT || 8080;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//config router
webRoutes(app);
//confit static files
app.use(express.static("public"));
getConnection();
app.listen(PORT, () => {
  console.log(`my app is running on port:${PORT}`);
});
