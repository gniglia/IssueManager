import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IssueSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: Number,
    state: {
      type: String,
      required: true
    },
    issueId: {
        type: Schema.Types.ObjectId
    },
    comments: [{
      text: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }]
});

export default mongoose.model('Issue', IssueSchema);
