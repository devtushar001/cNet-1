import userModel from "../Models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    if (!name || !email || !password || !contact) {
      return res.status(505).send({
        success: false,
        message: 'please provide all fields'
      })
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: `Email ${email} Allready Exist!`
      })
    }

    const user = await userModel.create({ name, email, password, contact, cartData: [] });
    console.log(user);

    const token = user.generateToken();
    user.password = undefined;
    console.log(token);
    return res.status(200).cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      secure: process.env.NODE_ENV === "Development" ? true : false,
      httpOnly: process.env.NODE_ENV === "Development" ? true : false,
      sameSite: process.env.NODE_ENV === "Development" ? true : false,
    }).send({
      success: true,
      message: "User Logined Successfully",
      token,
      user
    })
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "error in register api",
      error
    })
    console.log(error);
  }
}


export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Email or Password is Required."
      })
    }

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not Found"
      })
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credential."
      })
    }

    const token = user.generateToken();
    user.password = undefined;

    return res.status(200).cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      secure: process.env.NODE_ENV === "Development" ? true : false,
      httpOnly: process.env.NODE_ENV === "Development" ? true : false,
      sameSite: process.env.NODE_ENV === "Development" ? true : false,
    }).send({
      success: true,
      message: "User Logined Successfully",
      token,
      user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error In Login!",
      error
    })
  }
}

export const logoutController = async (req, res) => {
  try {
    res.status(200).cookie('token', "", {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      secure: process.env.NODE_ENV === "Development" ? true : false,
      httpOnly: process.env.NODE_ENV === "Development" ? true : false,
      sameSite: process.env.NODE_ENV === "Development" ? true : false,
    }).send({
      success: true,
      message: "User logout successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "logout api problem",
      error
    })
  }
}