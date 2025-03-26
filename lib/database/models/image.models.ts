import { transformationTypes } from "@/constants";
import { model, models, ObjectId, Schema } from "mongoose";
import { config, title } from "process";

export interface IImage extends Document {
    title: string;
    transformationTypes: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstname: string;
        lastname: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
  }
  

const ImageSchema = new Schema ({
    title : {type : String, required : true},
    transformationTypes: {type: String, required: true},
    publicId: {type:String, required:true},
    secureUrl: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'user'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;