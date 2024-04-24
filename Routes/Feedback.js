import express from "express";
import FormData from "../Schemas/FeedbackSchema.js";
import Users from "../Schemas/UserSchema.js";
const formRouter=express.Router();

formRouter.post('/submitform', async (req, res) => {
      const { name, Email, Message } = req.body;
    
      try {
        const existingUser = await Users.findOne({ Email });
    
        if (!existingUser) {
          return res.status(400).json({ message: 'Email does not exist. Please sign up first.' });
        }
        const newFormData = new FormData({
          name,
          Email,
          Message
        });
    
        await newFormData.save();
        res.status(200).json({ message: 'Thanks for your feedback!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
    
    export default formRouter
    
    
    