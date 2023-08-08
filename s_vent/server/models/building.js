const mongoose = require("mongoose");
//const room = require("./room");
const { Schema, model } = mongoose;

const BuildingSchema = new Schema ({
    name:{type:String, required: true},
    floors:{type:Number, required: true},
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room'
}],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

//middleware
BuildingSchema.pre("findByIdAndDelete",function(next){
    room.deleteMany({building:this.model.ObjectId}).exec();
    next();
});


const building =model("building", BuildingSchema);
module.exports = building;
