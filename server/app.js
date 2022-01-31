import express from "express";
const port = 1234;

const app = express();

app.use(express.static("build"));

app.listen(port);