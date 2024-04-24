import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:Number,
    name:String,
    desc:String,
    metal:{
        type:{
            type:String,
            enum:['White Gold','Platinum','Gold'],
        },
        pricePerGram:Number,
        weightInGram:Number,
    },
    gem:{
        type:{
            type:String,
            enum:['emerald','diamond']
        },
        WeightInCaret:Number,
        totalPrice:Number,
    },
    gender:String,
    type_of:String,
    images:[String],
    instock:Boolean,
    size:Number
});

const Product =mongoose.model('Product',productSchema);

export default Product;