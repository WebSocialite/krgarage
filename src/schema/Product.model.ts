// BU YERDA BIZ DATABASE VALIDATION ni Hosil qilyapmiz

import mongoose, { Schema } from 'mongoose';
import {ProductCollection, 
    ProductSize, 
    ProductStatus}
  from '../libs/enums/product.enum';


const productSchema = new Schema(
    {
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productCollection: {
        type: String,
        enum: ProductCollection,
        require: true,
    },

    productName: {
        type: String,
        require: true,
    },

    productPrice: {
        type: Number,
        require: true,
    },

    productLeftCount: {
        type: Number,
        require: true,
  
    },

    productSize: {
        type: String,
        enum: ProductSize,
        default: ProductSize.SMALL,
    },

    productDesc: {
        type: String,
    },

    productImages: {
        type: [String],
        default: [],
    },
   
    productViews: {
        type: Number,
        default: 0,
    },


},
{ timestamps: true } // updatedAt, createdAt


);


productSchema.index({productName: 1, productSize: 1 },
    { unique: true}
    );// making out product(car) unique it means there wont be copies
export default mongoose.model('Product', productSchema);