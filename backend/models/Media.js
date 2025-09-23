const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  filename: String,
    url: String,
      mimeType: String,
        size: Number,
          uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
          }, { timestamps: true });

          module.exports = mongoose.model('Media', MediaSchema);