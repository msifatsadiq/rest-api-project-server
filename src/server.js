import dotenv from 'dotenv';
import express from 'express';
import routes from './Routes/noteRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();


const app = express();
const PORT =  3000; 

connectDB()

app.use("/api/notes",routes)









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

