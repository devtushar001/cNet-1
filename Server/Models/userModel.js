import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: [true, 'email already taken']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  contact: {
    type: String,
    required: [true, 'phone should be required']
  },
  cartData: {
    type: Array,
    default: []
  }
}, { timestamps: true });


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);

})

userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password)
}

userSchema.methods.generateToken = function () {
  return JWT.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
}
const userModel = mongoose.model('User', userSchema);

export default userModel;