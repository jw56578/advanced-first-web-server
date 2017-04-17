import express from "express";

const app = express();
const PORT = 3002;


app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error!", err);
  }

  return console.log("Listening on: http://localhost:" + PORT);
});

