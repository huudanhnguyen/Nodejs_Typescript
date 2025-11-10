const express = require("express");
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(PORT, () => {
    console.log(`my app is running on port:${PORT}`);
});
//# sourceMappingURL=app.js.map