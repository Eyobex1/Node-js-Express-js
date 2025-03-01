import express from "express";
import web from "./routes/web.js";
const app = express();

app.set("views", "1. Huxn/2.Express Js/14. EJS COURSE/views"); // This points to 'views' inside the '1. Huxn/Practice' folder

app.set("view engine", "ejs");
app.use("/", web);

app.listen(8000, () => console.log("Server Up!"));
