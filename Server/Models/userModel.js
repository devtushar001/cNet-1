import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.']
    },
    contact: {
      type: String,
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.']
    },
    password: {
      type: String,
      required: true
    },
    cartData: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

// Password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

// Generate token method
userSchema.methods.generateToken = function () {
  if (!process.env.JWT_SECRET) {
    console.warn('Warning: JWT_SECRET is not defined in environment variables.');
  }
  return JWT.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

// Create or reuse the User model
const userModel = mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;
