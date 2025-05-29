import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import CommandRouter from '../routes/CommandRouter.js';
import ProductRouter from '../routes/ProductRouter.js';
import StockMovementRouter from '../routes/StockMovementRouter.js';    

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/command/', CommandRouter);
app.use('/api/product/', ProductRouter);
app.use('/api/stockMovement/', StockMovementRouter);


export default app;