require("dotenv").config();
const express = require("express");
// const postRouter = require("./routes/postRouter");
const plantsRouter = require("./routes/plantsRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

// create the server and setup routes
const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.use(postRouter);
app.use("/api/plants", plantsRouter);
// app.use(userRouter);
app.get("/", (req, res) => res.send("Express Lambda Example Server"));
// const port = process.env.PORT || 3001;

// // run the server locally
// app.listen(port, () =>
//   console.log("Server listening at http://localhost:3001")
// );

module.exports = app;
