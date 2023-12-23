const connectDB = require(`./db/connect`);
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require(`./middleware/Not-found`);
const errorHandlesMiddleware = require(`./middleware/error-handler`);
require(`dotenv`).config();
//middleware
app.use(express.static(`./public`));
app.use(express.json());

//routes

app.use(`/api/v1/tasks`, tasks);
app.use(notFound);
app.use(errorHandlesMiddleware);
const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
