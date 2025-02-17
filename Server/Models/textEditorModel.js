import mongoose from 'mongoose';

const textEditorSchema = new mongoose.Schema({
  content: { type: String, required: true },
  images: [{ type: String }], // Array of image URLs
});

const textEditorModel = mongoose.models.Editor || mongoose.model("Editor", textEditorSchema);

export default textEditorModel;
