import express from 'express';
import { json } from 'body-parser';


const app = express();
app.use(json());

app.all('*', async (req, res) => {
    return res.send({"hello22": "held2"})
   // throw new NotFoundError();
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!");
  });
