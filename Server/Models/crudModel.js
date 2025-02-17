import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  }
})

const crudModel = mongoose.models.Crud || mongoose.model("Crud", crudSchema);

export default crudModel;