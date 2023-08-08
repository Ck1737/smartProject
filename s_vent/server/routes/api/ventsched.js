/**
 * Routing for the ventsched, including all CRUD functions.
 * Author Juniper Grunow
 * Date: 6/6/2023
 */
const mongoose = require('mongoose');
const express = require('express');
const ventSchedModel = require('../../models/ventschedule.js');
const app = express();
//retrieves a new vent schedule, needs the vent id to be passed as an argument
app.get("/ventSched", async (req, res)=>{
    //needs the ventID passed to it
    const ventSced = await ventSchedModel.find({deviceID: req.params.deviceID}).exec();

    try {
        res.send(ventSced);
    } catch (error) {
        res.status(500).send(error);
    }
});
//Creates a new vent schedule
app.post("/ventScehd", async (request, response) => {
    const ventSched = new ventSchedModel(request.body);

    try{
        await ventSched.save();
        response.send(ventSched);
    }catch{
        response.status(500).send(error);
    }
});
//Updates an existing vent schedule, requires vent id
 app.patch("/ventSched/:id", async (req, res) => {
    try{
        await ventSchedModel.findByIdAndUpdate(req.params.id, req.body);
        await ventSchedModel.save();
        response.send(ventSched);
    }catch (error) {
        response.status(500).send(error);
    }
 });
//Deletes an existing vent schedule, requires vent id
app.delete("/ventSched/:id", async (req, res) => {
    try {
        const ventSched = await ventSchedModel.findByIdAndDelete(req.params.id);

        if (!ventSched){
            res.status(404).send("No vent Schedule Found!");
        }
        res.status(200).send();
    } catch (error){
        res.status(500).send(error);
    }
});

//vent
module.exports = app;
