const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const roomSchema = new Schema({
  name: { type: String, required: true },
  building: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "building",
    required: true,
  },
  floor: {
    type: Number,
    min: 0,
    //max will be handled via middleware
    required: true,
  },
  vents: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "vents",
    },
  ],
});

//middleware

const room = model("room", roomSchema);
module.exports = room;
