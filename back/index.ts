import express from "express";
const app = express();
import db from "./database/models/index";
require("dotenv").config({ path: ".env" });
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync().then(() => app.listen(PORT));
