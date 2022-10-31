import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  // timestamps: tells mongoose to assign createdAt and updatedAt fields to your schema.
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);