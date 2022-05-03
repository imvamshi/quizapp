const Log = require("../models/log");
const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log('In Post server')
        console.log(req.body);
        const log = await new Log(req.body).save();
        res.send(log);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const logs = await Log.find();
        res.send(logs);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const log = await Log.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(log);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const log = await Log.findByIdAndDelete(req.params.id);
        res.send(log);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;