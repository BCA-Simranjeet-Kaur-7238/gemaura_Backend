import express from "express";
import cors from "cors";
import userRouter from "./Routes/User.js";
import connection from "./db.js";
import formRouter from "./Routes/Feedback.js";

console.log("j=");
const app = express();
// const use = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRouter)
app.use("/form",formRouter)

//PORT
const port = process.env.PORT || 5000;
app.listen(port, async () => {
    try {
        await connection;
        console.log("connected to mogodb atlas")
    } catch (error) {
        console.log(error.message )
        console.log("not connected to db");
    }
    console.log(`server running on port ${port}`);
});
