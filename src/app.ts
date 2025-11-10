const express = require("express");
import "dotenv/config";
import webRoutes from "./routes/web";
const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine','ejs');
app.set('views',__dirname +'/views');
//config router
webRoutes(app);
//confit static files
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`my app is running on port:${PORT}`);
});
