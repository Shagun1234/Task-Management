
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified:", verified);
    req.user = verified;
    console.log("Decoded token:", req.user);

    next();
  } catch {
    res.status(400).json({ error: "Invalid token" });
  }
};

