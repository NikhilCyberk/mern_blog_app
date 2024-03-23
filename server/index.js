import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const dbId = "nikhilkumar7585";
const dbPasswd = "Knikhil@128";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
