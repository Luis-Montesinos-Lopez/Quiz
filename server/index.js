const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const pc = require("picocolors");
const cors = require("cors");
const questionRouter = require("./routes/questionRouter");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cors());

app.use("/questions", questionRouter);

app.listen(PORT, () => {
    console.log(pc.cyan(`🚀 Server up and running on: http://localhost:${PORT}`))
});
