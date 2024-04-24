import express from "express";
import bcrypt from "bcryptjs";
import Users from "../Schemas/UserSchema.js";
const userRouter = express.Router();

//SIGNUP 
userRouter.post("/signup", async (req, res) => {
   //console.log("Received signup request:", req.body); 
  const { Email, password,enter } = req.body; 
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      //console.log("User already exists");
      return res.status(400).send({ message: "User already exists" });
    }
    if(password !== enter) {
      return res.status(400).send({ message: "Passwords do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      Email: Email,
      password: hashedPassword
    });
    await newUser.save();
    //console.log("New user saved:", newUser); 
    res.send({ message: "Successfully registered" });
  } catch (err) {
    console.error("Error in signup route:", err);
    res.status(500).send({ message: "Internal server error" });
  }
});

//LOGIN
userRouter.post("/login", async (req, res) => {
  const { Email, password,enter } = req.body;
  try {
    const user = await Users.findOne({ Email: Email });
    if (!user) {
      res.status(404).send({ message: "User not found"});
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      res.send({ message: "Login successful"});
    } else {
      res.status(401).send({ message: "Password didn't match" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

export default userRouter;
