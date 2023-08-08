const mongoose = require('mongoose');
const express = require('express');
const homeGroupModel = require("../../models/homegroup.js");
const app = express();

app.get("/homegroup", async(req, res)=>{
    const homeGroup = await homeGroupModel.find({deviceId: req.params.deviceId }).exec();

    try{
        res.send(homeGroup);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post("/homegroup", async(req, res)=>{
    const homeGroup = new homeGroupModel(request.body);

    try{
        await homeGroup.save();
        res.send(homeGroup);
    }catch(error){
        res.status(500).send(error);
    }
});

app.patch("/homegroup", async(req, res)=>{
    homeGroup = await homeGroupModel.findByIdAndUpdate(req.params.deviceId, req.body).exec();

    try{
        res.send(homeGroup);
    }catch(error){
        res.status(304).send(error);
    }
});

app.get("/homegroup", async(req, res)=>{
    homeGroup = await homeGroupModel.findByIdAndDelete({deviceId: req.params.deviceId }).exec();

    try{
        res.send(homeGroup);
    }catch(error){
        res.status(304).send(error);
    }
});
//middleware

module.exports = app;