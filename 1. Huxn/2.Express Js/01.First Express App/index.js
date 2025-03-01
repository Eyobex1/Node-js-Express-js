import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to express js");
});

app.listen(5000, () => {
  console.log("server is running on port 5000...");
});
