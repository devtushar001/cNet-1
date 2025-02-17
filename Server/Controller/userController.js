import userModel from "../Models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    if (!name || !email || !contact || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: `User with email ${email} already exists.` });
    }

    const user = await userModel.create({ name, email, contact, password });

    const token = user.generateToken();
    user.password = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
      secure: process.env.NODE_ENV === "production", // Secure only in production
      httpOnly: true, // Always true for security
      sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax", // Strict in production
    }).status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("Error in registerController:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export const loginController = async (req, res) => {
  console.log(req.body);
}

export const getUserProfile = async (req, res) => {
  const user = req.user;
  user.password = undefined;

  try {
    return res.status(201).json({
      success: true,
      message: `Welcom ${user.name}!`,
      user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `GetuserController got ${error}`
    })
  }
}

