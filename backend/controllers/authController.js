const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) return res.status(400).json({ success: false, message: "All fields are required." });

    const checkUser = "SELECT * FROM users WHERE email = ?";

    db.query(checkUser, [email], async (err, result) => {
      if (err) return res.status(500).json({ success: false, message: "Database Error" });

      if (result.length > 0) return res.status(400).json({ success: false, message: "Email already exists." });

      const hashedPassword = await bcrypt.hash(password, 10);

      const insertUser = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

      db.query(insertUser, [username, email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ success: false, message: "Registration Failed" });

        return res.status(201).json({ success: true, message: "Registration Successful" });
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = "SELECT * FROM users WHERE email = ?";

    db.query(findUser, [email], async (err, result) => {
      if (err) return res.status(500).json({ success: false, message: "Database Error" });

      if (result.length === 0) return res.status(404).json({ success: false, message: "User not found." });

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match) return res.status(401).json({ success: false, message: "Invalid Password" });

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

      return res.status(200).json({
        success: true,
        message: "Login Successful",
        token,
        user: { id: user.id, username: user.username, email: user.email, handle: user.codeforces_handle }
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { register, login };