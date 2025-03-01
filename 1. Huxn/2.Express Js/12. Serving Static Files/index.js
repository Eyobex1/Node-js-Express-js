const path = require("path");
const express = require("express");
const app = express();

// app.use(express.static)
// express.static is a built-in middleware, which allow us to serve our static files.

app.use(express.static("1. Huxn/2.Express Js/12. Serving Static Files/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(5001, () => console.log("Listening on port 5001"));
