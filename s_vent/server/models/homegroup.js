const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const HomeGroupSchema = new Schema({
    name:{type:String, required:true},
    HomegroupID:{type:String,require:true},
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }],
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rooms'
    }],

});

const homeGroup = model("homegroup", HomeGroupSchema);
module.exports = homeGroup;