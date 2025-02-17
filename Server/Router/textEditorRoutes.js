import express from "express";
import { saveTextEditorController,getTextEditorController, deleteTextEditorController } from "../Controller/textEditorController.js";


const textEditorRouter = express.Router();

// Configure Multer to use memory storage
// const storage = multer.memoryStorage(); 

// const upload = multer({ storage });

textEditorRouter.post("/save", saveTextEditorController);
textEditorRouter.get("/get", getTextEditorController);
textEditorRouter.post("/delete", deleteTextEditorController);

export default textEditorRouter;
