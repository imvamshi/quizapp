/* Express Server */
const express = require("express");
const connection = require('./db');
const cors = require("cors");

const tasks = require("./routes/tasks");

const app = express();

connection();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/* Middleware */
app.use(cors());
app.use(express.json())

app.use("/api/tasks", tasks);