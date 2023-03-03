import express from "express";
import mongoose from "mongoose";
import { config } from "./configs";
import { apiRouter } from "./routes/apiRouter";

const app = express();

const { PORT, MONGO_CONNECT_URL_SERVER } = config;

express.json();
app.use("/api", apiRouter);

async function connectDB() {
  await mongoose.connect(MONGO_CONNECT_URL_SERVER as string);
}

connectDB();
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("DB connected");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
