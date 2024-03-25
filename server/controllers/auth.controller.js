import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !email ||
    !password ||
    !username ||
    !email.includes("@") ||
    password < 6 ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    // return res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const vaildUser = await User.findOne({ email });
    if (vaildUser && bcryptjs.compareSync(password, vaildUser.password)) {
      // res.json({ message: "Login success" });
      const token = jwt.sign({ id: vaildUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = vaildUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ message: "Login success", user: vaildUser });
    } else {
      next(errorHandler(401, "Invalid username or password"));
    }
  } catch (error) {
    next(error);
  }
};
