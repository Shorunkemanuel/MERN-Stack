const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
      passwordHash: { type: String, required: true },
        role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
        }, { timestamps: true });

        module.exports = mongoose.model('User', UserSchema);