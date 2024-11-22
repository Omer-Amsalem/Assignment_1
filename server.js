import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoute.js';
import commentRoutes from './routes/commentRoute.js';

dotenv.config();


// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // To parse JSON

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Routes
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));