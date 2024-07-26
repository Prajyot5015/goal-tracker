import { Schema, model } from "mongoose"

const userSchema = new Schema({
    goal: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,

    });

const Goal = model("Goal", userSchema);

export default Goal;