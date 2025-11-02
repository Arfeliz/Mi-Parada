import express from "express";
import dotenv from 'dotenv';
import { connect, sequelize } from './src/config/db';
import userRouter from './src/routes/user.route'
import stopStationRouter from './src/routes/stopStation.route'
import transportRouter from './src/routes/transport.route'
import timeRouter from './src/routes/time.route'
import syndicateRouter from './src/routes/syndicate.route'




const app = express();
dotenv.config();

const PORT = process.env['PORT'] || 3000;

const loadConfig = async () => {
  console.log('🔄 Loading config..hola.');
  await connect();
  await sequelize.sync({ alter: true });
  console.log('✅ Config loaded successfully');
}

loadConfig();

// Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
app.get('/',(_req,res)=>{
    res.send('hola mundo')
})

app.use("/api/v1/user", userRouter);
app.use("/api/v1/stopStation", stopStationRouter);
app.use("/api/v1/transport", transportRouter);
app.use("/api/v1/time", timeRouter);
app.use("/api/v1/syndicate", syndicateRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} 🚀`);
  console.log(`📱 check available at http://localhost:${PORT}/`);
});

export default app;
