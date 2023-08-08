const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const ventData = new Schema({
    batchNo:{type:Number, required:true},
    complete:{type:Boolean, required:true},
    formatCode:{type:Number, requried:true},
    deleted:{type:Boolean, required:true},
    deviceID:{type:String},
    scheduleEn:{type:Boolean, required:true},
    samplesCnt:{type:Number, required:true},
    startDate: { type: Date, required: false },
	tempIntrv: { type: Number, required: true },
	voltIntrv: { type: Number, required: true },
	data: { type: Object, required: false },
	userId: { type: Schema.Types.ObjectId } 
});

//middleware


module.exports = mongoose.model(
    'ventData', ventData, 'VentData'
);

