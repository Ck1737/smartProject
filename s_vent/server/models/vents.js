const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const ventSchema = new Schema({
    name:{type:String, required:true},
    deviceID: { type: String, required: true, unique: true },
    macAddress:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room'
    }
    
});

//middleware
ventSchema.pre('save', async function(next){
    const vent = this;
    const roomModel = require("./room.js");
    const room = await roomModel.findById(vent.room);
    room.vents.push(vent._id);
    room.save();
    next();
});

ventSchema.pre('deleteOne', async function(next){
    const vent = this;
    const roomModel = require("./room.js");
    console.log(vent.room);
    const room = await roomModel.updateOne({_id:vent.room},{$ :{vents:vent._id}});
    next();
})


const vent = model('Vent', ventSchema);
module.exports = vent;