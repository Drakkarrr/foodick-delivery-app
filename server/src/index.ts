import express, { Response, Request } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(8000, () => {
  console.log(`Server is running on localhost:8000`);
});
