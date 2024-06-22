const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors({
    "origin": "*"
}))
const port = 3000;
app.get(`/api/v1/welcome1`, (req, res) => {
    res.send(`yaya`);
});
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});