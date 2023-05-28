import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
export const register = async (req, res, next) => {
  try {
    const { password, ...others } = req.body;

    const bpass = bcrypt.hashSync(password, 10);
    const newUser = new User({
      password: bpass,
      ...others,
    });

    await newUser.save();
    next(createError(200, "User has been created"));
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return next(createError(404, "User Not found"));
    }

    const ismatch = bcrypt.compare(req.body.password, user.password);
    if (!ismatch) {
      next(createError(400, "Invalild credentials"));
      return;
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...others } = user._doc;
    res.cookie("accesskey", token).status(200).json(others);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user logged out");
};
