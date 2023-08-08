import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ventScedRoute from "./routes/api/ventsched.js";
import ventDataRoute from "./routes/api/ventdata.js";
import buildingRoute from "./routes/api/BuildingRouting.js";
import roomRoute from "./routes/api/RoomRouting.js";
import homeGroupRoute from "./routes/api/homegroup.js";
import UserRoute from "./routes/api/user.js";
import ventRoute from "./routes/api/ventRoute.js";
import 'dotenv/config';


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//generic route for testing if server is live
app.get('/', (req,res)=>{
    res.json({mssg:'We are live PEOPLE!'})
})
//Routes - 
app.use(ventScedRoute);
app.use(ventDataRoute);
app.use(buildingRoute);
app.use(roomRoute);
app.use(homeGroupRoute);
app.use(UserRoute);
app.use(ventRoute);

//connect to the db and starts server
//the mongodb atlas server is currently in connect from any ip, this is temp for developpment purposes. Don't let me forget to change this.
mongoose.connect(process.env.ATLAS_URI)
    .then(()=>{
        app.listen(PORT, () =>{
            console.log('Connected to DB, listening on port', PORT)
        })
    })
    .catch((error)=>{
        console.log(error);
    });






