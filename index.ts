import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env['PORT'] || 3000;

app.get('/',(_req,res)=>{
    res.send('hola mundo')
})


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} 🚀`);
  console.log(`📱 check available at http://localhost:${PORT}/`);
});