import { Document, model, Schema } from "mongoose";

interface CategoryInterface extends Document{
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
    }
})

export default model<CategoryInterface>("Categories", schema)
