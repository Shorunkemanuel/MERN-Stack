const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

router.post('/register', async (req, res) => {
  try {
      const { name, email, password } = req.body;
          const role = await Role.findOne({ name: 'author' }); // default role
              const salt = await bcrypt.genSalt(10);
                  const passwordHash = await bcrypt.hash(password, salt);
                      const user = await User.create({ name, email, passwordHash, role: role?._id });
                          res.status(201).json({ id: user._id, email: user.email });
                            } catch (err) {
                                res.status(500).json({ message: 'Registration failed', error: err.message });
                                  }
                                  });

                                  router.post('/login', async (req, res) => {
                                    try {
                                        const { email, password } = req.body;
                                            const user = await User.findOne({ email }).populate('role');
                                                if (!user) return res.status(400).json({ message: 'Invalid credentials' });
                                                    const isMatch = await bcrypt.compare(password, user.passwordHash);
                                                        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
                                                            const token = jwt.sign({ id: user._id, role: user.role?.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
                                                                res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
                                                                    res.json({ token });
                                                                      } catch (err) {
                                                                          res.status(500).json({ message: 'Login failed' });
                                                                            }
                                                                            });

                                                                            module.exports = router;