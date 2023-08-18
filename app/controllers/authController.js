const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const jwtToken = await authService.login(req.body);
    res.json({ jwt: jwtToken });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
