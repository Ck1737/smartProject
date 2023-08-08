const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, lowercase: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false },
    lastLogin: { type: Date },
    email: { type: String, required: true },
    //not final
    homegroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'homeGroup',
    },
    role: { type: String, enum: [null, 'technician', 'admin'] },
    



});


//middleware
userSchema.post('save',function(){

});
const User = model('User', userSchema)
module.exports= User;