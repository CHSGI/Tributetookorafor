import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

const whitelist = process.env.CORS_WHITELIST ? process.env.CORS_WHITELIST.split(',') : [];
const corsOptions: cors.CorsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/tributes', async (req, res) => {
  try {
    const tributes = await prisma.tribute.findMany();
    res.json(tributes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tributes' });
    console.log(error)
  }
});

app.post('/tributes/add', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newTribute = await prisma.tribute.create({
      data: {
        name,
        description,
      },
    });
    res.json(newTribute);
  } catch (error) {
    res.status(400).json({ error: 'Error adding tribute' });
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});