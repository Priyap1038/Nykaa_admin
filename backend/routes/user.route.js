const express = require("express");
const { UserModel } = require("../models/user.model");
const { BlacklistModel } = require("../models/blacklist.model");
const { ProductModel } = require("../models/product.model");
const { authenticator } = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

//user api/register is working fine
userRouter.post("/register", async (req, res) => {
  const { name, email, password, avatar } = req.body;
  try {
    const userExist = await UserModel.findOne({ email: email.toLowerCase() });
    if (userExist) {
      return res.status(400).send({ msg: "Please Login, user already exist" });
    } else {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&*!]){8}/;
      const passwordCheck = passwordRegex.test(password);
      if (!passwordCheck) {
        return res.status(400).send({
          msg: "Password should have at least 1 UpperCase, 1 Lowercase, 1 Number, 1 Special Character",
        });
      }
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          // return res.status(404).send({ msg: "Something Went wrong in password" });
          console.error(err);
          return res.status(500).send({ msg: "Error hashing the password" });
        } else {
          const newUser = new UserModel({
            name,
            email,
            password: hash,
            avatar,
          });
          await newUser.save();
          res
            .status(201)
            .json({ msg: "A new user has been registered", newUser });
        }
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ msg: "Something went wrong in the register catch" });
  }
});

//user api/login is working fine
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userNotExist = await UserModel.findOne({ email });
    if (!userNotExist) {
      return res.status(400).send({ msg: "Please Signup First." });
    } else {
      bcrypt.compare(password, userNotExist.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: userNotExist._id },
            process.env.SECRET_KEY,
            { expiresIn: "7d" }
          );
          res.status(200).send({ msg: "Login Successfull", token: token });
        } else {
          res.status(200).send({ msg: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ msg: "Something went wrong in the login catch" });
  }
});

//products api/products is working fine
userRouter.post("/products", authenticator, async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    return res.status(201).send({ msg: "Product has been added" });
  } catch (error) {
    return res.status(400).send({
      msg: "Something went wrong in the product post",
      error: error.message,
    });
  }
});

//all products api/products is getting data if its login otherwise not
userRouter.get("/products", authenticator, async (req, res) => {
  try {
    const allData = await ProductModel.find({});
    res.status(200).send(allData);
  } catch (error) {
    res.status(400).send("Something went wrong during getting Products");
  }
});

//single product page is getting data if its login
userRouter.get("/products/:id", authenticator, async (req, res) => {
  const { id } = req.params;
  try {
    const singleProduct = await ProductModel.findOne({ _id: id });
    res.status(200).send(singleProduct);
  } catch (error) {
    res.status(400).send("Something went wrong during getting single page");
  }
});

//logout is working fine & adding the token ini the blacklist
userRouter.get("/logout", authenticator, async (req, res) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const blacklistToken = new BlacklistModel({ token });
    await blacklistToken.save();
    return res.status(200).send({ msg: "User has been logged out" });
  } catch (error) {
    return res
      .status(400)
      .send({ msg: "Something went wrong in the logout catch" });
  }
});

userRouter.patch("/products/:id", authenticator, async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: `Updated Successfully ${id}` });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

userRouter.delete("/products/:id", authenticator, async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: `Product Deleted Successfully ${id}` });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  userRouter,
};
