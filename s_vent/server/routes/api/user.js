/**
 * Author:Juniper Grunow
 * Date: 5/24/2023
 *
 */
const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../../models/user.js");
const building = require("../../models/building.js");
const routing = express.Router();
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Create new user
routing.post("/user", async (req, res) => {
  const findUser = await userModel.findOne({
    username: req.body.username,
  });
  try {
    if (!findUser) {
      const findEmail = await userModel.findOne({
        email: req.body.email,
      });
      if (!findEmail) {
        const newUser = userModel(req.body);
        newUser.isVerified = false;
        const hashPass = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPass;
        newUser.save();
        return res.send("user Created");
      }
      return res.send("Email already in use");
    }
    return res.send("UserName already in use");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

//Update Userbased on user id
routing.patch("/user", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.username = req.body.username;
    user.save();
    res.status(400).send(user);
  }
});

//Deletes User based on user id
routing.delete("/user", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.body.id).exec();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

routing.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  let user = await userModel.findOne({ email: email }).exec();
  if (!user) {
    user = await userModel.findOne({ username: email }).exec();
  }

  console.log("user:", user);
  if (user) {
    // if (user.isVerified) {
    const verifiedPass = await bcrypt.compare(req.body.password, user.password);
    if (verifiedPass) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.cookie("token", token, {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true,
        secure: true,
      });
      res.json({
        message: "logged in",
        body: {
          token: token,
          user: {
            id: user._id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
          },
        },
      });
      return;
    } else {
      res.send({ message: "wrong" });
      return;
    }
    // }
    // res.send({ message: "notVerified" });
    // return;
  } else {
    res.send("not found");
    return;
  }
});

routing.get("/userStuffs", async (req, res) => {
  const buildingModel = require("../../models/building.js");
  const roomModel = require("../../models/room.js");
  const ventModel = require("../../models/vents.js");

  try {
    const buildings = await buildingModel.find({ owner: req.body.id }).exec();
    var rooms = [];
    var vents = [];
    buildings.forEach(async function (place) {
      place.rooms.forEach(async function (roomId) {
        var tempRoom = await roomModel.findById(roomId);
        console.log(tempRoom.name);
        rooms.push(tempRoom);
        rooms.push("1");
      });
    });
    rooms.forEach(async function (room) {
      const tempVent = await ventModel.find({ room: room._id });
      console.log(room.name);
      console.log(vents.name);
      vents.push(tempVent);
    });
  } catch (error) {
    console.log(error);
  }
  res.send(buildings);
  console.log(rooms[0]);
});

module.exports = routing;
