import express, {Request, Response} from 'express';
import { json } from 'body-parser';


const app = express();
app.use(json());


app.all('*', async (req: Request, res: Response) => {
    return res.send({"hello22": "hello from"})
   // throw new NotFoundError();
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!");
  });
