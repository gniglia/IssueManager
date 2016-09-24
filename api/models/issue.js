import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IssueSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    state: {
      type: String,
      required: true
    },
    comments: [{
      text: String,
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

export default mongoose.model('Issue', IssueSchema);
