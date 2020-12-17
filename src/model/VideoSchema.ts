import { Document, model, Schema } from "mongoose";

interface VideoInterface extends Document{
    name: string;
    description: string;
}

const schema = new Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: false
    }
})

export default model<VideoInterface>("Videos", schema)
