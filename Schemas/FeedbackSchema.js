import mongoose from "mongoose"

const FormDataSchema = new mongoose.Schema({
    name:  String,
    Email:  String,
    Message:String
});

const FormData=mongoose.model('FormData',FormDataSchema);

export default FormData;