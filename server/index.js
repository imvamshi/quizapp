/* Express Server */
const express = require("express");
const connection = require('./db');
const cors = require("cors");

const tasks = require("./routes/tasks");
const logs = require("./routes/logs");
const users = require("./routes/users");

const app = express();

connection();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/* Middleware */
app.use(cors());
app.use(express.json())

app.use("/api/tasks", tasks);
app.use("/api/logs", logs);
app.use("/api/users", users);

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
// Accessing the path module
const path = require("path");

// Step 1:
// app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static("public"));

// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});