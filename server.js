import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";



import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
// hello
// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRouter.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url)); // because we're using ES6-modules not common.js

app.use(express.static(path.resolve(__dirname, "./client/build"))); // static assets

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json()); // make json-data available
app.use(helmet()); // secure Express-app by setting various HTTP headers
app.use(xss()); // node-Connect-middleware to sanitize user input coming from POST body, GET queries, and url params
app.use(mongoSanitize()); // Sanitizes user-supplied data to prevent MongoDB Operator Injection

app.get("/api/v1", (req, res) => {
  res.json("Welcome!");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

// direct to index.html for react-router after the 2 routes above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // only connect to server if successfully-connected to DB
    app.listen(port, () =>
      console.log(`Server is listening to :${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();