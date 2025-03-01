import express from "express";
import path from "path";
import route from "./routes/route.js";

const app = express();

// Set the views directory explicitly
app.set("views", "./1. Huxn/Practice/views"); // This points to 'views' inside the '1. Huxn/Practice' folder

// Set the view engine to EJS
app.set("view engine", "ejs");

app.use("/", route);

app.listen(5007, () => {
  console.log("Server is running on port 5001...");
});
