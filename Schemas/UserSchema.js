import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Email: { type: String, required: true }, 
    password: { type: String, required: true } 
});

const Users = mongoose.model('User', userSchema);

export default Users;
