const express = require("express");
const questionRouter = express.Router();
const pc = require("picocolors");
const { addquestion } = require("../controllers/questionControllers");

questionRouter.use("/", (req, res, next) => {
    console.log(pc.green("Using question router"));
    next();
});

questionRouter.post("/", addquestion );

module.exports = questionRouter;