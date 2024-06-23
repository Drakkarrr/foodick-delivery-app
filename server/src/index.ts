import express, { Response, Request } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api/user', myUserRoute);

app.listen(8000, () => {
  console.log(`Server is running on localhost:8000`);
});
