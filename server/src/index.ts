import express, { Response, Request } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
} as ConnectOptions);

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(8000, () => {
  console.log(`Server is running on localhost:8000`);
});
