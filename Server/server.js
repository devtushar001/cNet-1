import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import userRouter from './Router/userRouter.js';
import connectDB from './Config/connectDB.js';
import crudRouter from './Router/crudRouter.js';
import razorPayRouter from './Router/razorPayRouter.js';
import imageRouter from './Router/imageRoutes.js';
import cloudinarySetup from './Config/cloudinarySetup.js';
import textEditorRouter from './Router/textEditorRoutes.js';

dotenv.config();

// Validate environment variables
const port = process.env.PORT;
const mongo_url = process.env.MONGODB_URL;
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudApiKey = process.env.CLOUDINARY_API_KEY;
const cloudApiSecret = process.env.CLOUDINARY_API_SECRET;

if (!port || !mongo_url) {
  throw new Error("Missing required environment variables: PORT or MONGODB_URL");
}

const app = express();

// Middleware
app.use(cors());
app.use(helmet()); // Secure HTTP headers
app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//   origin: ['https://cnet.onrender.com', 'https://cnet.onrender.com'],
//   credentials: true, // Allow cookies
// }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
}));




// Database connection
connectDB(mongo_url);
cloudinarySetup(cloudName, cloudApiKey, cloudApiSecret)

// Routes
app.use('/api/user', userRouter);
app.use('/api/crud', crudRouter);
app.use('/api/razorpay', razorPayRouter);
app.use('/api/images', imageRouter);
app.use('/api/text-edit', textEditorRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Server running on port ${port}`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
