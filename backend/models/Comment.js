const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
      content: String,
        approved: { type: Boolean, default: false },
          parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null }
          }, { timestamps: true });

          module.exports = mongoose.model('Comment', CommentSchema);