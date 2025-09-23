const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
      content: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
            published: { type: Boolean, default: false },
              publishedAt: Date
              }, { timestamps: true });

              module.exports = mongoose.model('Post', PostSchema);