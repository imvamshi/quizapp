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


// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});