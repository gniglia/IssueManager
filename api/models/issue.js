import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
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
    }
});

export default mongoose.model('Issue', IssueSchema);
