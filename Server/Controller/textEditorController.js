import textEditorModel from "../Models/textEditorModel.js";

export const saveTextEditorController = async (req, res) => {
  try {
    const { content } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    const newContent = new textEditorModel({ content, images });
    await newContent.save();

    res.status(201).json({ message: "Content saved successfully", data: newContent });
  } catch (error) {
    res.status(500).json({ message: "Error saving content", error });
  }
};

// Fetch All Content
export const getTextEditorController = async (req, res) => {
  try {
    const content = await textEditorModel.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};


export const deleteTextEditorController = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if id is provided
    if (!id) {
      return res.status(400).json({
        success: false,
        message: `Blog id is required`
      });
    }

    // Validate that the id is a valid MongoDB ObjectId
    // if (!ObjectId.isValid(id)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: `Invalid Blog id`
    //   });
    // }

    // Perform the deletion
    const deleteBlog = await textEditorModel.findByIdAndDelete(id);

    if (!deleteBlog) {
      return res.status(404).json({
        success: false,
        message: `Blog not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: `Blog deleted successfully`
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `API encountered an error: ${error.message}`
    });
  }
}