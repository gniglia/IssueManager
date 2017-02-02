import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    state: {
      type: String,
      required: true
    },
    archived: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    comments: [{
      text: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }]
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
    }
  }
});

export default mongoose.model('Card', CardSchema);
