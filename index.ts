import * as express from "express";

const app = express();

app.get("/hola", (req, res) => {
  res.json(`Todo Ok, on port 3000`);
});

app.listen(3000, () => {
  console.log(`Run server on port 3000`);
});
