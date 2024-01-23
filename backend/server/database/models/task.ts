import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    taskDate: {
      type: String,
      required: true,
    },
    status: {
      enum: ['completed', 'inProgress', 'active'],
      type: String,
      default: 'active',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Task', taskSchema);
