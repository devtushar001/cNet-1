import crudModel from "../Models/crudModel.js";
import mongoose from "mongoose";

export const crudAddController = async (req, res) => {
  const { name, email, username } = req.body;

  if (!name || !email || !username) {
    return res.status(401).json({
      success: false,
      message: "All fields are required."
    })
  }

  const existingUser = await crudModel.findOne({
    $or: [{ email }, { username }]
  });


  if (existingUser) {
    return res.status(501).json({
      success: false,
      message: `User with this ${email} or ${username} allready exist.`
    })
  }


  const user = await crudModel.create({
    name,
    email,
    username
  });

  return res.status(201).json({
    success: true,
    message: `User with this ${name} added.`,
    user
  })
}

export const fetchAllUsers = async (req, res) => {
  try {
    const allUser = await crudModel.find({});
    if (!allUser) {
      return res.status(501).json({
        success: false,
        message: "Users not found"
      })
    }

    res.status(200).json({
      success: true,
      message: "All fetched successfully",
      allUser
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: `FetchUsers got ${error}`
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body; // Get userID from request body
    // Find and delete the user by userID
    const deletedUser = await crudModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Get the updated list of users
    const allUser = await crudModel.find({});
    res.status(200).json({ success: true, allUser }); // Send the updated list back
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
}

export const updateUser = async (req, res) => {
  const { crudUser } = req.body;
  const { name, email, username, userId } = crudUser;


  // checking existed user
  const existingUser = await crudModel.findOne({
    $and: [{ email }, { username }, {name}]
  });


  if (existingUser) {
    return res.status(501).json({
      success: false,
      message: `Please change atleast single thing.`
    })
  }

  // Update user in the database
  const updatedUser = await crudModel.findByIdAndUpdate(
    userId, // Query by userId (should be a valid ObjectId)
    { name, email, username }, // Update fields as an object
    { new: true } // Return the updated document
  );


  // If updatedUser is null, it means no user was found or updated
  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const allUser = await crudModel.find({});
  // Send success response with updated user data
  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    allUser,
  });


};


