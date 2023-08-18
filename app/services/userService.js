const User = require('../models/User');

exports.getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  return { id: user._id, email: user.email };
};
